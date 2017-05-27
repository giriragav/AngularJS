var myApp = angular.module('myApp',[]);

myApp.controller('mainController',function($scope){
    
    console.log($scope);
    $scope.name = 'Giri';
    $scope.age = 34;
    $scope.getData = function(){
        console.log("Writing it from scope");
    }
    $scope.getData();
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
