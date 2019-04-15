import {config} from './global'
export const requestGetUserInfo = (param , context) =>
{
  let url = config.website + '/api/qaqaq';
  return context.$http.get(url , {params:param})
};
