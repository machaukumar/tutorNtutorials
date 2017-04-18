var myApp = angular.module('myApp',[]);

//controller using anaonymous function.
var myController = function($scope,$http){

    //country object to show ng-src demo
    // var country = {
    //     name : "India",
    //     icon : "images/ind.png"
    // };
    // //attaching JSON object to scope object
    // $scope.employee = employee;
    
    // var courses = [
    //     {name : "Core Java",description:"This is a complete Java course",price :"$100",duration : "4hrs",rating : "3",icon : "images/mylogo.png"},
    //     {name : "Core Java",description:"This is a complete Java course",price :"$100",duration : "4hrs",rating : "3",icon : "images/mylogo.png"},
    //     {name : "Core Java",description:"This is a complete Java course",price :"$100",duration : "4hrs",rating : "3",icon : "images/mylogo.png"},
    //     {name : "Core Java",description:"This is a complete Java course",price :"$100",duration : "4hrs",rating : "3",icon : "images/mylogo.png"},
    //     {name : "Core Java",description:"This is a complete Java course",price :"$100",duration : "4hrs",rating : "3",icon : "images/mylogo.png"}
    //     ];
    var courses = [];
    // $http.jsonp("http://localhost:8081/api/courses")
    //         .success(function(data){ 
    //             console.log(data);
    //             $scope.courses = data; 
    //         })
    //         .error(function(error){ 
    //             console.log(error);
    //             // $scope.courses = data; 
    //         });

    $http({
      url: 'http://localhost:8081/api/courses',
      method: 'GET'
    }).then(function(res){
          console.log("successfully");
           $scope.courses = res.data; 
    }, function(error){
       console.log(error);
       alert(error.data);
    });
     $scope.logo = "images/mylogo.png";
     $scope.islogin = true;
     $scope.login = function() {
         console.log("login");
         $scope.islogin = false;
     }  
}

function fetchCourses(){
  $http.get("http://localhost:8081/api/courses")
  .then(function(response){ $scope.details = response.data; });
}

myApp.controller('myController',myController);