import {config} from '../global'
export const requestGetProductInfoById = (param , context) =>
{
  let url = config.website + '/api/getproductdetail';
  return context.$http.get(url , {params:param})
};
