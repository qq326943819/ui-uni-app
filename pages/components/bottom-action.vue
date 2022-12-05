<script lang="ts" setup>
  import { BottomActionItem } from "@/components/mi-bottom-action/bottom-action";
  import { Random } from "mockjs";
  import { computed } from "vue";
  import MiBottomAction from "../../components/mi-bottom-action/mi-bottom-action.vue";

  const paragraph = Random.cparagraph(45);

  const actions = computed<BottomActionItem[]>(() => {
    return [
      {
        label: "取消",
        command: () => {
          console.log("取消");
        },
      },
      {
        label: "确定",
        type: "primary",
        command: () => {
          console.log("确定");
        },
      },
    ];
  });
</script>

<template>
  <view>
    <view class="m-4"
      >底部菜单会自动计算带上插槽后的高度，并在文档中留下占位，因此不用再做额外的内边距或外边距控制即可在内容超出页面时正常滚动。</view
    >

    <view class="m-4">{{ paragraph }}</view>

    <MiBottomAction :actions="actions">
      <view class="p-4 bg-gray-700 text-inverse">我是插槽内容</view>
    </MiBottomAction>
  </view>
</template>
