export function GetUrlParam(paraName) {
  var url = document.location.toString();
  var arrObj = url.split("?");

  if (arrObj.length > 1) {
    var arrPara = arrObj[1].split("&");
    var arr;

    for (var i = 0; i < arrPara.length; i++) {
      arr = arrPara[i].split("=");

      if (arr != null && arr[0] == paraName) {
        return arr[1];
      }
    }
    return "";
  }
  else {
    return "";
  }
}

//时间戳转换 YY-MM-DD methods 设置返回的时间  day 日期  seconds 秒
export function formatDateTime(inputTime , methods) {
  let date = new Date(inputTime);
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  m = m < 10 ? ('0' + m) : m;
  let d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  let h = date.getHours();
  h = h < 10 ? ('0' + h) : h;
  let minute = date.getMinutes();
  let second = date.getSeconds();
  minute = minute < 10 ? ('0' + minute) : minute;
  second = second < 10 ? ('0' + second) : second;
  switch (methods){
    case 'day':
      return y + '-' + m + '-' + d;
      break;
    case 'seconds':
      return y + '-' + m + '-' + d + ' ' + h + ':' +minute + ':' + second;
      break;
    default:
      return '参数错误请检查';
      break;
  }
}
