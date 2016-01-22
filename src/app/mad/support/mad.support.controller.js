'use strict';

(function () {
  angular.module('ga-madsupport')
    .controller('MadSupportController', function (MadSupportService) {
      var vm = this;

      MadSupportService.list().then(function madSupportResult(data) {
        vm.madsupportslist = data;
      });

      vm.displayedCollection = [].concat(vm.madsupportslist);

    })
})();
