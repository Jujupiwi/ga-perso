'use strict';

(function () {
  angular.module('ga-paramalerte')
    .controller('ParamAlerteController', function (ParamAlerteService) {
      var vm = this;

      ParamAlerteService.listSupports().then(function listSupportsResult(data) {
        vm.supportslist = data;
      });

    })
})();
