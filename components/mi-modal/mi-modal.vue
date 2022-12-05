<template>
  <MiOverlay :visible="visible" @click="maskClick">
    <view class="w-8/10 -mt-25/100 bg-inverse rounded-lg">
      <view
        class="p-base text-sm"
        :class="{ 'pt-0': modalOptions.justContent }"
      >
        <view
          v-if="!modalOptions.justContent"
          class="font-bold text-center m-base text-base"
          >{{ modalOptions.title }}</view
        >

        <view
          v-if="!modalOptions.isInputRemark"
          class="m-base text-center text-minor"
          :class="{ 'py-7 text-base': modalOptions.justContent }"
          >{{ modalOptions.content }}</view
        >

        <textarea
          v-else
          v-model="remark"
          class="text-size-sm h-auto min-h-3em border-solid w-full border border-base p-base mb-col box-border bg-[#f5f5f5]"
          :class="{ '!my-7': modalOptions.justContent }"
          type="text"
          :placeholder="modalOptions.inputPlaceholder"
        />
        <slot name="extra"></slot>
      </view>

      <!-- 按钮组 -->
      <view class="border-solid flex border-0 border-t border-default">
        <view
          v-if="modalOptions.showCancel"
          class="flex flex-1 justify-center items-center border-solid border-0 border-default border-r"
          @click="cancel"
        >
          {{ modalOptions.cancelText }}
        </view>

        <view
          class="text-primary min-h-100rpx flex flex-1 justify-center items-center"
          :class="{
            'pointer-events-none opacity-50': modalOptions.isInputNotRequired
              ? false
              : modalOptions.isInputRemark && isEmpty(remark),
          }"
          @click="confirm"
        >
          {{ modalOptions.confirmText }}
        </view>
      </view>
    </view>
  </MiOverlay>
</template>

<script lang="ts" setup>
  import { assign, cloneDeep, isEmpty, noop } from "lodash";
  import { reactive, ref } from "vue";
  import { ModalInstanceExpose, ModalOption } from "./modal";
  import MiOverlay from "../mi-overlay/mi-overlay.vue";

  const initModalOptions: ModalOption = {
    title: "提示",
    content: "",
    justContent: false,
    inputPlaceholder: "请输入内容",
    showCancel: true,
    closeOnMask: false,
    confirmText: "确定",
    cancelText: "取消",
    isInputRemark: false,
    isInputNotRequired: false,
    confirm: noop,
    cancel: noop,
  };

  const visible = ref(false);
  const remark = ref("");
  const modalOptions = reactive<ModalOption>(cloneDeep(initModalOptions));

  function confirm() {
    visible.value = false;
    modalOptions.confirm?.call(null, remark.value);
  }

  function cancel() {
    visible.value = false;
    modalOptions.cancel?.call(null);
  }

  function maskClick() {
    if (modalOptions.closeOnMask) {
      visible.value = false;
    }
  }

  defineExpose<ModalInstanceExpose>({
    open: (options) => {
      remark.value = "";
      assign(modalOptions, assign(cloneDeep(initModalOptions), options));

      visible.value = true;
    },
    close: () => {
      visible.value = false;
    },
  });
</script>
