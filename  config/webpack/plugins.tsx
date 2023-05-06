import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

interface IPlugins {
  html: string;
}

export const plugins = ({ html }: IPlugins) => {
  return [
    new HtmlWebpackPlugin({ template: html }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin(),
  ];
};
