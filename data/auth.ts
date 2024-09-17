import bcrypt from "bcryptjs";

export const saltAndHashPassword = (password: string): string => {
  return password;
};
export const getUserFromDb = (email:string, hashedPass:string) => {
  return {email, password:hashedPass}
};
