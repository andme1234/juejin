const path = require("path");

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set("@", resolve("src"));
  },
  devServer: {
    proxy: {
      "/api": {
        target: "localhost",
        ws: true,
        changeOiring: true,
        pathRewrite: { "^/api": "" },
      },
    },
  },
};
