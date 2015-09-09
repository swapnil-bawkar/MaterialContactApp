(function () {
    'use strict';

    module.exports = HomeController;
    HomeController.$inject = ['$rootScope', 'Users', '$state', '$mdUtil', '$mdSidenav', '$log'];
    function HomeController($rootScope, Users, $state, $mdUtil, $mdSidenav, $log) {
        var vm = this;

        vm.users = Users;
        vm.showSearch = false;
        vm.onUserClick = navigateToUser;
        vm.onSearchClick = enableSearch;
        vm.toggleRight = buildToggler('right');

        $rootScope.$on('close-side-nav', vm.toggleRight);

        function navigateToUser(userId) {
            $state.go('user', {userId: userId});
        }

        function enableSearch() {
            vm.showSearch = true;
        }

        /**
         * Build handler to open/close a SideNav; when animation finishes
         * report completion in console
         */
        function buildToggler(navID) {
          var debounceFn =  $mdUtil.debounce(function(){
                $mdSidenav(navID)
                  .toggle()
                  .then(function () {
                    $log.debug("toggle " + navID + " is done.");
                  });
              },200);
          return debounceFn;
        }
    }
})();