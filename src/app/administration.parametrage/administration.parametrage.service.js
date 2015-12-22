'use strict';

(function () {

  angular.module('ga-param').factory('ParamService', function (Restangular, $q, $timeout) {
    var params = Restangular.all('parametres');
    return {
      list: list,
      one: one
    };

    function list() {
      var deferred = $q.defer();
      params.getList().then(function (data) {
        $timeout(function () {
          deferred.resolve(data);
        }, 500);
      });
      return deferred.promise;
    }

    function one(id) {
      return params.get(id);
    }
  });

})();

