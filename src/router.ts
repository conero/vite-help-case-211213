import { createRouter, createWebHashHistory } from "vue-router";
import App from "./page/App.vue";
import Maker from "./page/Maker.vue";

// 路由列表
const routes: any = [
  { "path": "/", component: App },
  { "path": "/maker", component: Maker },
];

// 路由
export default createRouter({
  history: createWebHashHistory(),
  routes,
});
