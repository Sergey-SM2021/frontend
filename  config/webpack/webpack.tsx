import { Configuration } from "webpack";
import { plugins } from "./plugins";
import { resolve } from "./resolve";
import { rules } from "./rules";
import { IConfiguration } from "./types/types";
import path from "path";
import "webpack-dev-server";

export const configuration = ({
  mode,
  paths,
  port,
}: IConfiguration): Configuration => {
  return {
    entry: paths.entry,
    output: {
      path: path.resolve("build"),
      clean: true,
      filename: "[name].[contenthash].bundle.js",
    },
    mode,
    plugins: plugins({ html: paths.html, isDev: mode === "development" }),
    module: {
      rules: rules({ mode }),
    },
    resolve: resolve({ src: paths.src }),
    devtool: mode === "development" ? "inline-source-map" : undefined,
    devServer:
      mode === "development"
        ? {
            hot: true,
            historyApiFallback: true,
            port,
            open: true,
          }
        : undefined,
  };
};
