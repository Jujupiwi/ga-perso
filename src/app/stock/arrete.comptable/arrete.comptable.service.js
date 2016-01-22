'use strict';

(function () {

  angular.module('ga-arrete').factory('ArreteComptableService', function (Restangular, $q, _) {
    var arretes = Restangular.all('arretes');
    return {
      list: list,
      one: one
    };

    function list() {
      return arretes.getList();
    }

    function one(id) {
      return arretes.get(id);
    }
  });

})();

