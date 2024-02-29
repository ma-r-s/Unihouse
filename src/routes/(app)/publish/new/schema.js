import { z } from 'zod';
const ACCEPTED_IMAGE_TYPES = ['image/png', 'image/jpg', 'image/jpeg', 'image/webp'];
const MAX_IMAGE_SIZE = 4; //In MegaBytes
const MAX_NUM_PICTURES = 20;

const sizeInMB = (sizeInBytes, decimalsNum = 2) => {
	const result = sizeInBytes / (1024 * 1024);
	return +result.toFixed(decimalsNum);
};

export const formSchema = z.object({
	name: z.string().min(5).max(100),
	description: z.string().min(20).max(300),
	address: z.string().min(8).max(52),
	price: z.coerce.number().min(500000).max(5000000),
	size: z.enum(['sm', 'md', 'lg', 'xl']),
	pictures: z
		.instanceof(File, { message: 'Please upload a file.' })
		.array()
		.refine((files) => files.length !== 0, 'At least one image is required')
		.refine(
			(files) => files.length <= MAX_NUM_PICTURES,
			`Maximum number of pictures is ${MAX_NUM_PICTURES}`
		)
	// .refine((f) => sizeInMB(f.size) <= MAX_IMAGE_SIZE, 'Max 4MB upload size.')
	// .refine((f) => {
	// 	ACCEPTED_IMAGE_TYPES.includes(f.type), 'Unsupported file type.';
	// })
});
