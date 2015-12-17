'use strict';

(function () {

  angular.module('ga-cmdsupport').factory('CmdSupportService', function (Restangular, $q, $timeout) {
    var cmdsupports = Restangular.all('cmdsupports');
    return {
      list: list,
      one: one
    };

    function list() {
      var deferred = $q.defer();
      cmdsupports.getList().then(function (data) {
        deferred.resolve(data);
      });
      return deferred.promise;
    }

    function one(id) {
      return cmdsupports.get(id);
    }
  });

})();

