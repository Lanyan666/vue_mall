const actions = {
  addCart(context, payLoad) {
    return new Promise((resolve, reject) => {
      // payLoad是新增的商品
      let oldProduct = null
      for (let item of context.state.cartList) {
        if (item.iid === payLoad.iid) {
          oldProduct = item
        }
      }
      if (oldProduct) {
        // 商品数量+1
        context.commit("increment_counter", oldProduct)
        resolve("商品数量+1")
      } else {
        // 加入新商品
        context.commit("add_to_cart", payLoad)
        resolve("商品+1")
      }
    })
  }
}
export default actions