import {config} from '../global'
export const requestSetPhone = (param , context) =>
{
  let url = config.website + '/api/bindmobile';
  return context.$http.get(url , {params:param})
};
