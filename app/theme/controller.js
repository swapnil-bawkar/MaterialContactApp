(function() {
    'use strict';

    module.exports = ThemeController;
    ThemeController.$inject = ['$rootScope', '$mdTheming'];
    function ThemeController($rootScope, $mdThemingProvider) {
        var vm = this;

        vm.toggleRight = closeSideNav;
        vm.baseThemeClick = changeTheme;

        function closeSideNav() {
             $rootScope.$broadcast('close-side-nav');
        }

        function changeTheme() {
            /*$mdThemingProvider.theme('default')
                .primaryPalette('cyan')
                .accentPalette('blue');*/
        }
    }
})();