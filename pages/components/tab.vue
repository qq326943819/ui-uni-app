<script lang="ts" setup>
  import { ref } from "vue";
  import MiTab from "../../components/mi-tab/mi-tab.vue";

  const tabs = ["待付款", "待发货", "已收货"];
  const activeIndex = ref(0);
</script>

<template>
  <view>
    <MiTab v-model="activeIndex" :tabs="tabs"></MiTab>
  </view>
</template>
