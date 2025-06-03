import { db } from '$lib/utils/db.js';
import bcrypt from 'bcrypt';

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('name');
		const email = formData.get('email');
		const password = formData.get('password');
		const location = formData.get('location');
		const servicesRaw = formData.get('services');

		const existingUser = await db.collection('users').findOne({ email });
		if (existingUser) {
			return { error: 'E-Mail existiert bereits.' };
		}

		const passwordHash = await bcrypt.hash(password, 10);
		const services = servicesRaw.split(',').map(s => s.trim());

		await db.collection('users').insertOne({
			role: 'rentner',
			name,
			email,
			passwordHash,
			location,
			services
		});

		return { success: true };
	}
};
