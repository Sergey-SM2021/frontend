import { Configuration } from "webpack";

export const resolve = (): Configuration["resolve"] => {
  return {
    extensions: [".tsx", ".ts", ".js"],
  };
};
