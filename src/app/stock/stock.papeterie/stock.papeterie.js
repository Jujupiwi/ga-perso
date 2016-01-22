'use strict';

(function () {
  angular.module('ga-stockpap', ['ga-core']).config(function ($stateProvider) {
    $stateProvider.state('main.stockpap', {
      url: '/stockpaps',
      data: {
        breadcrumb: ['main.home'],
        title: 'Suivi des stocks de papeterie par dépôt'
      },
      views: {
        'content@layout': {
          templateUrl: 'app/stock/stock.papeterie/stock.papeterie.html',
          controller : 'StockPapeterieController as stockpaps'
        }
      }
    });
  });
})();

