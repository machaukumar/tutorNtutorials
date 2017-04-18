var darjiApp = angular.module("darjiApp",[]);

var darjiController = function($scope) {
     products = [
                    {name : "Product1 Name",shortName:"P1N", desc : "This product has following description1",img:"public/images/p1.jpg",price:500},
                    {name : "Product2 Name",shortName:"P2N", desc : "This product has following description2",img:"public/images/p2.jpg",price:600},
                    {name : "Product3 Name",shortName:"P3N", desc : "This product has following description3",img:"public/images/p3.jpg",price:700},
                    {name : "Product4 Name",shortName:"P4N", desc : "This product has following description4",img:"public/images/p4.jpg",price:400},
                    {name : "Product5 Name",shortName:"P5N", desc : "This product has following description5",img:"public/images/p5.jpg",price:450},
                    {name : "Product6 Name",shortName:"P6N", desc : "This product has following description6",img:"public/images/p6.jpg",price:645}
                    ]
     $scope.getHomeProducts = function() {
         $scope.products = products;
     };
     $scope.getHomeProducts();
     $scope.showProduct = function(index) {
         $scope.currentProduct = products[index];
     };
}

darjiApp.controller("darjiController",darjiController);

