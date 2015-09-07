(function() {
    'use strict';

    module.exports = UserFactory;
    UserFactory.$inject = ['$http'];
    function UserFactory($http) {
        var factory = {
            users: [],
            getUsers: loadUsers,
            findUser: findUser,
            replaceUser: replaceUser
        };
        return factory;

        function loadUsers() {
            return $http.get('./users.json');
        }

        function findUser(userId) {
            var user = {},
                i = 0,
                length = factory.users.length;
            for(; i < length; i++){
                if(userId === factory.users[i].id){
                    user = factory.users[i];
                    break;
                }
            }
            return user;
        }

        function replaceUser(changedUser) {
            var i = 0,
                length = factory.users.length,
                id = changedUser.id;
            for(; i < length; i++){
                if(id === factory.users[i].id){
                    factory.users[i] = changedUser;
                    break;
                }
            }
        }
    }
})();