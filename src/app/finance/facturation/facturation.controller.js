'use strict';

(function () {
  angular.module('ga-facturation')
    .controller('FacturationController', function (FacturationService) {
      var vm = this;

      FacturationService.list().then(function facturationResult(data) {
        vm.facturationslist = data;
      });

      vm.displayedCollection = [].concat(vm.facturationslist);

    })
})();
