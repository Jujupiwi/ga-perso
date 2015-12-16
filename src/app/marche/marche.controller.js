'use strict';

(function () {
  angular.module('ga-marche').controller('MarcheController', function(MarcheService){
    var vm = this;
    vm.promise = MarcheService.list().then(function (data) {
      vm.marches = data;
    });

  })
})();
