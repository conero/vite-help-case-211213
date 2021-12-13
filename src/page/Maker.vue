<template>
  <top-title title="Random" :navAttr="navAttr" backUrl="/" />
  <van-form @submit="onSubmit">
    <van-field
      v-model="state.name"
      name="姓名"
      label="姓名"
      placeholder="姓名"
    />
    <van-field
      v-model="state.id_card"
      name="证件号"
      label="证件号"
      placeholder="证件号"
    />
    <van-field
      v-model="state.birthplace"
      name="出生地"
      label="出生地"
      placeholder="出生地"
    />
    <van-field
      v-model="state.birthday"
      name="生日"
      label="生日"
      placeholder="生日"
    />
    <van-field
      v-model="state.phone"
      name="手机号"
      label="手机号"
      placeholder="手机号"
    />
    <van-field
      v-model="state.org_code"
      name="所在组织机构代码"
      label="所在组织机构代码"
      placeholder="所在组织机构代码"
    />
    <van-button round block type="primary" native-type="submit">
      生成
    </van-button>
  </van-form>
</template>
<script>
import { defineComponent, reactive } from "vue";
import TopTitle from "../components/TopTitle.vue";
import { Form, Field, Button, Toast } from "vant";
import axios from "axios";

export default defineComponent({
  name: "Maker",
  components: {
    TopTitle,
    [Form.name]: Form,
    [Field.name]: Field,
    [Button.name]: Button,
  },
  data() {
    const navAttr = {
      "left-text": "返回",
      "left-arrow": true,
    };
    return {
      navAttr,
    };
  },
  setup() {
    const state = reactive({
      name: "",
      id_card: "",
      birthplace: "",
      birthday: "",
      phone: "",
      org_code: "",
    });
    // 刷新数据
    let flushData = () => {
      axios
        .get("/api/random")
        .then((res) => {
          let data = res.data;
          for (let k in data) {
            state[k] = data[k];
          }
        })
        .catch((er) => {
          Toast.fail(er);
        });
    };
    const onSubmit = (values) => {
      flushData();
    };

    flushData();

    return {
      onSubmit,
      state,
    };
  },
});
</script>