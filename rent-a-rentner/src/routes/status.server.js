export const handle = async ({ event, resolve }) => {
  // Beispiel: lese Cookie und speichere User in event.locals
  const session = event.cookies.get('session');

  event.locals.user = session ? { name: 'Claudia' } : null;

  return await resolve(event);
};
