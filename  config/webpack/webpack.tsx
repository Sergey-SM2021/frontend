import { Configuration } from "webpack";
import { plugins } from "./plugins";
import { resolve } from "./resolve";
import { module } from "./module";
import { IConfiguration } from "./types/types";
import path from "path";

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
  };
};
