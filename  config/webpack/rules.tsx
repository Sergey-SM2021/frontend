import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { RuleSetRule } from "webpack"

interface IRules {
  mode: "production" | "development";
}

export const rules = ({ mode }: IRules): RuleSetRule[] => {
	const css = {
		test: /\.s[ac]ss$/i,
		use: [
			MiniCssExtractPlugin.loader,
			{
				loader: "css-loader",
				options: {
					modules: {
						auto: /\.module\./,
						localIdentName:
              mode === "development"
              	? "[path][name]__[local]"
              	: "[hash:base64]",
					},
				},
			},
			"sass-loader",
		],
	}

	const svg = {
		test: /\.svg$/i,
		issuer: /\.[jt]sx?$/,
		use: [{ loader: "@svgr/webpack" }],
	}

	const babel = {
		test: /\.(tsx|jsx|ts|js)?$/,
		use: "babel-loader",
		exclude: /node_modules/,
	}

	return [css, babel, svg]
}
