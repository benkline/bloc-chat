(function() {
    function UserCookieCtrl ($scope, $cookies, $uibModalInstance) {
        $scope.createNewUser = function(){
            $cookies.put("name", $scope.newUserName);
            if ($cookies.get('name') && $cookies.get('name') !== ''){
              $uibModalInstance.close();
            } else {
                alert("User name is undefined");
            }
            console.log($cookies.get('name'));
          }
    };
angular
    .module('cha-cha')
    .controller('UserCookieCtrl', ['$scope', '$cookies', '$uibModalInstance', UserCookieCtrl]);
})();
