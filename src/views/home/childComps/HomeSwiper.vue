<template>
  <swiper class="home-swiper">
    <swiper-item v-for="item in banners" :key="item.link">
      <a :href="item.link">
        <img :src="item.image" alt />
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
    SwiperItem
  },
  props: {
    banners: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  .home-swiper img{
    width: 100%;
    height: 200px;
  }
</style>