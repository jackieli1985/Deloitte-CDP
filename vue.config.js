// const path = require("path");
const webpack = require("webpack");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const productionGzipExtensions = ["js", "css"];
// const productionGzipExtensions = /\.(js|css|json|ttf)(\?.*)?$/i;

module.exports = {
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "Deloitte CDP";
      return args;
    });
  },
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new CompressionWebpackPlugin({
        algorithm: "gzip",
        test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
        threshold: 10240,
        minRatio: 0.8
      }),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 50,
        minChunkSize: 10000
      })
    ],
    optimization: {
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: true,
          sourceMap: false,
          terserOptions: {
            mangle: true, // 混淆，默认也是开的，mangle也是可以配置很多选项的
            ecma: undefined,
            warnings: false,
            parse: {},
            compress: {
              drop_console: true,
              drop_debugger: false,
              pure_funcs: ["console.log"] // 移除console
            }
          }
        })
      ]
    }
  }
};
