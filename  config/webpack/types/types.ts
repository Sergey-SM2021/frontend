import { Configuration } from "webpack";

export interface IConfiguration {
  mode: Configuration["mode"];
  paths: Record<"entry" | "html", string>;
}
