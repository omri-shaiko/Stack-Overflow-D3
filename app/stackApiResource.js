'use strict';

app.factory('StackApiResource', function ($http) {

  //Const variables
  var BASE_URL = 'https://api.stackexchange.com/2.2/';
  var BASE_REQUEST_PARAMS = {
    key: '74Hxi3QyTcBisWml7ou5)g((',
    site: 'stackoverflow',
    order: 'desc',
    sort: 'reputation',
    filter: 'default'
  };

  //Will turn an object into a query string
  function serialize(obj) {
    var str = [];
    for (var p in obj) {
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    }
    return str.join("&");
  }

  return {
    getUserBasicInfo: function (userName) {
      BASE_REQUEST_PARAMS.inname = userName;
      var url = BASE_URL + 'users?' + serialize(BASE_REQUEST_PARAMS);
      return $http.get(url);
    }
  }
});
