declare module "*.scss" {
  const data: Record<string, string>
  export default data
}

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default content
}

declare const __IS_DEV__: boolean
