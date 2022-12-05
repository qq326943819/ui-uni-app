<script lang="ts" setup>
  import MiForm from "../../components/mi-form/mi-form.vue";
  import MiFormItem from "../../components/mi-form-item/mi-form-item.vue";
  import MiInput from "../../components/mi-input/mi-input.vue";
  import { reactive } from "vue";

  const form = reactive({
    name: "",
  });
</script>

<template>
  <view>
    <MiForm title="基础用法">
      <MiFormItem label="微格名称（required）" required>
        <MiInput v-model.number="form.name"></MiInput>
      </MiFormItem>

      <MiFormItem label="负责人">
        <MiInput v-model="form.name" placeholder="请选择负责人"></MiInput>
      </MiFormItem>

      <MiFormItem label="管辖小区">
        <MiInput v-model="form.name"></MiInput>
      </MiFormItem>

      <MiFormItem label="小区光交数">
        <MiInput v-model="form.name"></MiInput>
      </MiFormItem>

      <MiFormItem label="分纤箱数量">
        <MiInput v-model="form.name"></MiInput>
      </MiFormItem>
    </MiForm>

    <MiForm title="Label在上方" label-position="top" class="py-4">
      <MiFormItem label="微格名称（required）" required>
        <MiInput v-model.number="form.name"></MiInput>
      </MiFormItem>

      <MiFormItem label="负责人">
        <MiInput v-model="form.name" placeholder="请选择负责人"></MiInput>
      </MiFormItem>

      <MiFormItem label="管辖小区">
        <MiInput v-model="form.name"></MiInput>
      </MiFormItem>

      <MiFormItem label="小区光交数">
        <MiInput v-model="form.name"></MiInput>
      </MiFormItem>

      <MiFormItem label="分纤箱数量">
        <MiInput v-model="form.name"></MiInput>
      </MiFormItem>
    </MiForm>
  </view>
</template>
