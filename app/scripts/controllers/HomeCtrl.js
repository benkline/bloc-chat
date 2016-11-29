(function() {
    function HomeCtrl($scope, Rooms) {
       this.heroTitle = "share lists and chat!";
    }

    // this.rooms = [];
    // for (var i=0; i < Rooms.rooms.length; i++) {
    //    this.rooms.push(angular.copy(Rooms.rooms));
    // }

    angular
        .module('cha-cha')
        .controller('HomeCtrl', ['$scope', 'Rooms', HomeCtrl]);
})();
