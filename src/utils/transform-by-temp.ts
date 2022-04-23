export const transformByTemp = (temp: number) => {
	const calc = (temp - 15) * 2;
	return `translateY(${-calc}px)`;
};
