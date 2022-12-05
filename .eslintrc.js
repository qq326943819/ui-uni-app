module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:vue/vue3-recommended", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 12,
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": "error",
  },
};
