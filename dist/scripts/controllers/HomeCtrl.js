(function() {
    function HomeCtrl($scope, rooms) {
       this.heroTitle = "Do the Cha-Cha!";

       this.rooms = [];
       for (var i=0; i < 12; i++) {
           this.rooms.push(angular.copy(rooms));
     }
    }

    angular
        .module('cha-cha')
        .controller('HomeCtrl', [$scope, rooms, HomeCtrl]);
})();
