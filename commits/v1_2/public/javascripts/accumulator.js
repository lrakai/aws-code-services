angular.module('accumulatorApp', ['ngCookies'])
  .controller('AccumulatorController', ['$scope', '$cookies', function ($scope, $cookies) {

    $scope.accumulator = $cookies.getObject('accumulator') || [];
    $scope.item = '';

    $scope.add = function () {
      $scope.accumulator.unshift({
        message: $scope.item,
        emphasize: false
      });
      $cookies.putObject('accumulator', $scope.accumulator);
      $scope.item = '';
    }

    $scope.toggleEmphasis = function(index){
      $scope.accumulator[index].emphasize = !$scope.accumulator[index].emphasize;
      $cookies.putObject('accumulator', $scope.accumulator);
    }

  }]);