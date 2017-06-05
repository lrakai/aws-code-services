angular.module('accumulatorApp', ['ngCookies'])
    .controller('AccumulatorController', ['$scope', '$cookies', function ($scope, $cookies) {

        function upgrade() {
            var accumulator = [];
            if ($scope.accumulator.length === 0 || typeof $scope.accumulator[0] === 'object') {
                return;
            }

            accumulator = $scope.accumulator.map(function (item) {
                return {
                    message: item,
                    emphasize: false
                };
            })

            $scope.accumulator = accumulator;
            $cookies.putObject('accumulator', $scope.accumulator);
        }

        $scope.accumulator = $cookies.getObject('accumulator') || [];
        upgrade();
        $scope.item = '';

        $scope.add = function () {
            $scope.accumulator.unshift({
                message: $scope.item,
                emphasize: false
            });
            $cookies.putObject('accumulator', $scope.accumulator);
            $scope.item = '';
        }

        $scope.toggleEmphasis = function (index) {
            $scope.accumulator[index].emphasize = !$scope.accumulator[index].emphasize;
            $cookies.putObject('accumulator', $scope.accumulator);
        }

    }]);