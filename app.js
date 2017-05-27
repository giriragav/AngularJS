var myApp = angular.module('myApp',[]);

myApp.controller('mainController',function(){
    
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
