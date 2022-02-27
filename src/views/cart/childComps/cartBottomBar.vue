<template>
  <div class="bottom-menu">
    <check-button class="select-all" :is-checked="isSelectAll" @click="checkClick"></check-button>
    <span>全选</span>
    <span class="total-price">合计：￥{{ totalPrice }}</span>
    <span class="buy-product">去结算：{{ checkLength }}</span>
  </div>
</template>

<script>
import CheckButton from './checkButton'
import { mapGetters } from 'vuex'
export default {
  name: 'cartBottomBar',
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters([
      'cartLength',
      'cartList'
    ]),
    totalPrice() {
      const cartList = this.cartList
      return cartList.filter(item => item.checked)
        .reduce((precur, value) => precur + value.count * value.price, 0).toFixed(2)
    },
    checkLength() {
      const cartList = this.cartList
      return cartList.filter(item => item.checked).length
    },
    isSelectAll() {
      const cartList = this.cartList
      if (this.cartLength === 0) return false
      return cartList.every(item => item.checked)
    }
  },
  methods: {
    checkClick() {
      if (this.isSelectAll) {
        this.cartList.map(item => item.checked = false)
      } else {
        this.cartList.map(item => item.checked = true)
      }
    }
  }
}
</script>

<style scoped>
.bottom-menu {
  width: 100%;
  height: 44px;
  background-color: #eee;
  position: fixed;
  bottom: 49px;
  left: 0;
  box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.2);
  font-size: 14px;
  color: #888;
  line-height: 44px;
  padding-left: 35px;
  box-sizing: border-box;
}
.bottom-menu .select-all {
  position: absolute;
  line-height: 0;
  left: 12px;
  top: 13px;
}

.bottom-menu .total-price {
  margin-left: 15px;
  font-size: 16px;
  color: #666;
}

.bottom-menu .buy-product {
  background-color: orangered;
  color: #fff;
  width: 100px;
  height: 44px;
  text-align: center;
  line-height: 44px;
  float: right;
}
</style>