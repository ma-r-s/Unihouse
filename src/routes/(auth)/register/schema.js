import {
	email,
	maxLength,
	minLength,
	object,
	string,
	date,
	maxValue,
	coerce,
	custom,
	forward,
	literal
} from 'valibot';
import moment from 'moment';
const now = moment();
export const formSchema = object(
	{
		name: string([
			minLength(1, 'Please enter your name.'),
			maxLength(100, 'Your name must have 100 characters or less.')
		]),
		email: string([email('Please enter a correct email.')]),
		password: string([minLength(8, 'Your password must have 8 characters or more.')]),
		username: string([
			minLength(1, 'Please enter your username.'),
			maxLength(50, 'Your username must have 50 characters or less.')
		]),
		passwordConfirm: string(),
		dob: coerce(
			date([maxValue(now.subtract(18, 'years'), 'You need to be at least 18 to register')]),
			(d) => new Date(d)
		),
		terms: literal(true)
	},
	[
		forward(
			custom((data) => data.password === data.passwordConfirm, "Passwords don't match"),
			['passwordConfirm']
		)
	]
);
