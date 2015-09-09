(function () {
    'use strict';

    module.exports = ThemeProvider;
    ThemeProvider.$inject = ['$mdThemingProvider'];
    function ThemeProvider($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('indigo')
            .accentPalette('pink');

        $mdThemingProvider.alwaysWatchTheme(true);
    }
})();