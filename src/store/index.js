import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: []
  },
  mutations: {
    addCart(state, payLoad){
      // payLoad是新增的商品
      let oldProduct = null
      for(let item of state.cartList){
        if(item.iid === payLoad.iid){
          oldProduct = item
        }
      }
      if(oldProduct){
        state.cartList.count += 1
      }else{
        payLoad.count = 1
        state.cartList.push(payLoad)
      }
    }
  },
  actions: {
  },
  modules: {
  }
})