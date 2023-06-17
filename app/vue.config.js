const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: "Saw Kyaw",
    themeColor: "#42b983",
    msTileColor: "#42b983",
  },
});
