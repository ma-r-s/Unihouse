import { z } from 'zod';
const ACCEPTED_IMAGE_TYPES = ['image/png', 'image/jpg', 'image/jpeg'];
const MAX_IMAGE_SIZE = 4; //In MegaBytes
const MAX_NUM_PICTURES = 20;

const sizeInMB = (sizeInBytes, decimalsNum = 2) => {
	const result = sizeInBytes / (1024 * 1024);
	return +result.toFixed(decimalsNum);
};

export const formSchema = z.object({
	name: z.string().min(5),
	description: z.string(),
	address: z.string(),
	price: z.coerce.number(),
	size: z.enum(['sm', 'md', 'lg', 'xl']),
	pictures: z
		.instanceof(File, { message: 'Please upload a file.' })
		.refine((f) => sizeInMB(f.size) <= MAX_IMAGE_SIZE, 'Max 100 kB upload size.')
		.refine((f) => ACCEPTED_IMAGE_TYPES.includes(f.type), 'Unsupported file type.')
		.array()
		.refine((files) => files.length !== 0, 'Image is required')
		.refine(
			(files) => files.length <= MAX_NUM_PICTURES,
			`Maximum number of pictures is ${MAX_NUM_PICTURES}`
		)
});
