const mutations = {
  increment_counter(state, oldProduct) {
    oldProduct.count += 1
  },
  add_to_cart(state, payLoad) {
    payLoad.count = 1
    payLoad.checked = true
    state.cartList.push(payLoad)
  }
}
export default mutations