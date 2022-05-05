import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import SideBarMenu from './components/SliderBarMenu/SideBarMenu'

Vue.component("Footer", Footer);
Vue.component("NavBar", NavBar);
Vue.component("SideBarMenu", SideBarMenu);

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
    store
}).$mount('#app');
