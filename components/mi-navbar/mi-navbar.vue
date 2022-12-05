<template>
  <view>
    <view
      class="grid grid-cols-3 h-44px fixed z-50 w-full box-border text-sm border-solid border-0 border-b border-default"
    >
      <view class="flex items-center px-3">
        <image src="./back.png" class="w-4 h-4 mr-1" @click="back"></image>
        <slot name="left"></slot>
      </view>

      <view class="font-bold text-base flex justify-center items-center">
        <slot>
          <text>标题</text>
        </slot>
      </view>

      <view class="flex items-center justify-end px-3">
        <slot name="right"></slot>
      </view>
    </view>

    <!-- 占位 -->
    <view class="h-44px"></view>
  </view>
</template>

<script setup lang="ts">
  function back() {
    uni.navigateBack({});
  }
</script>
