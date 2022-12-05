<script lang="ts" setup>
  import { mock } from "mockjs";
  import { ref } from "vue";
  import MiPicker from "../../components/mi-picker/mi-picker.vue";

  const pickValue = ref(null);

  const { options1 } = mock({
    "options1|10": ["@string"],
  });
  const { options2 } = mock({
    "options2|10": ["@increment"],
  });
  const { options3 } = mock({
    "options3|10": [
      {
        label: "@string",
        value: "@increment",
      },
    ],
  });
  const { options4 } = mock({
    "options4|10": [
      {
        id: "@id",
        name: "@string",
      },
    ],
  });
</script>

<template>
  <view class="leading-loose p-4">
    <view>选择的Value值：{{ pickValue }}</view>

    <view>基础使用（options为字符串数组）</view>
    <MiPicker v-model="pickValue" :options="options1"></MiPicker>

    <view>基础使用（options为数字数组）</view>
    <MiPicker v-model="pickValue" :options="options2"></MiPicker>

    <view>基础使用（options为对象数组）</view>
    <MiPicker v-model="pickValue" :options="options3"></MiPicker>

    <view>指定label和value的key（options为对象数组）</view>
    <MiPicker
      v-model="pickValue"
      :options="options4"
      label-key="name"
      value-key="id"
    ></MiPicker>

    <view>禁用状态</view>
    <MiPicker v-model="pickValue" :options="options3" disabled></MiPicker>
  </view>
</template>
