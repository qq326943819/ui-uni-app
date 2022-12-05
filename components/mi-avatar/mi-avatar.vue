<script lang="ts" setup>
  import { computed } from "vue";
  import defaultImage from "./user-avatar-line.png";

  const props = withDefaults(
    defineProps<{
      /**
       * 图片尺寸 CSS值
       */
      size?: string;
      /**
       * 图片地址
       */
      src?: string;
      /**
       * 图片形状
       */
      shape?: "circle" | "square";
      /**
       * 文字头像
       */
      text?: string;
      /**
       * 文字大小
       */
      fontSize?: string;
      /**
       * 文字颜色 默认白色
       */
      fontColor?: string;
      /**
       * 文字头像的背景色
       */
      backgroundColor?: string;
    }>(),
    {
      size: "3rem",
      shape: "circle",
      src: defaultImage,
      text: "",
      fontSize: "18px",
      fontColor: "#ffffff",
      backgroundColor: "#1589FC",
    }
  );

  const avatarStyle = computed(() => {
    return {
      width: props.size,
      height: props.size,
    };
  });

  const fontAvatarStyle = computed(() => {
    return {
      fontSize: props.fontSize,
      color: props.fontColor,
      backgroundColor: props.backgroundColor,
    };
  });
</script>

<template>
  <view
    class="inline-flex justify-center items-center overflow-hidden"
    :style="avatarStyle"
    :class="[
      {
        'rounded-50/100': shape === 'circle',
      },
    ]"
  >
    <image v-if="!text" :src="src" class="w-full h-full"></image>

    <view
      v-else
      class="w-full h-full flex justify-center items-center"
      :style="fontAvatarStyle"
      >{{ text }}</view
    >
  </view>
</template>
