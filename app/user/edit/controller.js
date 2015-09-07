(function() {
    'use strict';

    module.exports = EditController;

    EditController.$inject = ['$state', '$stateParams', 'UserFactory'];
    function EditController($state, $stateParams, UserFactory) {
        var vm = this;
        var userId = parseInt($stateParams.userId);

        vm.user = {};

        init();

        function init() {
            vm.user = UserFactory.findUser(userId);
        }
    }
})();