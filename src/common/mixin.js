import {TOP_DISTANCE, POP, NEW, SELL} from './const.js'
import BackTop from '@/components/content/backTop/BackTop.vue'

export const backTopMixin = {
  components: {
    BackTop
  },
  data(){
    return {
      showBackTop: false
    }
  },
  methods: {
    backTop(){
      this.$refs.scroll.scrollTo(0,0,1000)
    }
  }
}