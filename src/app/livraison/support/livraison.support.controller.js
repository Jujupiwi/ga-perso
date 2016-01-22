'use strict';

(function () {
  angular.module('ga-livsupport')
    .controller('LivSupportController', function (LivSupportService) {
      var vm = this;

      LivSupportService.list().then(function livSupportResult(data) {
        vm.livsupportslist = data;
      });

      vm.displayedCollection = [].concat(vm.livsupportslist);

    })
})();
