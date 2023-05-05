import path from "path";
import { configuration } from "./ config/webpack/webpack";

interface IEnv {
  mode?: "development" | "production";
}

export default ({ mode }: IEnv) => {
  return configuration({
    mode: mode ?? "development",
    paths: {
      html: path.resolve("public", "index.html"),
      entry: path.resolve("src", "index.ts"),
    },
  });
};
