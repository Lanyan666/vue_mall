<template>
  <tab-bar class="tab-bar">
    <tab-bar-item path="/home">
      <template v-slot:item-icon><img src="@/assets/img/tabbar/home.svg" alt=""></template>
      <template v-slot:item-active-icon><img src="../../../assets/img/tabbar/home_active.svg" alt=""></template>
      <template v-slot:item-text><span>首页</span></template>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <template v-slot:item-icon><img src="../../../assets/img/tabbar/category.svg" alt=""></template>
      <template v-slot:item-active-icon><img src="../../../assets/img/tabbar/category_active.svg" alt=""></template>
      <template v-slot:item-text><span>分类</span></template>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <template v-slot:item-icon><img src="../../../assets/img/tabbar/shopcart.svg" alt=""></template>
      <template v-slot:item-active-icon><img src="../../../assets/img/tabbar/shopcart_active.svg" alt=""></template>
      <template v-slot:item-text><span>购物车</span></template> 
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <template v-slot:item-icon><img src="../../../assets/img/tabbar/profile.svg" alt=""></template>
      <template v-slot:item-active-icon><img src="../../../assets/img/tabbar/profile_active.svg" alt=""></template>
      <template v-slot:item-text><span>我的</span></template> 
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from '../../common/tabbar/TabBar'
  import TabBarItem from '../../common/tabbar/TabBarItem'

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>
.tab-bar img{
  width: 50px;
  height: 40px;
}
</style>
