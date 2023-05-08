import path from "path";
import { configuration } from "./ config/webpack/webpack";

interface IEnv {
  mode?: "development" | "production";
  port?: number;
}

export default ({ mode, port }: IEnv) => {
  return configuration({
    port: port ?? 8080,
    mode: mode ?? "development",
    paths: {
      src: path.resolve("src"),
      html: path.resolve("public", "index.html"),
      entry: path.resolve("src", "index.tsx"),
    },
  });
};
