<script lang="ts" setup>
  import MiAvatar from "../../components/mi-avatar/mi-avatar.vue";
  import Mock from "mockjs";

  const src = Mock.Random.image("200px");
</script>

<template>
  <view class="overflow-hidden">
    <view class="m-2">
      <view class="mb-2">基础演示</view>
      <MiAvatar :src="src"></MiAvatar>
    </view>

    <view class="m-2">
      <view class="mb-2">头像形状</view>
      <MiAvatar :src="src" shape="circle" class="mr-2"></MiAvatar>
      <MiAvatar :src="src" shape="square"></MiAvatar>
    </view>

    <view class="m-2">
      <view class="mb-2">头像尺寸</view>
      <MiAvatar :src="src" class="mr-2" size="25px"></MiAvatar>
      <MiAvatar :src="src" class="mr-2" size="35px"></MiAvatar>
      <MiAvatar :src="src" class="mr-2"></MiAvatar>
    </view>

    <view class="m-2">
      <view class="mb-2">默认头像</view>
      <MiAvatar></MiAvatar>
    </view>

    <view class="m-2">
      <view class="mb-2">文字头像</view>

      <view class="flex items-center">
        <MiAvatar text="张" class="mr-2"></MiAvatar>
        <MiAvatar
          class="mr-2"
          text="张"
          font-size="12px"
          background-color="#ffb34b"
        ></MiAvatar>
        <MiAvatar text="张" font-color="#e63e31"></MiAvatar>
      </view>
    </view>
  </view>
</template>
