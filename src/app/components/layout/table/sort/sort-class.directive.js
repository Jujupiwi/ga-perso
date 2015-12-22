(function () {
    'use strict';

    angular.module('ga-layout').directive('stSort', stSort);


    function stSort() {
        return {
            restrict: 'A',
            templateUrl: 'app/components/layout/table/sort/sort-class.tpl.html',
            transclude: true,
            scope: {},
            controller: 'SortClassCtrl as sort',
            bindToController: true,
            link: link
        };

        function link(scope, element, attrs, ctrl) {
            element.addClass('sortable');
            scope.$watch(function () {
                return element.attr('class');
            }, ctrl.resolveClass);
        }
    }
})();
