import * as Vue from "vue";
import router from "./router";

// 5. 创建并挂载根实例
const app = Vue.createApp({});
app.use(router);
app.mount("#app");
