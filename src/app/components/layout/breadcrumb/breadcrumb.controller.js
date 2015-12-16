'use strict';

(function () {
  angular.module('ga-layout').controller('BreadcrumbController', BreadcrumbController);

  function BreadcrumbController(BreadcrumbService, $rootScope) {
    var vm = this;
    vm.infos = BreadcrumbService.infos();

    $rootScope.$on('$stateChangeSuccess', whenStateChange);

    function whenStateChange() {
      vm.infos = BreadcrumbService.infos();
    }
  }
})();
