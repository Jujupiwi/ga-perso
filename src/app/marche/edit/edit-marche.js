'use strict';

(function () {
    angular.module('ga-marche').config(function ($stateProvider) {
        $stateProvider.state('main.marche.edit', {
            url: '/:id',
            data: {
                breadcrumb: ['main.home', 'main.marche'],
                title: 'Édition d\'un marché'
            },
            views: {
                'content@layout': {
                    templateUrl: 'app/marche/edit/edit-marche.html',
                    controller: 'EditMarcheController as editMarche'
                }
            },
            resolve: {
                marche: function (MarcheService, $stateParams) {
                    if ($stateParams.id) {
                        return MarcheService.one($stateParams.id)
                    } else {
                        return {
                            delay: 0,
                            method: 'GET'
                        };
                    }
                }
            }
        });
    });
})();
