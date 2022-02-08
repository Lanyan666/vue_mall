<template>
  <div id="app">
    <main-tab-bar class="main-tab-bar"></main-tab-bar>
  </div>
  <router-view/>
</template>
<script>
import MainTabBar from '@/components/content/tabbar/MainTabBar.vue'
  export default {
    name: 'app',
    components: {
      MainTabBar
    },
    methods: {
      showA(){
        alert(111);
      }
    }
  }
</script>
<style>
@import "./assets/css/base.css";
.main-tab-bar{
  z-index: 999;
}
</style>
