import {config} from '../global'
export const requestGetOrderList = (param , context) =>
{
  let url = config.website + '/api/getorderlist';
  return context.$http.get(url , {params:param})
};
