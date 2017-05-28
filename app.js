var myApp = angular.module('myApp',['ngMessages']);

/*myApp.controller('mainController',function($scope, $filter, $log){
    
    $scope.name = 'Giri';
    $scope.forname = $filter('uppercase')($scope.name);
    $log.info($scope.forname);
});*/

myApp.controller('mainController',['$scope','$log',function($scope,$log)
{
   $log.info($scope)
}]);
//myApp.controller("mainController",["$scope","$log",function(o,n){n.info(o)}]);


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

///---------------Arrays-----------------////////
var listArray = [1,'2',function(){alert("Hello")}];

listArray[2]();

///---------------Arrays-----------------////////
