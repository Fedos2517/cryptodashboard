import Vue from 'vue'
import Vuex from 'vuex'
import coinData from './modules/coinData'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    coinData
  }
})
