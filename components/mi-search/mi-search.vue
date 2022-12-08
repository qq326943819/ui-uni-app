<script lang="ts" setup>
  import { useVModels } from "@vueuse/core";
  import { computed, getCurrentInstance, onMounted, reactive, ref } from "vue";

  const props = withDefaults(
    defineProps<{
      modelValue?: unknown;
    }>(),
    {
      modelValue: null,
    }
  );
  const emits = defineEmits<{
    (e: "update:modelValue", val: unknown): void;
  }>();
  const { modelValue: value } = useVModels(props, emits);

  const showFullSearcher = ref(false);

  /**
   * 用于动态计算搜索器的大小样式
   */
  const placeholderSize = reactive({
    width: "0",
    top: "0",
    left: "0",
    zIndex: "0",
  });
  const searchStyle = computed(() => {
    return showFullSearcher.value
      ? {
          width: "100%",
          top: "0",
          zIndex: "50",
        }
      : placeholderSize;
  });
  onMounted(() => {
    const query = uni.createSelectorQuery().in(getCurrentInstance());
    query
      .select("#placeholder-wrapper")
      .boundingClientRect((data) => {
        placeholderSize.width = `${data.width}px`;
        placeholderSize.top = `calc(${data.top}px + var(--window-top) + var(--status-bar-height))`;
        placeholderSize.left = `${data.left}px`;
      })
      .exec();
  });
</script>

<template>
  <view class="relative z-1000">
    <view
      id="placeholder-wrapper"
      class="relative z-30"
      :class="[
        {
          'z-0': showFullSearcher,
        },
      ]"
      @click="showFullSearcher = true"
    >
      <slot name="placeholder">
        <view
          class="text-base p-2 px-4 rounded-2em flex items-center bg-default"
        >
          <image src="./sc.png" class="w-1.3em" mode="widthFix"></image>

          <input
            class="text-sm flex-auto mx-2"
            placeholder="请输入关键字"
            type="text"
          />
        </view>
      </slot>
    </view>

    <!-- searcher 因为占位可能为其他的 所以不能和初始占位合用 -->
    <!-- 不放入遮罩层同级 因为vShow会影响动画 -->
    <view
      class="z-10 fixed w-full box-border left-0"
      :style="searchStyle"
      :class="[
        {
          'p-2 transition-all': showFullSearcher,
        },
      ]"
    >
      <view
        class="text-base p-2 z-20 px-4 rounded-2em flex items-center bg-inverse overflow-hidden"
      >
        <image src="./sc.png" class="w-1.3em" mode="widthFix"></image>

        <input
          v-if="showFullSearcher"
          v-model="value"
          class="text-sm flex-auto mx-2"
          placeholder="请输入关键字"
          type="text"
          focus
        />
      </view>
    </view>

    <view v-show="showFullSearcher" class="fixed w-full h-full inset-0 z-10">
      <!-- mask -->
      <view
        class="absolute inset-0 bg-default z-0"
        @click="showFullSearcher = false"
      ></view>
    </view>
  </view>
</template>
