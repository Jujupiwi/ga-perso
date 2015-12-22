(function () {
    'use strict';

    angular.module('ga-layout').controller('SortClassCtrl', SortClassCtrl);

    function SortClassCtrl(sortService) {
        var vm = this;
        vm.sortClass = 'fa-sort';
        vm.resolveClass = resolveClass;

        function resolveClass(currentClass) {
            vm.sortClass = sortService.getSortClass(currentClass);
        }
    }
})();
