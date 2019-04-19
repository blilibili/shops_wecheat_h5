import {config} from '../global'
import qs from 'qs';
export const requestAddToCart = (param , context) =>
{
  let url = config.website + '/api/addtocart';
  return context.$http.post(url , qs.stringify(param))
};
