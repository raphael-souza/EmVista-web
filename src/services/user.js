import api from './api';

export const saveUser = (userParams) => {
  return api.post("user", userParams)
}
