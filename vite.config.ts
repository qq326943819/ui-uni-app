import { defineConfig } from "vite";
/**
 * 1.8.6版本会导致uni编译报错
 * 因为使用了过新的es语法 ?? 空值合并运算符 而HBuilderX内置的node版本是12 并不支持高版本es语法
 * 回退1.8.4编译正常
 */
import WindiCSS from "vite-plugin-windicss";
// @ts-ignore 必须 uniapp支持插件
import uni from "@dcloudio/vite-plugin-uni";

export default defineConfig({
  plugins: [uni(), WindiCSS()],
});
