export const USER_LOGIN = 'USER_LOGIN';
export const USER_REGISTER = 'USER_REGISTER';

export const getLogin = (value) => ({
  type: USER_LOGIN,
  value,  
});

export const addRegister = (value) => ({
  type: USER_REGISTER,
  value,
});
