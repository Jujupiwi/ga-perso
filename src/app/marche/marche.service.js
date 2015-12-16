'use strict';

(function () {

  angular.module('ga-marche').factory('MarcheService', function (Restangular, $q, $timeout) {
    var marches = Restangular.all('marches');
    return {
      list: list,
      one: one
    };

    function list() {
      var deferred = $q.defer();
      marches.getList().then(function (data) {
        deferred.resolve(data);
      });
      return deferred.promise;
    }

    function one(id) {
      return marches.get(id);
    }
  });

})();

