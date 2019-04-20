import {config} from '../global'
import qs from 'qs';
export const requestSetDefaultAddress = (param , context) =>
{
  let url = config.website + '/api/setdefaultaddress';
  return context.$http.post(url , qs.stringify(param))
};
