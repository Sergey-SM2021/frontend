export interface IConfiguration {
  mode: "development" | "production";
  paths: Record<"entry" | "html", string>;
  port: number;
}
