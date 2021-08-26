module.exports = {
  env: { browser: true, es2021: true },
  extends: [
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "airbnb",
    "prettier",
  ],
  plugins: ["react", "@typescript-eslint", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
  },
  "import-extensions": [
    "error",
    "ignorePackages",
    { ts: "never", tsx: "never" },
  ],
};
