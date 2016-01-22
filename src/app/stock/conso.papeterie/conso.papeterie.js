'use strict';

(function () {
  angular.module('ga-consopap', ['ga-core']).config(function ($stateProvider) {
    $stateProvider.state('main.consopap', {
      url: '/consopaps',
      data: {
        breadcrumb: ['main.home'],
        title: 'Consommation moyenne de papeterie'
      },
      views: {
        'content@layout': {
          templateUrl: 'app/stock/conso.papeterie/conso.papeterie.html',
          controller : 'ConsoPapeterieController as consopaps'
        }
      }
    });
  });
})();

