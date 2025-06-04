import db from '$lib/utils/db.js';
import bcrypt from 'bcrypt';
import { redirect, fail } from '@sveltejs/kit';


export const actions = {
	login: async ({ request, cookies }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');
        
        const result = await db.loginUser(email, password);

        console.log("Login result:", result);

        if (!result) {
            console.log("Login fehlgeschlagen");
            return { success: false, message: "Login hat nicht funktioniert" };
        }

		cookies.set('session', result.userId, {
			path: '/',
			httpOnly: true,
			maxAge: 60 * 60 * 24
		});

		throw redirect(302, '/');
	}
};
