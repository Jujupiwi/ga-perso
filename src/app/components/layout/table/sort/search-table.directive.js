/**
 * Remplacement de la directive stSearch qui ne convient pas
 */

(function () {
    'use strict';
    angular.module('ga-layout').directive('gaSearch', ['stConfig', '$timeout', '$parse', function (stConfig, $timeout, $parse) {
        return {
            require: '^stTable',
            link: function (scope, element, attr, ctrl) {
                var tableCtrl = ctrl;
                var promise = null;
                var throttle = attr.stDelay || stConfig.search.delay;
                var event = attr.stInputEvent || stConfig.search.inputEvent;

                attr.$observe('gaSearch', function (newValue, oldValue) {
                    var input = element[0].value;
                    if (newValue !== oldValue && input) {
                        ctrl.tableState().search = {};
                        tableCtrl.search(input, newValue);
                    }
                });

                //table state -> view
                scope.$watch(function () {
                    return ctrl.tableState().search;
                }, function (newValue) {
                    var predicateExpression = attr.gaSearch || '$';
                    if (newValue.predicateObject && $parse(predicateExpression)(newValue.predicateObject) && $parse(predicateExpression)(newValue.predicateObject) !== element[0].value) {
                        element[0].value = $parse(predicateExpression)(newValue.predicateObject);
                    }
                }, true);

                // view -> table state
                element.bind(event, function (evt) {
                    evt = evt.originalEvent || evt;
                    if (promise !== null) {
                        $timeout.cancel(promise);
                    }

                    promise = $timeout(function () {
                        tableCtrl.search(evt.target.value, attr.gaSearch || '');
                        promise = null;
                    }, throttle);
                });


                $timeout(function () {
                    if (element[0].value) {
                        tableCtrl.search(element[0].value, attr.gaSearch || '');
                    }
                }, throttle);
            }
        };
    }]);
})();
