const path = require("path");

module.exports = {
  publicPath: process.env.BASE_URL,
  assetsDir: process.env.BASE_URL,
  devServer: {
    contentBase: path.join(__dirname, ""), // 설정하면 url(/src/assets") 경로 사용 가능
  },
};

// module.exports = {
//   lintOnSave: false,
//   rules: {
//     // allow debugger during development
//     "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
//     // "vue/no-use-v-if-with-v-for": "off",
//     "vue/no-use-v-if-with-v-for": [
//       "error",
//       {
//         allowUsingIterationVar: false,
//       },
//     ],
//   },
// };
