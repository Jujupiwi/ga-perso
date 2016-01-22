'use strict';

(function () {

  angular.module('ga-facturation').factory('FacturationService', function (Restangular, $q, _) {
    var facturations = Restangular.all('facturations');
    return {
      list: list,
      one: one
    };

    function list() {
      return facturations.getList();
    }

    function one(id) {
      return facturations.get(id);
    }
  });

})();

