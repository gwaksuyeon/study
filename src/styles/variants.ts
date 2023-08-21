export const color = {
	main: '#35c5f0',

	defaultFont: '#424242',

	border: '#d9d9d9',
};

export const size = {
	mobileHeaderHeight: 48,
	tabletHeaderHeight: 60,
	pcHeaderHeight: 60,
};

export const zIndex = {
	component: 100,
	header: 150,
	modal: 200,
};

export const theme = {
	color,
	size,
	zIndex,
};

export type Theme = typeof theme;
