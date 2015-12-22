'use strict';

(function () {
  angular.module('ga-marche').controller('MarcheController', function(MarcheService){
    var vm = this;
    vm.promise = MarcheService.listActifs().then(function (data) {
      vm.marcheslist = data;
      vm.fournisseurlist = MarcheService.listFournisseur(data);
      vm.groupelist = MarcheService.listGroupe(data);
      vm.entitelist = MarcheService.listEntite(data);
    });

    vm.inactifs = inactifs;
    function inactifs(val){
      console.log(val);
      if(val){
        vm.promise = MarcheService.list().then(function (data) {
          vm.marcheslist = data;
        });
      } else {
        vm.promise = MarcheService.listActifs().then(function (data) {
          vm.marcheslist = data;
        });
      }
    }
    vm.displayedCollection = [].concat(vm.marcheslist);

  })
})();
