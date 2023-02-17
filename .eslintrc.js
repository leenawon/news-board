module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugin: ["prettier"],
  extends: ["eslint:recommended", "plugin:prettier/recommended"], // 이미 만들어진 규칙 적용
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  // 규칙 작성
  rules: {
    curly: "error",
  },
};
