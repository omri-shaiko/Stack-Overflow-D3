'use strict';

var app = angular.module('stackD3', []);

app.controller('UsersCtrl', function ($scope, StackApiResource) {

  $scope.searchUser = function (userName) {
    StackApiResource.getUserBasicInfo(userName)
      .then(function (res) {
        $scope.error = false;

        //Could be many users, i'm taking only the first here.
        $scope.user = res.data.items[0];

        //Map data for D3
        var data = _.map(res.data.items[0].badge_counts, function(item, key){
          return {name: key, value: item}
        });

        //Build the chart based on the data
        buildChart('d3-container',data);
      })
      .catch(function () {
        $scope.error = true;
      });
  }
});
