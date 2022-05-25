module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-prettier", "stylelint-config-tailwindcss"],
  plugins: ["stylelint-scss"],
  ignoreFiles: ["dist/**/*"],
};
