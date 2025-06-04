import db from '$lib/utils/db.js';

export const load = async () => {
  // Alle Benutzer mit dem Typ 'rentner'
  const rentner = await db.getAllRentner();
  return rentner;
};
