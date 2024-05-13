import eslintConfigPrettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt([
   {
      plugins: {
         prettier: prettierPlugin,
      },
      rules: {
         ...eslintConfigPrettier.rules,
         ...eslintPluginPrettierRecommended.rules,

         "no-console": "warn",
         "vue/multi-word-component-names": "off",
      },
   },
]);
