//The angular.module is a global place for creating, registering and retrieving Angular modules.
//All modules (angular core or 3rd party) that should be available to an application must be
// registered using this mechanism.
//A module is a collection of services, directives, controllers, filters, and configuration
//information. angular.module is used to configure the $injector.
var app1 = angular.module('app1', []);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// app1 is the root of the application
// the controller object is deffined below
//
    /*uses dependancy injection*/
//
// uses the '$scope' object to define the scope of data that is
// available to 'ctrl1'
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
app1.controller('ctrl1', function($scope) {
  //~~~~~~~~~~~~
  //properties
  //~~~~~~~~~~~~
  $scope.first = 1;
  $scope.second = 1;

  //~~~~~~~~~~~~
  //methods
  //~~~~~~~~~~~~
  $scope.updateValue = function() {
    $scope.calculation = $scope.first + ' + ' + $scope.second +
      ' = ' + (+$scope.first + +$scope.second);
  };
});
