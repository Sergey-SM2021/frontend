export const classnames = (
	main: string,
	conditionClasses: Record<string, boolean> = {},
	secondary: Array<string> = []
) =>
	[
		main,
		Object.entries(conditionClasses)
			.filter(([, value]) => value)
			.map((el) => el[0]),
		...secondary,
	].filter(el => el.length).join(" ")
