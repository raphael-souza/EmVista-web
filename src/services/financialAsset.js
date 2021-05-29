import api from './api';

export const getFinAssetByUserId = (userId) => {
 return api.get(`user/financial-assets/${userId}`);

}


export const saveAsset = (data) => {
  /**
    userId: string,
    code: string, 
    broker: string, 
    purchaseDate: any,
    typeNegociation: any,
    amount: any 
  */
  return api.post( "http://localhost:3000/financial-asset", data)
 
 }