import api from './api';

export const saveUser = (userParams) => {
  return api.post("user", userParams)
}

export const authUser = (email, password) => {
  return api.post("user/auth", {email, password});
}

export const getToken = (data) => {
  localStorage.token = data;

  console.log('token salvo com sucesso! ' + localStorage.token)

}
