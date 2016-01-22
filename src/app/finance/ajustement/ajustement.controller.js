'use strict';

(function () {
  angular.module('ga-ajustement')
    .controller('AjustementController', function (AjustementService) {
      var vm = this;

      AjustementService.list().then(function ajustementResult(data) {
        vm.ajustementslist = data;
      });

      vm.displayedCollection = [].concat(vm.ajustementslist);

    })
})();
