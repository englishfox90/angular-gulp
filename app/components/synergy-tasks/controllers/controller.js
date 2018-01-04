angular.module('paulsApp')

.directive('paulComponent', [function() {
        return {
            restrict: 'A',
            templateUrl: 'components/synergy-tasks/partials/home.html'
        };
    }]);