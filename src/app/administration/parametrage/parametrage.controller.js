'use strict';

(function () {
  angular.module('ga-param').controller('ParamController', function (ParamService) {
    var vm = this;
    vm.promise = ParamService.one(1).then(function (data) {
      vm.params = data;
    });
  });
})();
