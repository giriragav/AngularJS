var myApp = angular.module('myApp',[]);

myApp.controller('mainController',function($scope, $filter, $log){
    
    $scope.name = 'Giri';
    $scope.forname = $filter('uppercase')($scope.name);
    $log.info($scope.forname);
});




///---------------Dependency Injection-----------------////////
var Person = function(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}

var giri = new Person('Giridharan','Venkatesan');

logPerson(giri);
function logPerson(person){
    
    console.log(person);
}

///---------------Dependency Injection-----------------////////
