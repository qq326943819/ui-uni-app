<script lang="ts" setup>
  import { provide } from "vue";
  import { LabelPosition, provideKey } from "./typings";

  const props = withDefaults(
    defineProps<{
      title?: string;
      labelPosition?: LabelPosition;
    }>(),
    {
      title: "",
      labelPosition: "left",
    }
  );

  provide(provideKey, {
    labelPosition: props.labelPosition,
  });
</script>

<template>
  <view class="leading-[100rpx] px-row bg-inverse">
    <!-- title -->
    <view
      v-if="title"
      class="flex items-center box-border h-104rpx leading-104rpx border-solid border-0 border-b border-default font-bold relative before:contents before:(w-8rpx h-40rpx bg-primary !block -ml-row absolute)"
    >
      {{ title }}</view
    >

    <slot></slot>
  </view>
</template>
