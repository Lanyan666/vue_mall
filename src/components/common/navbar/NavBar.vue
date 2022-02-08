<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
  .nav-bar{
    display: flex;
    left: 0;
    right: 0;
    top: 0;
    height: 44px;
  }
  .left, .right{
    width: 60px;
    background-color: rgb(224, 157, 191);
  }
  .center{
    flex: 1;
    line-height: 44px;
    background-color: rgb(243, 149, 185);
    text-align: center;
  }
</style>>
