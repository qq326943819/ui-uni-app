import { defineConfig } from "windicss/helpers";

const navbar = "calc(var(--status-bar-height) + 44px)";
const spacing = {
  base: "24rpx 32rpx",
  col: "24rpx",
  row: "32rpx",
  statusBar: "var(--status-bar-height)",
};

export default defineConfig({
  /**
   * 全局的样式覆盖包含*选择器 小程序不支持 会报错
   */
  preflight: false,
  theme: {
    extend: {
      colors: {
        primary: "#1589FC",
        success: "#16C35B",
        warning: "#FE8700",
        danger: "#FF2E02",
        default: "#EEEEEE",
        inverse: "#ffffff",
      },
      height: {
        navbar: navbar,
      },
      margin: spacing,
      padding: spacing,
      inset: {
        navbar: navbar,
      },
    },
  },
  /**
   * 配置扫描的目录 默认src\**\*
   */
  extract: {
    include: ["pages/**/*.vue", "components/**/*.vue"],
  },
});
