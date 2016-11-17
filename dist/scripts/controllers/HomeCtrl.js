(function() {
    function HomeCtrl() {
       this.heroTitle = "Do the Cha-Cha!";
    }

    angular
        .module('cha-cha')
        .controller('HomeCtrl', HomeCtrl);
})();
