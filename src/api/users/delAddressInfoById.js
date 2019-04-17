import {config} from '../global'
export const requestGetDelDressInfoById = (param , context) =>
{
  let url = config.website + '/api/deleteuseraddress';
  return context.$http.get(url , {params:param})
};
