(function() {
    'use strict';

    module.exports = UserController;

    UserController.$inject = ['$state', '$stateParams', 'UserFactory'];
    function UserController($state, $stateParams, UserFactory) {
        var vm = this;
        var userId = parseInt($stateParams.userId);

        vm.user = {};
        vm.edit = false;
        vm.rippleClass = '';
        vm.backBtnClick = gotoHomePage;
        vm.onEditBtnClick = gotoEditPage;
        vm.closeBtnClick = cancelEdit;
        vm.onSaveBtnClick = saveUser;

        init();

        function init() {
            vm.user = UserFactory.findUser(userId);
        }

        function gotoHomePage() {
            $state.go('home');
        }

        function gotoEditPage(userId) {
            vm.edit = true;
            $state.go('user.edit', {userId: userId});
        }

        function cancelEdit(userId) {
            vm.edit = false;
            $state.go('user', {userId: userId});
        }

        function saveUser(user) {
            cancelEdit(user.id);
            UserFactory.replaceUser(user);
        }
    }
})();