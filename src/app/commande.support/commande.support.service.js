'use strict';

(function () {

  angular.module('ga-cmdsupport').factory('CmdSupportService', function (Restangular, $q, $timeout) {
    var cmdsupports = Restangular.all('cmdsupports');
    return {
      list: list,
      listFirst: listFirst,
      one: one
    };

    function list() {
      return cmdsupports.getList();
    }

    function listFirst() {
      return cmdsupports.customGETLIST('listfirst');
    }

    function one(id) {
      return cmdsupports.get(id);
    }
  });

})();

