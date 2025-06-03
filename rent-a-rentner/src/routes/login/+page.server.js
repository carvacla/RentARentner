import { db } from '$lib/utils/db.js';
import bcrypt from 'bcrypt';
import { redirect, fail } from '@sveltejs/kit';

export const actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		const user = await db.collection('users').findOne({ email });
		if (!user) return fail(400, { error: 'E-Mail nicht gefunden' });

		const valid = await bcrypt.compare(password, user.passwordHash);
		if (!valid) return fail(400, { error: 'Falsches Passwort' });

		// Simple Session via Cookie
		cookies.set('session', user._id.toString(), {
			path: '/',
			httpOnly: true,
			maxAge: 60 * 60 * 24
		});

		throw redirect(302, '/');
	}
};
