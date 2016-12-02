(function() {
    function HomeCtrl ($scope, $firebaseArray) {
        this.heroTitle = "chat!";

  var ref = firebase.database().ref().child("rooms");
  // create a synchronized array
  $scope.rooms = $firebaseArray(ref);
  // add new items to the array
  // the room is automatically added to our Firebase database!
  $scope.addRoom = function() {
    $scope.rooms.$add({
      text: $scope.newRoomText
    });
  };
    }
 angular
        .module('cha-cha')
        .controller('HomeCtrl', ['$scope', '$firebaseArray', HomeCtrl]);
})();
