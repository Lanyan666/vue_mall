<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images="topImages"></detail-swiper>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue'
import DetailSwiper from './childComps/DetailSwiper.vue'
import { getDetail } from '@/network/detail.js'
export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper
  },
  data() {
    return {
      iid: "",
      message: "",
      topImages: []
    }
  },
  created() {
    this.iid = this.$route.query.iid
    getDetail(this.iid).then(res => {
      this.topImages = res.result.itemInfo.topImages
      console.log(this.topImages)
    })
  },
  activated() {
    console.log("detail-activated")
  },
  deactivated() {
  }
}
</script>

<style>
</style>