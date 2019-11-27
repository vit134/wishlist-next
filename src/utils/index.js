export const getUserName = user => {
  if (!user) return null;

  const { firstname, lastname, username } = user;
  if (firstname && lastname) {
    return `${firstname} ${lastname}`;
  }

  return username;
};
