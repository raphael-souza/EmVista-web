import api from './api';

export const getFinAssetByUserId = (userId) => {
 return api.get(`user/financial-assets/${userId}`);

}