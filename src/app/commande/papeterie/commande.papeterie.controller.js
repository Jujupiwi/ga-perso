'use strict';

(function () {
  angular.module('ga-cmdpapeterie')
    .controller('CmdPapeterieController', function (CmdPapeterieService) {
      var vm = this;

      CmdPapeterieService.list().then(function cmdPapeterieResult(data) {
        vm.cmdpapeterieslist = data;
        vm.fournisseurlist = CmdPapeterieService.listFournisseur(data);
      });

      vm.displayedCollection = [].concat(vm.cmdpapeterieslist);

    })
})();
