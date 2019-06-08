import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict:true,
  state: {
    activeIndex : 0,
    menus :[{
      name : '语文',
      index : 0,
      Childs:[
        {
          name : '一年级语文',
          index:0
        }
      ]
    },
  ]
  },
  mutations: {},
  actions: {},
});
