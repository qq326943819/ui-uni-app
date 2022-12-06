<script lang="ts" setup>
  import MiToast from "../../components/mi-toast/mi-toast.vue";
  import MiButton from "../../components/mi-button/mi-button.vue";
  import { ref } from "vue";
  import { ToastInstanceExpose } from "@/components/mi-toast/toast";

  const toast = ref<ToastInstanceExpose>();

  function showToast() {
    toast.value.show({
      message: "Hello World",
      duration: 3 * 1000,
    });
  }
</script>

<template>
  <view>
    <MiToast ref="toast"></MiToast>

    <MiButton @click="showToast">显示toast</MiButton>
  </view>
</template>
