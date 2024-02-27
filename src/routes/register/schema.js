import { z } from 'zod';

export const formSchema = z.object({
	name: z.string().min(2).max(100),
	email: z.string().email(),
	username: z.string().min(5).max(50),
	dob: z.string().refine((v) => v, { message: 'A date of birth is required.' }),
	// password: z.string().min(8).max(100),
	terms: z.literal(true)
});
