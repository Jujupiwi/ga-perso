'use strict';

(function () {
  angular.module('ga-livpapeterie')
    .controller('LivPapeterieController', function (LivPapeterieService) {
      var vm = this;

      LivPapeterieService.list().then(function livPapeterieResult(data) {
        vm.livpapeterieslist = data;
      });

      vm.displayedCollection = [].concat(vm.livpapeterieslist);

    })
})();
