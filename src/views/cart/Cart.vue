<template>
  <nav-bar>
    <template v-slot:center>
      <div class="cart-title">购物车({{cartLength}})</div>
    </template>
  </nav-bar>
  <cart-list :cart-list="cartList"></cart-list>
  <cart-bottom-bar></cart-bottom-bar>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import CartList from './childComps/cartList.vue'
import cartBottomBar from './childComps/cartBottomBar.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'Cart',
  components: {
    NavBar,
    CartList,
    cartBottomBar
  },
  computed:{
    ...mapGetters([
      'cartLength',
      'cartList'
    ])
  }
}
</script>

<style scoped>
  .cart-title{
    color: #fff;
  }
</style>