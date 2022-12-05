<script setup lang="ts">
  import { ModalInstanceExpose } from "@/components/mi-modal/modal";
  import { ref } from "vue";
  import MiModal from "../../components/mi-modal/mi-modal.vue";
  import MiButton from "../../components/mi-button/mi-button.vue";

  const modal = ref<ModalInstanceExpose>();
  function showModal() {
    modal.value.open({
      title: "我是标题",
      content: "我是内容",
    });
  }
</script>

<template>
  <view>
    <MiModal ref="modal"></MiModal>

    <MiButton @click="showModal">显示模态框</MiButton>
  </view>
</template>
