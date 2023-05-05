import path from "path";
import { configuration } from "./ config/webpack/webpack";

export default configuration({
  mode: "development",
  paths: {
    html: path.resolve("public", "index.html"),
    entry: path.resolve("src", "index.ts"),
  },
});
