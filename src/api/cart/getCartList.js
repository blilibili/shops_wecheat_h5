import {config} from '../global'
export const requestGetCartList = (param , context) =>
{
  let url = config.website + '/api/getcartdetail';
  return context.$http.get(url , {params:param})
};
