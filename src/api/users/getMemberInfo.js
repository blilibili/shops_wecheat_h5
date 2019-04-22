import {config} from '../global'
export const requestGetMemberInfo = (param , context) =>
{
  let url = config.website + '/api/getmemberinfo';
  return context.$http.get(url , {params:param})
};
