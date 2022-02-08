<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends" :key="item.link">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendView',
  props: {
    recommends: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.recommend{
  display: flex;
  font-size: 12px;
  padding-bottom: 10px;
  border-bottom: 10px solid #eee;
}
.recommend-item{
  flex: 1;
  text-align: center;
}
.recommend img {
  width: 60px;
  height: 60px;
  margin-bottom: 5px;
}
</style>