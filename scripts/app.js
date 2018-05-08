(function(){
    angular.module('countdown', ['angularMoment'])
        .controller('mainController', ['$scope', 'moment', '$interval', ($scope, moment, $interval) => {
            $scope.time = moment().day(1).hours(23).minutes(27).seconds(47);

            var prom = $interval(() => {
                $scope.time.subtract(1, 'seconds');
                if($scope.time.days() == 0 &&
                   $scope.time.hours() == 0 &&
                   $scope.time.minutes() == 0 &&
                   $scope.time.seconds() == 0){

                    $interval.cancel(prom);
                }
            }, 1000);
        }]);
})();
