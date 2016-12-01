(function() {
  function RoomsFactory($firebaseArray) {

    var ref = firebase.database().ref().child("rooms");

    var firebaseArray = $firebaseArray(ref)

    return {
      all: firebaseArray
    };
  }

  angular
    .module('cha-cha')
    .factory('RoomsFactory', ['$firebaseArray', RoomsFactory]);
})();
