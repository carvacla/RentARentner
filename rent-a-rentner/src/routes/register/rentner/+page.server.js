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
      type: "rentner",
      picture: "https://plus.unsplash.com/premium_photo-1664441073018-561c4bb0d961?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    };

    const result= await db.createUser(user);
    if (!result) {
      return { success: false, message: "Kunde konnte nicht registriert werden." };
    }
    return { success: true, message: "Kunde erfolgreich registriert."};
  }
};
