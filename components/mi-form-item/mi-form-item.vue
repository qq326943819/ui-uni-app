<script lang="ts" setup>
  import { computed, inject } from "vue";
  import { LabelPosition, provideKey } from "../mi-form/typings";

  const option = inject(provideKey);

  const props = withDefaults(
    defineProps<{
      label?: string;
      labelPosition?: LabelPosition;
      required?: boolean;
    }>(),
    {
      label: "",
      labelPosition: null,
      required: false,
    }
  );

  const labelPosition = computed(
    () => props.labelPosition ?? option.labelPosition
  );

  const isLeftLabel = computed(() => labelPosition.value === "left");
  const isTopLabel = computed(() => !isLeftLabel.value);
</script>

<template>
  <view class="border-solid border-0 border-b border-default">
    <view
      :class="[
        {
          'flex justify-between items-center': isLeftLabel,
        },
      ]"
    >
      <view class="mr-4 flex-shrink-0">
        <text v-if="required" class="text-danger">*</text>
        <text>{{ label }}</text>
      </view>
      <view
        :class="[
          {
            'flex-auto text-right': isLeftLabel,
          },
        ]"
      >
        <slot></slot>
      </view>
    </view>

    <slot name="footer"></slot>
  </view>
</template>
