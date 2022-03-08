import { createStore } from 'vuex'
import mutations  from './mutations.js'
import getters from './getters.js'
import actions from './actions.js'

export default createStore({
  state: {
    cartList: []
  },
  mutations,
  getters,
  actions
})