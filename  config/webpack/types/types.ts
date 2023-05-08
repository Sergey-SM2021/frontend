export interface IConfiguration {
  mode: "development" | "production";
  paths: Record<"entry" | "html" | "src", string>;
  port: number;
}
