<template>
  <view v-if="actions.length" class="relative" :style="{ height }">
    <view id="content-container" class="fixed z-30 bottom-0 w-full bg-inverse">
      <slot></slot>

      <view
        class="box-border border-solid border-0 border-t border-default flex px-row justify-between items-center min-h-112rpx"
      >
        <slot name="left"></slot>
        <MiButton
          v-for="(item, index) in actions"
          :key="index"
          hover-class="none"
          :disabled="item.disabled"
          class="flex-1 not-first:(ml-26rpx) after:(hidden) flex justify-center items-center h-88rpx box-border text-size-base p-0"
          :type="item.type"
          @click="item.command?.call(null)"
        >
          {{ item.label }}
        </MiButton>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
  import { getCurrentInstance, onMounted, onUpdated, ref } from "vue";
  import { BottomActionItem } from "./bottom-action";
  import MiButton from "../mi-button/mi-button.vue";

  const height = ref("0");

  onMounted(computHeight);
  onUpdated(computHeight);

  /**
   * 视图变化后 重新计算占位高度
   */
  function computHeight() {
    const ins = getCurrentInstance();
    const query = uni.createSelectorQuery().in(ins);

    query
      .select("#content-container")
      .boundingClientRect((res) => {
        if (res) height.value = `${res.height}px`;
      })
      .exec();
  }

  defineProps<{
    actions: BottomActionItem[];
  }>();
</script>
