(function() {
  function User($cookies, $uibModal) {

    var currentUser = $cookies.get('name');

    if (!currentUser || currentUser === '') {
      $uibModal.open({
        templateUrl: 'templates/createUserModal.html',
        controller: 'UserCtrl',
        keyboard: false,
        backdrop: 'static',
        size: 'sm'
      });
    };
    console.log(currentUser)
  }
  angular
    .module('cha-cha')
    .run(['$cookies', '$uibModal', User]);
})();
