import db from '$lib/utils/db.js';
import { redirect, fail } from '@sveltejs/kit';

export const actions = {
  delete: async ({ cookies, locals }) => {
    const userId = locals.userId;

    if (!userId) {
      return fail(401, { message: 'Nicht eingeloggt' });
    }

    const result = await db.deleteUser(user);
    
    // Session löschen
    cookies.delete('session', { path: '/' });

    if (!result) {
	  return { success: false, message: "Profil konnte nicht gelöscht werden." };
	}
    
    // Weiterleitung zur Startseite
    throw redirect(303, '/');

  }
};
