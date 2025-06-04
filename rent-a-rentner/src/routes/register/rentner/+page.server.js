import db from '$lib/utils/db.js';
import bcrypt from 'bcrypt';

export const actions = {
    create: async ({ request }) => {
    const userForm = await request.formData();
    let user = {
      firstname: userForm.get('firstname'),
      lastname: userForm.get('lastname'),
      email: userForm.get('email'),
      password: userForm.get('password'),
      location: userForm.get('location'),
      services: userForm.get('services'),
      type: "rentner"
    };

    const result= await db.createUser(user);
    if (!result) {
      return { success: false, message: "Kunde konnte nicht registriert werden." };
    }
    return { success: true, message: "Kunde erfolgreich registriert."};
  }
};
