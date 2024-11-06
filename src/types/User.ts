export type User = {
  id: string;
  name: string;
  email: string;
};
export type RegisterResponse = {
  message: string;
  user: User;
  token: string;
};
