import db from '$lib/utils/db.js';
import { ObjectId } from 'mongodb';


export const handle = async ({ event, resolve }) => {
  const session = event.cookies.get('session');
  if (session) {
    
    const user = await db.getUserById(session);
    console.log('USER im hooks:', user);

    event.locals.user = user ? { id: user.user._id.toString(), name: user.user.first_name, email: user.user.email } : null;
    console.log('User found:', event.locals.user);

    event.locals.userId = session;
  } else {
    event.locals.userId = null;
  }

  return resolve(event);
};
