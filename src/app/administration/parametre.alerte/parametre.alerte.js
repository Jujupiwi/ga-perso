'use strict';

(function () {
  angular.module('ga-paramalerte', ['ga-core']).config(function ($stateProvider) {
    $stateProvider.state('main.paramalerte', {
      url: '/paramalertes',
      data: {
        breadcrumb: ['main.home'],
        title: 'Paramétrage des alertes spécifiques au support'
      },
      views: {
        'content@layout': {
          templateUrl: 'app/administration/parametre.alerte/parametre.alerte.html',
          controller : 'ParamAlerteController as paramalertes'
        }
      }
    });
  });
})();

