// 该模板使用了vuex，不需要可将该文件移除
import Vue from 'vue';
import Vuex from 'vuex';
import {deepClone} from '@utils/tools.js'
Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    msg:{}
  },
  mutations:{
    savePathInfo(state,param){
      state.msg = param;
    }
  }
})

export default store;