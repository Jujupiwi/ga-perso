'use strict';

(function () {
    angular.module('ga-cmdsupport').config(function ($stateProvider) {
        $stateProvider.state('main.cmdsupport.edit', {
            url: '/:id',
            data: {
                breadcrumb: ['main.home', 'main.cmdsupport'],
                title: 'Édition d\'une commande support'
            },
            views: {
                'content@layout': {
                    templateUrl: 'app/commande.support/edit/edit-cmdsupport.html',
                    controller: 'EditCmdSupportController as editCmdSupport'
                }
            },
            resolve: {
                cmdsupport: function (CmdSupportService, $stateParams) {
                    if ($stateParams.id) {
                        return CmdSupportService.one($stateParams.id)
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
