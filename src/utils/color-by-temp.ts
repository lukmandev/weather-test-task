export const displayTempAsCssColor = (temp: number) => {
	var hue = 100 + (300 * (30 - temp)) / 80;
	const color = 'hsl(' + [hue, '70%', '50%'] + ')';

	return color;
};
