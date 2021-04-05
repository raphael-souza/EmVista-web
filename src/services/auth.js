import api from './api';

export const authUser = (email, password) => {
  return api.post("user/auth", {email, password});
}

export const getToken = (data) => {
  localStorage.token = data;

  console.log('token salvo com sucesso! ' + localStorage.token)
}
