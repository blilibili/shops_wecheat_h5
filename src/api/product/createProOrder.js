import {config} from '../global'
import qs from 'qs';
export const requestCreateProOrder = (param , context) =>
{
  let url = config.website + '/api/createorder';
  return context.$http.post(url , qs.stringify(param))
};
