<template>
  <top-title title="Random WebUI Version" :navAttr="navAttr"/>
  <van-cell title="Random" is-link to="/maker" value="随机数生成器" />
</template>
<script>
import { defineComponent } from "vue";
import { NavBar, Toast, Cell } from "vant";
import TopTitle from "../components/TopTitle.vue";

export default defineComponent({
  name: "App",
  components: {
    [NavBar.name]: NavBar,
    [Cell.name]: Cell,
    TopTitle,
  },
  setup() {
    const onClickLeft = () => Toast("返回");
    const onClickRight = () => Toast("按钮");
    return {
      onClickLeft,
      onClickRight,
    };
  },
  data() {
      const navAttr = {
          // 'left-text': '返回',
          // 'left-arrow': true,
      };
      return {
          navAttr
      }
  }
});
</script>
<style>
.page-top-title {
  font-size: 1.23em;
  font-weight: bold;
}
</style>