'use strict';

(function () {

  angular.module('ga-cmdpapeterie').factory('CmdPapeterieService', function (Restangular, $q, _) {
    var cmdpapeteries = Restangular.all('cmdpapeteries');
    return {
      list: list,
      listFournisseur: listFournisseur,
      one: one
    };

    function list() {
      return cmdpapeteries.getList();
    }

    function listFournisseur(cmdPapeterieList) {
      var labels = _.map(cmdPapeterieList, 'fournisseur');
      return _.uniq(labels);
    }

    function one(id) {
      return cmdpapeteries.get(id);
    }
  });

})();

