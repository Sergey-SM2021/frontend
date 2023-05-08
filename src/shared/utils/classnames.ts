export const classnames = (
  main: string,
  additional: Record<string, boolean>,
  secondary: Array<string>
) =>
  [
    main,
    Object.entries(additional)
      .filter(([, value]) => value)
      .map((el) => el[0]),
    ...secondary,
  ].join(" ");
