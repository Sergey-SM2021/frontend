import HtmlWebpackPlugin from "html-webpack-plugin"
import webpack from "webpack"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin"
import { WebpackPluginServe } from "webpack-plugin-serve"
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer"

interface IPlugins {
  html: string;
  isDev: boolean;
}

export const plugins = ({ html, isDev }: IPlugins) => {
	const devPlugins = isDev
		? [
			new ReactRefreshWebpackPlugin(),
			new webpack.ProgressPlugin(),
			new WebpackPluginServe(),
			new BundleAnalyzerPlugin()
		]
		: []
	return [
		new HtmlWebpackPlugin({ template: html }),
		new MiniCssExtractPlugin(),
		new webpack.DefinePlugin({ __IS_DEV__: JSON.stringify(isDev) }),
		...devPlugins,
	]
}
