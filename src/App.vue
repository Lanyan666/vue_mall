<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <keep-alive exclude="Detail">
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <main-tab-bar class="main-tab-bar"></main-tab-bar>
  </div>
</template>
<script>
import MainTabBar from '@/components/content/tabbar/MainTabBar.vue'
export default {
  name: 'app',
  components: {
    MainTabBar
  },
  methods: {
    showA() {
      alert(111);
    }
  }
}
</script>
<style>
@import "./assets/css/base.css";

</style>
