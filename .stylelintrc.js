module.exports = {
  plugin: ["stylelint-prettier"],
  extends: ["stylelint-config-standard", "stylelint-config-prettier"],
  rules: {
    "color-no-invalid-hex": true,
    "prettier/prettier": true,
  },
};
