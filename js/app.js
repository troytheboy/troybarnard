<<<<<<< HEAD
var troyApp = angular.module('TroyApp' , ['ngSanitize', 'ui.router', 'ui.bootstrap'])
    .config(function($stateProvider) {
        $stateProvider.
        state('home', {
            url: '/',
            templateUrl: 'partials/home.html',
            controller: 'TroyCtrl'
        })
            .config(function($urlRouterProvider){
                // if the path doesn't match any of the urls you configured
                // otherwise will take care of routing the user to the specified url
                $urlRouterProvider.otherwise('/');
            })
            .controller('TroyCtrl', ['$scope', '$http', function($scope, $http) {

            }]);
    });



=======
function pixar(id, animation) {
  $('#'+id).addClass('animated'+' '+animation);
  setTimeout(function(){ $('#'+id).removeClass('animated'+' '+animation)}, 1000);
}

function show(s) {
  $('html,body').animate({
        scrollTop: $("#"+s+'_info').offset().top},'slow');
  $('#'+s+'_title').addClass('animated tada');
  setTimeout(function(){ $('#'+s+'_title').removeClass('animated tada')}, 1000);
}
>>>>>>> 57a04c7e299ada0321f4c7a0100ec0a4a48b77f2
