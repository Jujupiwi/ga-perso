'use strict';

(function () {
  angular.module('ga-cmdsupport')
    .controller('CmdSupportController', function (CmdSupportService) {
      var vm = this;

      CmdSupportService.list().then(function cmdSupportResult(data) {
        vm.cmdsupportslist = data;
        vm.fournisseurlist = CmdSupportService.listFournisseur(data);
      });

      vm.displayedCollection = [].concat(vm.cmdsupportslist);

    })
})();
