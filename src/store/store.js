import Vue from 'vue'
import Vuex from 'vuex'
import {actions} from "./actions";
import {mutations} from "./mutations";

//安装插件
Vue.use(Vuex);
//创建对象
const state = {
    token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
    isDark: false,
    autoSlideMenuShow:false,
    moveFiles: {
        files: [],
        isCopy: false,
        location: ""
    }
};
const getters = {};

const modlues = {};


const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modlues
});

//导出对象
export default store;