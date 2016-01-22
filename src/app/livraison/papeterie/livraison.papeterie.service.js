'use strict';

(function () {

  angular.module('ga-livpapeterie').factory('LivPapeterieService', function (Restangular, $q, _) {
    var livpapeteries = Restangular.all('livpapeteries');
    return {
      list: list,
      one: one
    };

    function list() {
      return livpapeteries.getList();
    }

    function one(id) {
      return livpapeteries.get(id);
    }
  });

})();

