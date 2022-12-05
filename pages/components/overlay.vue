<script setup lang="ts">
  import { ref } from "vue";
  import MiOverlay from "../../components/mi-overlay/mi-overlay.vue";
  import MiButton from "../../components/mi-button/mi-button.vue";

  const visible = ref(false);
</script>

<template>
  <view>
    <MiOverlay v-model:visible="visible">
      <view class="p-4 bg-inverse">自定义内容</view>
    </MiOverlay>

    <MiButton @click="visible = true">打开遮罩</MiButton>
  </view>
</template>
