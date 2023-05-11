import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { RuleSetRule } from "webpack";

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
  };

  const ts = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const svg = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: [{ loader: "@svgr/webpack" }],
  };

  return [css, ts, svg];
};
