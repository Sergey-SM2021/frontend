import { Configuration } from "webpack";

export const module = (): Configuration["module"] => {
  return {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  };
};
