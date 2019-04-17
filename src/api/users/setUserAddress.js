import {config} from '../global'
import qs from 'qs';
export const requestSetUserAddress = (param , context) =>
{
  let url = config.website + '/api/saveuseraddress';
  return context.$http.post(url , qs.stringify(param))
};
