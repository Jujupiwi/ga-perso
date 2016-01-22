'use strict';

(function () {

  angular.module('ga-ajustement').factory('AjustementService', function (Restangular, $q, _) {
    var ajustements = Restangular.all('ajustements');
    return {
      list: list,
      one: one
    };

    function list() {
      return ajustements.getList();
    }

    function one(id) {
      return ajustements.get(id);
    }
  });

})();

