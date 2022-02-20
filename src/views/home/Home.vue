<template>
  <div class="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <tab-control
        class="tab-control"
        ref="contentTab2"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        v-show="isTabFixed"
      ></tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="scrollBackToTop"
      @pullingUp="loadMore"
      :pull-up-load="true"
    >
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control
        class="tab-control"
        ref="contentTab1"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
      ></tab-control>
      <goods-list :goods="showGoodsList"></goods-list>
    </scroll>
    <back-top @click="backToTop" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeSwiper from './childComps/HomeSwiper.vue'
import RecommendView from './childComps/RecommendView.vue'
import FeatureView from './childComps/FeatureView.vue'

import NavBar from '@/components/common/navbar/NavBar.vue'
import Scroll from '@/components/common/scroll/Scroll.vue'

import TabControl from '@/components/content/tabControl/TabControl.vue'
import GoodsList from '@/components/content/goods/GoodsList.vue'
import BackTop from '@/components/content/backTop/BackTop.vue'


import { getHomeMultiData, getHomeGoods } from '@/network/home'

export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    Scroll,
    TabControl,
    GoodsList,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] }
      },
      currentType: 'pop',
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0
    };
  },
  computed: {
    showGoodsList() {
      return this.goods[this.currentType].list
    }
  },
  unmounted(){
    console.log("destroyed");
  },
  activated(){
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
  },
  deactivated(){
    this.saveY = this.$refs.scroll.getScrollY();
  },
  created() {
    // 请求多个数据
    this.getHomeMultiData();
    // 请求商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  mounted() {
    // 监听item中图片加载完成
    const refresh = this.debounce(this.$refs.scroll.refresh, 300)
    this.$bus.on("imgLoad", () => {
      refresh();
    })
  },
  methods: {
    debounce(func, delay = 5000) {
      let timer = null;
      return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args)
        }, delay)
      }
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
      }
      this.$refs.contentTab1.currentIndex = index
      this.$refs.contentTab2.currentIndex = index
    },
    getHomeMultiData() {
      getHomeMultiData().then((res) => {
        this.banners = res.data.banner.list,
          this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].list.page + 1;
      })
    },
    backToTop() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    scrollBackToTop(position) {
      this.isShowBackTop = Math.abs(position.y) > 1000 ? true : false;
      // 决定tabContrl是否要吸顶
      this.isTabFixed = Math.abs(position.y) > this.tabOffsetTop ? true : false;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
      this.$refs.scroll.finishPullUp();
    },
    // 等轮播图图片加载完成之后获取tab-control的offsettop属性值
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.contentTab1.$el.offsetTop
    }
  }
};
</script>
<style scoped>
.home {
  height: 100vh;
  position: relative;
}
.home-nav {
  z-index: 9;
}
.tab-control {
  position: relative;
  z-index: 9;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

</style>