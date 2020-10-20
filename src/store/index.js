import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 提供初始 state 对象
export default new Vuex.Store({
  state: {
    count:1,
    loginInfo:{},//可以从本地读取信息加载进来
  },
  getters:{
    loginInfo: state => state.loginInfo,
  },
  //同步执行
  mutations: {
    addmu(state){state.count++},
    lessmu(state){state.count--},
    setUser(state, user) {
        state.curUser = user
      },
  },
  //异步执行
  actions: {
    addac({commit}){commit('addmu')},
    lessac({commit}){commit('lessmu')},
    setUser({ commit }, user) {
        commit('setUser', user)
      },
  }
});