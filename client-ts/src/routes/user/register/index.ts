import type { RequestHandler } from '@sveltejs/kit';
import * as bcrypt from 'bcrypt';

import { db } from '$lib/database';

export const post: RequestHandler = async ({ request }) => {
	const form = await request.formData();
	const username = form.get('username');
	const password = form.get('password');
	const email = form.get('email');
	if (
		typeof username !== 'string' ||
		typeof password !== 'string' ||
		typeof email !== 'string'
	) {
		return {
			status: 400,
			body: {
				error: 'Something went horribly wrong.'
			}
		};
	}

	if (!username || !password || !email) {
		return {
			status: 400,
			body: {
				error: 'Username and password is required.'
			}
		};
	}
	if (username.length < 3) {
		return {
			status: 400,
			body: {
				error: 'Password is not long enough'
			}
		};
	}
	if (email.length < 3) {
		return {
			status: 400,
			body: {
				error: 'Email is not long enough'
			}
		};
	}
	if (password.length < 8) {
		return {
			status: 400,
			body: {
				error: 'Password is not long enough'
			}
		};
	}

	try {
		await db.user.create({
			data: {
				username,
				email,
				passwordHash: await bcrypt.hash(password, 10)
			}
		});

		return {
			status: 200,
			body: { success: 'Success.' }
		};
	} catch (error) {
		return {
			status: 400,
			body: {
				error: 'User already exists.'
			}
		};
	}
};
