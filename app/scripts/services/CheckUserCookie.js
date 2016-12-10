(function() {
  function CheckUserCookie($cookies, $uibModal) {

    var currentUser = $cookies.get('name');

    if (!currentUser || currentUser === '') {
      $uibModal.open({
        templateUrl: 'templates/createUserModal.html',
        controller: 'UserCookieCtrl',
        keyboard: false,
        backdrop: 'static',
        size: 'sm'
      });
    };
    console.log(currentUser)
  }
  angular
    .module('cha-cha')
    .run(['$cookies', '$uibModal', CheckUserCookie]);
})();
