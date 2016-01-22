'use strict';

(function () {
  angular.module('ga-cmdsupport', ['ga-core']).config(function ($stateProvider) {
    $stateProvider.state('main.cmdsupport', {
      url: '/cmdsupports',
      data: {
        breadcrumb: ['main.home'],
        title: 'Liste des commandes de support'
      },
      views: {
        'content@layout': {
          templateUrl: 'app/commande/support/commande.support.html',
          controller : 'CmdSupportController as cmdsupports'
        }
      }
    });
  });
})();

