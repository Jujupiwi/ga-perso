'use strict';

(function () {
  angular.module('ga-tableref', ['ga-core']).config(function ($stateProvider) {
    $stateProvider.state('main.tableref', {
      url: '/tableref',
      data: {
        breadcrumb: ['main.home'],
        title: 'Tables de références'
      },
      views: {
        'content@layout': {
          templateUrl: 'app/administration/table.reference/table.reference.html',
          controller : 'TableRefController as tableref'
        }
      }
    });
  });
})();

