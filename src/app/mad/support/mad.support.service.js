'use strict';

(function () {

  angular.module('ga-madsupport').factory('MadSupportService', function (Restangular, $q, _) {
    var madsupports = Restangular.all('madsupports');
    return {
      list: list,
      one: one
    };

    function list() {
      return madsupports.getList();
    }

    function one(id) {
      return madsupports.get(id);
    }
  });

})();

