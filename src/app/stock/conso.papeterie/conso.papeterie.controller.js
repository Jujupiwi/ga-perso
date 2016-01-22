'use strict';

(function () {
  angular.module('ga-consopap')
    .controller('ConsoPapeterieController', function (ConsoPapeterieService) {
      var vm = this;

      ConsoPapeterieService.list().then(function consoPapeterieResult(data) {
        vm.consopapslist = data;
        vm.typelist = ConsoPapeterieService.listTypes(data);
      });

      vm.displayedCollection = [].concat(vm.consopapslist);

    })
})();
