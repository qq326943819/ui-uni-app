<template>
  <MiOverlay :visible="visible" is-transparent>
    <view
      class="text-inverse text-center max-w-300rpx break-all justify-center p-4 flex flex-col items-center rounded-12rpx bg-[#000000] bg-opacity-60 -mt-2/5"
    >
      <image
        v-if="options.type !== 'none'"
        class="w-80rpx h-80rpx mb-1"
        :src="iconSrc"
      ></image>
      <view>{{ options.message }}</view>
    </view>
  </MiOverlay>
</template>
<script setup lang="ts">
  import { assign, cloneDeep, delay, noop } from "lodash";
  import { computed, reactive, ref } from "vue";
  import { ToastInstanceExpose, ToastOption } from "./toast";
  import MiOverlay from "../mi-overlay/mi-overlay.vue";

  const initOptions: ToastOption = {
    type: "success",
    message: "",
    duration: 1.5 * 1000,
    then: noop,
  };

  const visible = ref(false);
  const options = reactive<ToastOption>(cloneDeep(initOptions));
  const iconSrc = computed(() => {
    return new URL(`./marker-${options.type}.png`, import.meta.url).href;
  });

  defineExpose<ToastInstanceExpose>({
    show: (ops) => {
      assign(options, assign(cloneDeep(initOptions), ops));
      visible.value = true;

      delay(() => {
        visible.value = false;
        options.then?.call(null);
      }, options.duration);
    },
  });
</script>
