const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const dotenv = require("dotenv");
const webpack = require("webpack");

const environment = process.env.NODE_ENV || "development";

const outputDirectory = "dist";

module.exports = () => {
  const env =
    environment === "development"
      ? dotenv.config({ path: ".env.dev" }).parsed
      : dotenv.config().parsed;
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    entry: ["babel-polyfill", "./src/client/index.js"],
    output: {
      path: path.join(__dirname, outputDirectory),
      filename: "[name].[hash].js"
    },
    /*  optimization: {
    minimize: true,
    mangleWasmImports: true,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'react',
          chunks: 'all',
        }
      }
    },
  }, */
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg)$/,
          loader: "url-loader?limit=100000"
        }
      ]
    },
    devServer: {
      port: 3000,
      open: true,
      proxy: {
        "/api": "http://localhost:8080"
      },
      watchContentBase: true,
      watchOptions: {
        poll: true
      }
    },
    plugins: [
      new CleanWebpackPlugin([outputDirectory]),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        favicon: "./public/favicon.ico"
      }),
      new webpack.DefinePlugin(envKeys)
    ],
    performance: {
      hints: false
    }
  };
};
