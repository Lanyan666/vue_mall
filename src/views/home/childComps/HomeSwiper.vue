<template>
  <swiper class="home-swiper">
    <swiper-item v-for="item in banners" :key="item.link">
      <a :href="item.link">
        <img :src="item.image" alt @load="swiperImageLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/swiper";

export default {
  name: 'HomeSwiper',
  components: {
    Swiper,
    SwiperItem,
    isLoad: false
  },
  props: {
    banners: {
      type: String,
      required: true
    }
  },
  methods: {

    swiperImageLoad() {
      if (!this.isLoad) {
        this.$emit('swiperImageLoad')
        this.isLoad = true
      }
    }
  }
}
</script>

<style scoped>
.home-swiper img {
  width: 100%;
  height: 200px;
}
</style>