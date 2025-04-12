import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";
import pluginReactHooks from "eslint-plugin-react-hooks";

export default defineConfig([
  {
    ignores: [".next", "*.config.*"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } },
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: { globals: globals.browser },
  },
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended, // ✅ already includes the react plugin
  // ...fixupConfigRules(pluginReactConfig),
  {
    // ✅ Only add new plugins not already present, like react-hooks
    plugins: {
      "react-hooks": pluginReactHooks,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/no-unused-vars":"warn"
    },
  },
]);