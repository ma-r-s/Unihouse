import { email, minLength, object, string } from 'valibot';

export const formSchema = object({
	email: string([email('The email address is badly formatted.')]),
	password: string([minLength(1, 'Please enter your password.')])
});
