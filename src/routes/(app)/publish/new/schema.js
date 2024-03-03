import {
	maxLength,
	minLength,
	object,
	string,
	maxValue,
	coerce,
	custom,
	minValue,
	number,
	picklist,
	array,
	any
} from 'valibot';

const ACCEPTED_IMAGE_TYPES = ['image/png', 'image/jpg', 'image/jpeg', 'image/webp'];
const MAX_IMAGE_SIZE = 4; //In MegaBytes
const MAX_NUM_PICTURES = 20;

const sizeInMB = (sizeInBytes, decimalsNum = 2) => {
	const result = sizeInBytes / (1024 * 1024);
	return +result.toFixed(decimalsNum);
};

export const formSchema = object({
	name: string([
		minLength(5, 'Post name must be at least 5 characters.'),
		maxLength(100, 'Post name must have 100 characters or less.')
	]),
	description: string([
		minLength(20, 'Description must be at least 20 characters.'),
		maxLength(300, 'Your description must have 300 characters or less.')
	]),
	address: string([
		minLength(5, 'Address must be at least 5 characters.'),
		maxLength(100, 'Address must have 100 characters or less.')
	]),
	price: coerce(number([minValue(500000), maxValue(5000000)]), Number),
	size: picklist(['sm', 'md', 'lg', 'xl']),
	pictures: array(any(), [
		custom((files) => files.length !== 0, 'At least one image is required'),
		custom(
			(files) => files.length <= MAX_NUM_PICTURES,
			`Maximum number of pictures is ${MAX_NUM_PICTURES}`
		),
		custom(
			(files) => files.every((f) => ACCEPTED_IMAGE_TYPES.includes(f.type)),
			'Unsupported file type.'
		),
		custom(
			(files) => files.every((f) => sizeInMB(f.size) <= MAX_IMAGE_SIZE),
			'Max 4MB upload size.'
		)
	])
});
