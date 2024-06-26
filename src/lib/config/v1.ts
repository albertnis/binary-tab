import { z } from 'zod';

const checkboxValue = z.enum(['0', '1']);

export const configV1 = z.object({
	version: z.literal(1.9),
	lastrow: z.enum(['nothing', 'letters', 'digits']),
	light: z.enum(['blue', 'green', 'grey', 'orange', 'pink', 'white']),
	dark: z.enum(['black', 'blue', 'green', 'grey', 'red']),
	size: z.enum(['1', '2', '3', '4']),
	bookmarks: z.enum(['0', '1', '2']),
	invert: checkboxValue,
	showverttips: checkboxValue,
	hex: checkboxValue,
	'hex-light': checkboxValue,
	'auto-invert': checkboxValue,
	lat: z.union([z.string(), z.number()]),
	long: z.union([z.string(), z.number()])
});

export type ConfigV1 = z.infer<typeof configV1>;

export const defaultConfigV1: ConfigV1 = {
	'auto-invert': '1',
	bookmarks: '2',
	dark: 'green',
	hex: '0',
	'hex-light': '0',
	invert: '0',
	lastrow: 'digits',
	lat: -41.29,
	light: 'green',
	long: 174.74,
	showverttips: '1',
	size: '3',
	version: 1.9
};
