(function() {
    'use strict';

    module.exports = StateProvider;
    StateProvider.$inject = ['$stateProvider', '$urlRouterProvider'];
    function StateProvider($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider.state('home', {
            url: '/home',
            views: {
                '' : {
                    templateUrl: './app/dashboard/dashboard.html',
                    controller: 'DashboardController',
                    controllerAs: 'vm',
                    resolve: {
                        Users: ['UserFactory', function(UserFactory) {
                            if(UserFactory.users.length > 0){
                                return UserFactory.users;
                            }
                            return UserFactory.getUsers().then(function(response) {
                                UserFactory.users = response.data;
                                return response.data;
                            });
                        }]
                    }
                },
                'theme': {
                    templateUrl: './app/theme/index.html',
                    controller: 'ThemeController',
                    controllerAs: 'vm'
                }
            }
        });

        $stateProvider.state('user', {
            url: '/user:userId',
            templateUrl: './app/user/user.html',
            controller: 'UserController',
            controllerAs: 'vm'
        });

        $stateProvider.state('user.edit', {
            url: '/edit:userId',
            templateUrl: './app/user/edit/edit.html'
        });
    }
})();