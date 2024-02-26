import { z } from 'zod';

export const formSchema = z.object({
	username: z.string().min(5).max(50),
	dob: z.string().refine((v) => v, { message: 'A date of birth is required.' })
});
