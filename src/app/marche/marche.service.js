'use strict';

(function () {

  angular.module('ga-marche').factory('MarcheService', function (Restangular, $q, $timeout) {
    var marches = Restangular.all('marches');
    return {
      list: list,
      listActifs: listActifs,
      listFournisseur: listFournisseur,
      listGroupe: listGroupe,
      listEntite: listEntite,
      listAllFournisseurs : listAllFournisseurs,
      listAllEntites : listAllEntites,
      listAllGroupes : listAllGroupes,
      one: one,
      create : create
    };

    function list() {
      var deferred = $q.defer();
      marches.getList().then(function (data) {
        deferred.resolve(data);
      });
      return deferred.promise;
    }

    function listActifs() {
      var deferred = $q.defer();
      marches.customGETLIST('listActifs').then(function (data) {
        deferred.resolve(data);
      });
      return deferred.promise;
    }

    function listAllFournisseurs() {
      var deferred = $q.defer();
      marches.customGETLIST('listAllFournisseurs').then(function (data) {
        deferred.resolve(data);
      });
      return deferred.promise;
    }

    function listAllEntites() {
      var deferred = $q.defer();
      marches.customGETLIST('listAllEntites').then(function (data) {
        deferred.resolve(data);
      });
      return deferred.promise;
    }

    function listAllGroupes() {
      var deferred = $q.defer();
      marches.customGETLIST('listAllGroupes').then(function (data) {
        deferred.resolve(data);
      });
      return deferred.promise;
    }

    function listFournisseur(marcheList) {
      var labels = _.map(marcheList, 'fournisseur.libelle');
      return _.uniq(labels);
    }

    function listGroupe(marcheList) {
      var labels = _.map(marcheList, 'groupe.libelle');
      return _.uniq(labels);
    }

    function listEntite(marcheList) {
      var labels = _.map(marcheList, 'entite.libelle');
      return _.omit(_.uniq(labels), _.isUndefined);
    }

    function one(id) {
      return marches.get(id);
    }

    function create(marche) {
      return marches.post(marche);
    }
  });

})();

