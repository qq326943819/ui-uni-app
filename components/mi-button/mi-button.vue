<template>
  <button
    hover-class="hover"
    class="after:hidden p-0 m-0 flex font-bold text-base justify-center items-center rounded-none h-88rpx"
    :class="[
      {
        'bg-primary text-inverse': isPrimary,
        'bg-success text-inverse': isSuccess,
        'bg-warning text-inverse': isWarning,
        'bg-danger text-inverse': isDanger,
        'bg-inverse text-primary border-solid border-4rpx': isDefault,
        'bg-default text-primary': isInfo,
        '!rounded-8rpx': rounded,
        'w-330rpx': size === 'normal',
        'w-220rpx': size === 'small',
        'w-136rpx h-64rpx text-sm': size === 'mini',
      },
    ]"
    v-bind="$attrs"
  >
    <slot>按钮</slot>
  </button>
</template>

<script setup lang="ts">
  import { computed } from "vue";

  const props = withDefaults(
    defineProps<{
      /**
       * 主题色 默认default
       */
      type?: "primary" | "default" | "warning" | "danger" | "success" | "info";
      /**
       * 尺寸 默认full
       */
      size?: "full" | "normal" | "small" | "mini";
      /**
       * 是否圆角 默认无
       */
      rounded?: boolean;
    }>(),
    {
      type: "default",
      size: "full",
      rounded: false,
    }
  );

  const isPrimary = computed(() => props.type === "primary");
  const isSuccess = computed(() => props.type === "success");
  const isWarning = computed(() => props.type === "warning");
  const isDanger = computed(() => props.type === "danger");
  const isInfo = computed(() => props.type === "info");
  const isDefault = computed(() => props.type === "default");
</script>

<style scoped lang="scss">
  .hover {
    opacity: 0.7;
  }
</style>
