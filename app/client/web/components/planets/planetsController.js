/*globals angular */
var app = angular.module('assignment010App', []);
app.controller('planetsCtrl', function($scope, $http) {
  var fn = {
    getData: function() {
      $http.get('/rest/v1/planets').then(function(result) {
        $scope.data = result.data;
      });
    }
  };
  
  fn.getData();
});