(function () {
    'use strict';

    module.exports = HomeController;
    HomeController.$inject = ['Users', '$state'];
    function HomeController(Users, $state) {
        var vm = this;

        vm.users = Users;
        vm.showSearch = false;
        vm.onUserClick = navigateToUser;
        vm.onSearchClick = enableSearch;
        vm.searchBtnClick = searchUser;

        function navigateToUser(userId) {
            $state.go('user', {userId: userId});
        }

        function enableSearch() {
            vm.showSearch = true;
        }

        function searchUser(searchText) {

        }
    }

})();