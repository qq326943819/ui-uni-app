<script lang="ts" setup>
  import MiButton from "../../components/mi-button/mi-button.vue";
</script>

<template>
  <view class="p-2 break-all">
    <view class="my-2">默认按钮</view>
    <MiButton></MiButton>

    <view class="my-2">主题色</view>

    <MiButton class="my-2" type="default">默认</MiButton>
    <MiButton class="my-2" type="primary">主要</MiButton>
    <MiButton class="my-2" type="success">成功</MiButton>
    <MiButton class="my-2" type="warning">警告</MiButton>
    <MiButton class="my-2" type="danger">危险</MiButton>
    <MiButton class="my-2" type="info">信息</MiButton>

    <view class="my-2">尺寸</view>

    <MiButton class="my-2">默认整行</MiButton>
    <MiButton class="my-2" size="normal">常规</MiButton>
    <MiButton class="my-2" size="small">小</MiButton>
    <MiButton class="my-2" size="mini">迷你</MiButton>

    <view class="my-2">圆角</view>
    <MiButton class="my-2" size="normal">无圆角</MiButton>
    <MiButton class="my-2" size="normal" rounded>有圆角</MiButton>

    <view class="my-2">继承button的所有prop</view>
    <a href="https://uniapp.dcloud.net.cn/component/button.html" target="_blank"
      >https://uniapp.dcloud.net.cn/component/button.html</a
    >
  </view>
</template>
