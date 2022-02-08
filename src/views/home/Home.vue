<template>
  <div class="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control class="tab-control" :titles='["流行","新款","精选"]' @tabClick="tabClick"></tab-control>
    <goods-list :goods="showGoodsList"></goods-list>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HomeSwiper from './childComps/HomeSwiper.vue'
import RecommendView from './childComps/RecommendView.vue'
import FeatureView from './childComps/FeatureView.vue'

import NavBar from '@/components/common/navbar/NavBar.vue'
import TabControl from '@/components/content/tabControl/TabControl.vue'
import GoodsList from '@/components/content/goods/GoodsList.vue'


import { getHomeMultiData, getHomeGoods } from '@/network/home'

export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page:0, list:[]},
        'new': {page:0, list:[]},
        'sell': {page:0, list:[]}
      },
      currentType: 'pop'
    };
  },
  computed:{
    showGoodsList(){
      return this.goods[this.currentType].list
    }
  },
  created() {
    this.getHomeMultiData();
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  methods: {
    tabClick(index){
      switch(index){
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
      }
      

    },
    getHomeMultiData(){
      getHomeMultiData().then((res) => {
      this.banners = res.data.banner.list,
        this.recommends = res.data.recommend.list;
    });
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then((res)=>{
        this.goods[type].list.push(...res.data.list);
        this.goods[type].list.page + 1;
      })
    }
  }
};
</script>
<style scoped>
  .home{
    padding-top: 44px;
  }
 .home-nav{
    top: 0;
    left: 0;
    right: 0;
    position: fixed;
    z-index: 9;
 }  
 .tab-control{
   position: sticky;
   top: 44px;
   z-index: 9;
 }
</style>