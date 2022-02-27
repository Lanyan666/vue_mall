<template>
  <div class="check-button" :class="{ 'selector-active': isChecked }" @click="checkBtnClick">
    <img src="src/assets/img/cart/tick.svg" alt />
  </div>
</template>

<script>
export default {
  name: 'checkButton',
  props: {
    isChecked: {
      type: Boolean,
      default: true
    }
  },
  methods:{
    checkBtnClick(){
      this.$emit('checkBtnClick')
    }
  }

}
</script>

<style scoped>
/* .check-button {
  border-radius: 50%;
  border: 2px solid #aaa;
  background-color: red;
}
.selector-active {
  background-color: red;
} */

.check-button {
  position: relative;
  margin: 0;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid #ccc;
  cursor: pointer;
}

.selector-active {
  background-color: #ff8198;
  border-color: #ff8198;
}
</style>