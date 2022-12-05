<template>
  <view
    v-if="ownVisible"
    class="fixed w-full h-full flex justify-center bg-[#000000] bg-opacity-30 items-center top-0 left-0"
    :class="[
      {
        'bg-opacity-0': isTransparent,
      },
    ]"
    :style="{
      zIndex: zIndex,
    }"
    @click="closeOnMask && (ownVisible = false)"
  >
    <slot></slot>
  </view>
</template>

<script setup lang="ts">
  import { useVModel } from "@vueuse/core";
  const props = withDefaults(
    defineProps<{
      visible: boolean;
      closeOnMask?: boolean;
      zIndex?: number;
      isTransparent?: boolean;
    }>(),
    {
      zIndex: 1000,
      isTransparent: false,
      closeOnMask: true,
    }
  );

  const emits = defineEmits(["update:visible"]);

  const ownVisible = useVModel(props, "visible", emits);
</script>
