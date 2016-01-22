'use strict';

(function () {

  angular.module('ga-livsupport').factory('LivSupportService', function (Restangular, $q, _) {
    var livsupports = Restangular.all('livsupports');
    return {
      list: list,
      one: one
    };

    function list() {
      return livsupports.getList();
    }

    function one(id) {
      return livsupports.get(id);
    }
  });

})();

