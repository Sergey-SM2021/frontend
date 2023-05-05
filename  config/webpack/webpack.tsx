import { Configuration } from "webpack";
import { plugins } from "./plugins";
import { resolve } from "./resolve";
import { module } from "./module";
import { IConfiguration } from "./types/types";
import path from "path";
import "webpack-dev-server";

export const configuration = ({
  mode,
  paths,
}: IConfiguration): Configuration => {
  return {
    entry: paths.entry,
    output: {
      path: path.resolve("build"),
      clean: true,
      filename: "my-first-webpack.bundle.js",
    },
    mode,
    plugins: plugins({ html: paths.html }),
    module: module(),
    resolve: resolve(),
    devtool: mode === "development" ? "inline-source-map" : undefined,
    devServer:
      mode === "development"
        ? {
            open: true,
          }
        : undefined,
  };
};
