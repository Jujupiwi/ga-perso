(function () {
    'use strict';

    angular.module('ga-layout').factory('sortService', sortService);

    function sortService() {

        return {
            getSortClass: getSortClass
        };

        function getSortClass(current) {
            if (current.indexOf('st-sort-ascent') !== -1) {
                return 'fa-sort-up';
            } else if (current.indexOf('st-sort-descent') !== -1) {
                return 'fa-sort-down';
            }
            return 'fa-sort';
        }
    }
})();
