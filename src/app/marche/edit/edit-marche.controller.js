'use strict';

(function () {
    angular.module('ga-marche').controller('EditMarcheController', function (marche, MarcheService) {
        var vm = this;
      vm.promise = MarcheService.listActifs().then(function (data) {
        vm.fournisseurlist = MarcheService.listFournisseur(data);
        vm.groupelist = MarcheService.listGroupe(data);
        vm.entitelist = MarcheService.listEntite(data);
      });
        vm.marche = marche;

    });
})();
