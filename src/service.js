export function parseUser(user) {
  const parsedUser = {
    email: user.email,
    name: user.name,
  };
  return parsedUser;
}
