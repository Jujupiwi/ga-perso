'use strict';

(function () {

  angular.module('ga-stockpap').factory('StockPapeterieService', function (Restangular, $q, _) {
    var stockpaps = Restangular.all('stockpaps');
    return {
      listDepots: listDepots,
      listPapeteries : listPapeteries,
      list: list
    };

    function list() {
      return stockpaps.getList();
    }

    function listPapeteries(list) {
      var labels = _.map(list, 'codePapeterie');
      return _.uniq(labels);
    }

    function listDepots() {
      var deferred = $q.defer();
      stockpaps.customGETLIST('listDepots').then(function (data) {
        deferred.resolve(data);
      });
      return deferred.promise;
    }
  });

})();

