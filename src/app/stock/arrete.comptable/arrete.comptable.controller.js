'use strict';

(function () {
  angular.module('ga-arrete')
    .controller('ArreteComptableController', function (ArreteComptableService) {
      var vm = this;

      ArreteComptableService.list().then(function arreteResult(data) {
        vm.arreteslist = data;
      });

      vm.displayedCollection = [].concat(vm.arreteslist);

    })
})();
