import {
	maxLength,
	minLength,
	object,
	string,
	maxValue,
	coerce,
	custom,
	forward,
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

export const formSchema = object(
	{
		name: string([
			minLength(5, 'Name must be at least 5 characters.'),
			maxLength(100, 'Your name must have 100 characters or less.')
		]),
		description: string([
			minLength(20, 'Name must be at least 5 characters.'),
			maxLength(300, 'Your name must have 100 characters or less.')
		]),
		address: string([
			minLength(5, 'Please enter your username.'),
			maxLength(100, 'Your username must have 50 characters or less.')
		]),
		passwordConfirm: string(),
		price: coerce(number([minValue(500000), maxValue(5000000)]), Number),
		size: picklist(['sm', 'md', 'lg', 'xl']),
		// pictures: instance(File, [mimeType(['image/jpeg', 'image/png'])])
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
	},
	[
		forward(
			custom((data) => data.password === data.passwordConfirm, "Passwords don't match"),
			['passwordConfirm']
		)
	]
);
// 	pictures: z
// 		.instanceof(File, { message: 'Please upload a file.' })
// 		.array()
// 		.refine((files) => files.length !== 0, 'At least one image is required')
// 		.refine(
// 			(files) => files.length <= MAX_NUM_PICTURES,
// 			`Maximum number of pictures is ${MAX_NUM_PICTURES}`
// 		)
// 		.refine(
// 			(files) => files.every((f) => sizeInMB(f.size) <= MAX_IMAGE_SIZE),
// 			'Max 4MB upload size.'
// 		)
// 		.refine(
// 			(files) => files.every((f) => ACCEPTED_IMAGE_TYPES.includes(f.type)),
// 			'Unsupported file type.'
// 		)
// });
