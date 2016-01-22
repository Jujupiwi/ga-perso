'use strict';

(function () {

  angular.module('ga-consopap').factory('ConsoPapeterieService', function (Restangular, $q, _) {
    var consopaps = Restangular.all('consopapeteries');
    return {
      list: list,
      listTypes: listTypes,
      one: one
    };

    function list() {
      return consopaps.getList();
    }

    function listTypes(consoPapeterieList) {
      var labels = _.map(consoPapeterieList, 'type');
      return _.uniq(labels);
    }

    function one(id) {
      return consopaps.get(id);
    }
  });

})();

