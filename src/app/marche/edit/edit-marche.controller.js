'use strict';

(function () {
  angular.module('ga-marche').controller('EditMarcheController', function (marche, MarcheService, $state) {
    var vm = this;
    vm.promise = MarcheService.listActifs().then(function (data) {
      vm.fournisseurlist = MarcheService.listFournisseur(data);
      vm.groupelist = MarcheService.listGroupe(data);
      vm.entitelist = MarcheService.listEntite(data);
    });
    vm.promise = MarcheService.listAllFournisseurs().then(function (data) {
      vm.allfournisseurlist = data;
    });
    vm.promise = MarcheService.listAllEntites().then(function (data) {
      vm.allentitelist = data;
    });
    vm.promise = MarcheService.listAllGroupes().then(function (data) {
      vm.allgroupelist = data;
    });
    vm.marche = marche;
    vm.submit = submit;

    function submit() {
      if (marche.id) {
        vm.marche.put().then(backToList);
      } else {
        console.log(marche);
        MarcheService.create(vm.marche).then(backToList);
      }
    }

    function backToList() {
      $state.go('main.endpoints', {}, {reload: true});
    }
  });
})();
