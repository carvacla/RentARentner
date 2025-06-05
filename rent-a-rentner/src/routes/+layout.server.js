export const load = async ({ locals }) => {
  console.log("Load function called with locals:", locals);

  const user = locals.user ?? null;

  return {
    user,
    name: user?.name ?? null,
    email: user?.email ?? null
  };
};