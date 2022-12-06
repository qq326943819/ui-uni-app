<script setup lang="ts">
  const props = defineProps<{
    /**
     * tab栏文案集 字符串数组
     */
    tabs?: string[];
    /**
     * 当前激活的tab下标
     */
    modelValue: number;
  }>();

  const emits = defineEmits(["update:modelValue"]);

  function isActive(index) {
    return props.modelValue === index;
  }
</script>

<template>
  <view
    v-if="tabs.length"
    class="flex z-20 items-center shadow overflow-hidden h-88rpx bg-inverse"
  >
    <view
      v-for="(item, index) in tabs"
      :key="index"
      class="flex-1 h-full relative flex justify-center items-center"
      :class="{
        'text-primary': isActive(index),
        'after:contents after:(bg-primary !block w-96rpx h-4rpx absolute bottom-0)':
          isActive(index),
      }"
      @click="emits('update:modelValue', index)"
    >
      <view>{{ item }}</view>
    </view>
  </view>
</template>
