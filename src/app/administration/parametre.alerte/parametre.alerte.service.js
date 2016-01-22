'use strict';

(function () {

  angular.module('ga-paramalerte').factory('ParamAlerteService', function (Restangular, $q, _) {
    var paramalertes = Restangular.all('paramalertes');
    return {
      listSupports: listSupports
    };

    function listSupports() {
      var deferred = $q.defer();
      paramalertes.customGETLIST('listSupports').then(function (data) {
        deferred.resolve(data);
      });
      return deferred.promise;
    }
  });

})();

