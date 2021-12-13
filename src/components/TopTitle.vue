<template>
  <van-nav-bar
    @click-left="onClickLeft"
    class="page-top-title"
    :title="title"
    v-bind="navAttr"
  />
</template>
<script>
import { defineComponent } from "vue";
import { NavBar, Toast } from "vant";

// 顶级目录
export default defineComponent({
  name: "TopTitle",
  props: {
    title: {
      type: String,
      required: true,
    },
    backUrl: {
      type: String,
      required: false,
    },
    navAttr: Object, // van-nav-bar 所需的所有 props 参数
  },
  components: {
    [NavBar.name]: NavBar,
  },
  methods: {
    onClickLeft() {
      if (this && this.backUrl) {
        this.$router.push(this.backUrl);
      }
    },
  },
});
</script>
<style>
.page-top-title {
  font-size: 1.23em;
  font-weight: bold;
}
</style>