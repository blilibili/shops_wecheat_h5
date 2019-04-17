import {config} from '../global'
export const requestGetAddressList = (param , context) =>
{
  let url = config.website + '/api/getuseraddresslist';
  return context.$http.get(url , {params:param})
};
