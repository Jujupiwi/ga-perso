'use strict';

(function () {
    angular.module('ga-home', ['ga-core']).config(function ($stateProvider) {
        $stateProvider.state('main.home', {
            url: '/',
            data: {
                breadcrumb: [],
                title: 'Accueil'
            },
            views: {
                'content@layout': {
                    templateUrl: 'app/home/home.html',
                    controller: 'HomeController as home'
                }
            }
        });
    });

})();

