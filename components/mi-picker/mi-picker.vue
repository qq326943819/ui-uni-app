<script lang="ts" setup>
  import { findIndex, get, head, isNull, isObject, map } from "lodash";
  import { computed } from "vue";
  import MiInput from "../mi-input/mi-input.vue";

  const props = withDefaults(
    defineProps<{
      modelValue?: unknown;
      options?: unknown[];
      labelKey?: string;
      valueKey?: string;
      disabled?: boolean;
    }>(),
    {
      modelValue: null,
      options: () => [],
      labelKey: "label",
      valueKey: "value",
      disabled: null,
    }
  );

  const emits = defineEmits<{
    (e: "update:modelValue", v: unknown): void;
  }>();

  const options = computed(() => {
    if (isObject(head(props.options))) {
      return props.options;
    } else {
      return map(props.options, (i) => {
        return {
          [props.labelKey]: i,
          [props.valueKey]: i,
        };
      });
    }
  });

  const currentSelectIndex = computed(() => {
    if (isNull(props.modelValue)) return null;

    const index = findIndex(options.value, (i) => {
      return get(i, props.valueKey) === props.modelValue;
    });
    return index === -1 ? null : index;
  });

  const currentLabel = computed(() => {
    return get(
      options.value,
      `[${currentSelectIndex.value}].${props.labelKey}`
    );
  });

  function changeModelValue(e) {
    emits(
      "update:modelValue",
      get(options.value, `[${e.detail.value}].${props.valueKey}`)
    );
  }
</script>

<template>
  <picker
    :range="options"
    :range-key="labelKey"
    :value="currentSelectIndex"
    :disabled="disabled"
    @change="changeModelValue"
  >
    <MiInput
      border="surround"
      placeholder="请选择"
      :model-value="currentLabel"
      class="pointer-events-none"
      :disabled="disabled"
    >
      <template #append>
        <image src="./arrow-right.png" class="w-1em h-1em ml-2"></image>
      </template>
    </MiInput>
  </picker>
</template>
