<script lang="ts" setup>
  import { gotoPage } from "@/utils/index";
  import { map, split, startCase } from "lodash";
  import { computed } from "vue";
  import MiButton from "../components/mi-button/mi-button.vue";

  /**
   * 构造组件菜单
   */
  const components = import.meta.glob("./components/*.vue");
  const componentsPageMapping = computed(() => {
    return map(components, (i, key) => {
      const name = split(split(key, "./components/")[1], ".")[0];
      return {
        name,
      };
    });
  });
</script>

<template>
  <view class="px-4 overflow-hidden">
    <MiButton
      v-for="(item, index) in componentsPageMapping"
      :key="index"
      class="my-2"
      type="primary"
      @click="gotoPage(`components/${item.name}`)"
      >{{ startCase(item.name) }}</MiButton
    >
  </view>
</template>
