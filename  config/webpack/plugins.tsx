import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

interface IPlugins {
  html: string;
}

export const plugins = ({ html}: IPlugins) => {
  return [
    new HtmlWebpackPlugin({ template: html }),
    new webpack.ProgressPlugin(),
  ];
};
