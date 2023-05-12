declare module "*.scss" {
  const data: Record<string, string>;
  export default data;
}

declare module "*.svg" {
  const svg: any;
  export default svg;
}

declare const __IS_DEV__: boolean;
