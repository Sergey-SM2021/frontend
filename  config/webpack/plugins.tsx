import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { WebpackPluginServe } from "webpack-plugin-serve";

interface IPlugins {
  html: string;
}

export const plugins = ({ html }: IPlugins) => {
  return [
    new HtmlWebpackPlugin({ template: html }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin(),
    new ReactRefreshWebpackPlugin(),
    new WebpackPluginServe(),
  ];
};
