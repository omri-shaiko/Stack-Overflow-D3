'use strict';

var app = angular.module('stackD3', []);

app.controller('UsersCtrl', function ($scope, StackApiResource) {

  $scope.searchUser = function (userName) {
    var x = StackApiResource.getUserBasicInfo(userName);
    console.log(x);
  }

});

app.factory('StackApiResource', function () {
  return {
    getUserBasicInfo : function (userName) {
      return {a:'b'}
    }
  }
});
