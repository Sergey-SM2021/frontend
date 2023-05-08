import { Configuration } from "webpack";

interface IResolve {
  src: string;
}

export const resolve = ({ src }: IResolve): Configuration["resolve"] => {
  return {
    extensions: [".tsx", ".ts", ".js"],
    modules: ["node_modules", src],
    preferAbsolute: true,
  };
};
