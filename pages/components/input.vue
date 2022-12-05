<script lang="ts" setup>
  import { ref } from "vue";
  import MiInput from "../../components/mi-input/mi-input.vue";

  const inputValue = ref("");
</script>

<template>
  <view class="p-base leading-3rem">
    <view>基本使用</view>
    <MiInput v-model="inputValue"></MiInput>

    <view>全边框（可清空）</view>
    <MiInput v-model="inputValue" border="surround" clearable></MiInput>

    <view>下划线（可清空）</view>
    <MiInput v-model="inputValue" border="bottom" clearable></MiInput>

    <view>全边框（禁用）</view>
    <MiInput
      v-model="inputValue"
      border="surround"
      clearable
      disabled
      type="tel"
    ></MiInput>

    <view>圆角边框</view>
    <MiInput
      v-model="inputValue"
      border="surround"
      clearable
      shape="circle"
    ></MiInput>
  </view>
</template>
