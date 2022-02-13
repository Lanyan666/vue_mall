<template>
  <div class="back-top">
    <img src="@/assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'BackTop',
  emits: ['close']
}
</script>

<style scoped>
.back-top {
  position: fixed;
  z-index: 9;
  right: 8px;
  bottom: 65px;
  
}
.back-top img {
  height: 45px;
  width: 45px;
}
</style>