'use strict';

(function () {
  angular.module('ga-cmdsupport')
    .controller('CmdSupportController', function(CmdSupportService){
    var vm = this;
    vm.promise = CmdSupportService.list().then(function (data) {
      vm.cmdsupports = data;
    });
  })
})();
