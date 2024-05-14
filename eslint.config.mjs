import globals from "globals";


export default [
  {
    files: ["**/*.js"], 
    languageOptions: {
      sourceType: "commonjs"
    },
    rules: {
      "no-unused-vars": "error"
    }
  },
  {
    languageOptions: { 
      globals: {
        ...globals.browser, 
        ...globals.node} 
      }
    },
];