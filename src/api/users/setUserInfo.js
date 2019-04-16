import {config} from '../global'
import qs from 'qs';
export const requestSetUserInfo = (param , context) =>
{
  let url = config.website + '/api/savemember';
  return context.$http.post(url , qs.stringify(param))
};
