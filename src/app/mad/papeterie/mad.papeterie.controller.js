'use strict';

(function () {
  angular.module('ga-madpapeterie')
    .controller('MadPapeterieController', function (MadPapeterieService) {
      var vm = this;

      MadPapeterieService.list().then(function madPapeterieResult(data) {
        vm.madpapeterieslist = data;
      });

      vm.displayedCollection = [].concat(vm.madpapeterieslist);

    })
})();
