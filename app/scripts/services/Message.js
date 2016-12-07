(function() {
  function Message($firebaseArray) {

  Message = {};

  var ref = firebase.database().ref().child("messages")

  var messages = $firebaseArray(ref);

  Message.getByRoomId = function(room){
    arry.push(messages);
    arry = [];
    return arry;
  };

  return Message;
};
angular
  .module('cha-cha')
  .factory('Message', ['$firebaseArray', Message]);
})();
