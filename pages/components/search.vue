<script lang="ts" setup>
  import { ref } from "vue";
  import MiSearch from "../../components/mi-search/mi-search.vue";

  const value = ref("");
</script>

<template>
  <view class="leading-loose p-4">
    <view>基础使用</view>

    <MiSearch v-model="value"></MiSearch>
  </view>
</template>
