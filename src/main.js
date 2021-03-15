import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// 第三方库引入
import VueRouter from "vue-router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import wow from "wowjs";
import "animate.css";
import "@/styles/index.scss";

import FastClick from "fastclick";
import VueLazyload from "vue-lazyload";
import moment from "moment";

// 第三方库
Vue.use(ElementUI, { size: "small", zIndex: 3000 });
Vue.use(VueRouter);
Vue.use(VueLazyload);
window.Promise = window.Promise || Promise;
FastClick.attach(document.body);

Vue.prototype.$moment = moment;
Vue.prototype.$wow = wow;
Vue.prototype.$message = ElementUI.Message;

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
