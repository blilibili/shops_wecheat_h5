import {config} from '../global'
export const requestGetProductList = (param , context) =>
{
  let url = config.website + '/api/getproductlist';
  return context.$http.get(url , {params:param})
};
