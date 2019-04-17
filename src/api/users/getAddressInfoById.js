import {config} from '../global'
export const requestGetAddressInfoById = (param , context) =>
{
  let url = config.website + '/api/getuseraddressdetail';
  return context.$http.get(url , {params:param})
};
