<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>

    <view class="w-full">
      <MiButton type="primary" class="m-4" @click="gotoPage('components')"
        >组件</MiButton
      >
      <MiButton type="primary" class="m-4" @click="gotoPage('templates')"
        >模版</MiButton
      >
    </view>
  </view>
</template>

<script lang="ts" setup>
  import { gotoPage } from "@/utils/index";
  import { ref } from "vue";
  import MiButton from "../components/mi-button/mi-button.vue";

  const title = ref("uni-app");
</script>

<style>
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
  }

  .text-area {
    display: flex;
    justify-content: center;
  }

  .title {
    font-size: 36rpx;
    color: #8f8f94;
  }
</style>
