'use strict';

(function () {

  angular.module('ga-cmdsupport').factory('CmdSupportService', function (Restangular, $q, _) {
    var cmdsupports = Restangular.all('cmdsupports');
    return {
      list: list,
      listFournisseur: listFournisseur,
      one: one
    };

    function list() {
      return cmdsupports.getList();
    }

    function listFournisseur(cmdSupportList) {
      var labels = _.map(cmdSupportList, 'fournisseur');
      return _.uniq(labels);
    }

    function one(id) {
      return cmdsupports.get(id);
    }
  });

})();

