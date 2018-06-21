// Code goes here

// Code goes here

var app = angular.module('myApp', []);

app.controller('mainCtrl', function($scope, $window, mainService) {


  mainService.getPosts().then(function(response) {

    $scope.myData = response.data.People;

  });


  $scope.ShowAlert = function() {
    if (typeof($scope.Message) == "undefined" || $scope.Message == "") {
      $window.alert("Please enter your message!");
      return;
    }
    $window.alert("Thank you");
  }
});


app.filter('clearText', function() {
  return function(text) {
    return text ? String(text).replace(/"<[^>]+>/gm, '') : '';
  }
});


app.service('mainService', function($http) {
  this.getPosts = function() {
    return $http.get('people.json');
  }
});


app.directive("headerTile", function() {
  return {
    restrict: "A",
    templateUrl: "header.html"
  };
});

app.directive("containerTile", function() {
  return {
    restrict: "A",
    templateUrl: "container.html"
  };
});

app.directive("pageContent", function() {
  return {
    restrict: "A",
    templateUrl: "content.html"
  };
});


app.directive("rightContent", function() {
  return {
    restrict: "A",
    templateUrl: "right-content.html"
  };
});

app.directive("heartRating", function() {
  return {
    restrict: "A",
    templateUrl: "heart.html"
  };
});

app.directive("tableP", function() {
  return {
    restrict: "A",
    templateUrl: "table.html"
  };
});

app.directive("table2", function() {
  return {
    restrict: "A",
    templateUrl: "table2.html"
  };
});