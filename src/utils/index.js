export const getUserName = user => {
  const { firstname, lastname, username } = user;
  if (firstname && lastname) {
    return `${firstname} ${lastname}`;
  }

  return username;
};
