<script lang="ts" setup>
  import { isEmpty } from "lodash";
  import { computed } from "vue";

  const emits = defineEmits(["update:modelValue"]);
  const props = withDefaults(
    defineProps<{
      placeholder?: string;
      /**
       * 边框类型，surround-四周边框，bottom-底部边框，none-无边框
       */
      border?: "surround" | "bottom" | "none";
      modelValue?: unknown;
      /**
       * 是否可清空
       */
      clearable?: boolean;
      /**
       * 是否禁用
       */
      disabled?: boolean;
      /**
       * 输入框类型 详见uni-app文档
       * https://uniapp.dcloud.net.cn/component/input.html#input
       */
      type?:
        | "text"
        | "number"
        | "idcard"
        | "digit"
        | "tel"
        | "safe-password"
        | "nickname";
      /**
       * 输入框形状，circle-圆形，square-方形
       */
      shape?: "square" | "circle";
    }>(),
    {
      placeholder: "请输入内容",
      border: "none",
      modelValue: null,
      clearable: null,
      disabled: null,
      type: "text",
      shape: "square",
    }
  );

  const cacheModelValue = computed({
    get() {
      return props.modelValue;
    },
    set(val) {
      emits("update:modelValue", val);
    },
  });

  const showClearIcon = computed(
    () => !props.disabled && props.clearable && !isEmpty(cacheModelValue.value)
  );
</script>

<template>
  <view
    class="p-2 px-3 flex items-center"
    :class="[
      {
        'border-solid border-1 border-default': border !== 'none',
        '!border-0 !border-b': border === 'bottom',
        'bg-default': disabled,
        'rounded-2em px-4': shape === 'circle',
      },
    ]"
  >
    <input
      v-model="cacheModelValue"
      :placeholder="placeholder"
      class="flex-auto"
      :disabled="disabled"
      v-bind="$attrs"
    />

    <image
      v-if="showClearIcon"
      src="./clear.png"
      class="w-1em h-1em ml-2"
      @click="cacheModelValue = null"
    ></image>

    <view class="flex items-center">
      <slot name="append"></slot>
    </view>
  </view>
</template>
