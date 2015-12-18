'use strict';

(function () {
  angular.module('ga-cmdsupport')
    .controller('CmdSupportController', function (CmdSupportService) {
      var vm = this;

      CmdSupportService.list().then(function firstResult(data) {
        vm.cmdsupports = data;
        //return CmdSupportService.list();
      });
        //.then(function secondResult (data) {
       // vm.cmdsupports = data;
     // });

    })
})();
