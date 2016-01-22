'use strict';

(function () {
  angular.module('ga-livsupport', ['ga-core']).config(function ($stateProvider) {
    $stateProvider.state('main.livsupport', {
      url: '/livsupports',
      data: {
        breadcrumb: ['main.home'],
        title: 'Liste des livraisons de support'
      },
      views: {
        'content@layout': {
          templateUrl: 'app/livraison/support/livraison.support.html',
          controller : 'LivSupportController as livsupports'
        }
      }
    });
  });
})();

