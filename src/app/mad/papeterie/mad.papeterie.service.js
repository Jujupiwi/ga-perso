'use strict';

(function () {

  angular.module('ga-madpapeterie').factory('MadPapeterieService', function (Restangular, $q, _) {
    var madpapeteries = Restangular.all('madpapeteries');
    return {
      list: list,
      one: one
    };

    function list() {
      return madpapeteries.getList();
    }

    function one(id) {
      return madpapeteries.get(id);
    }
  });

})();

