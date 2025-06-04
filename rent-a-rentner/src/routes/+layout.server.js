export const load = async ({ locals }) => {
console.log("Load function called with locals:", locals);
  return {
    user: locals.user,
    name: locals.user.name,
    email: locals.user.email
  };
};


 