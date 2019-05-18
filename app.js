var tragonesApp = angular.module('tragonesApp', ['ngRoute']);

tragonesApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'home.html'
    })
    .when('/contest', {
        templateUrl:"contest.html",
    })
    .when('/registro', {
        templateUrl:"registro.html",
        controller:"tragonesController"
    })
    .when('/confirmation', {
        templateUrl:"afterRegister.html",
    })
    .when('/contestants', {
        templateUrl:"contestants.html",
        controller:"tragonesController"

    })
    .when('/fama', {
        templateUrl:"hof.html",
        controller:"tragonesController"
    })
    .when('/about', {
        templateUrl:"about.html",
    })
    .when('/contact', {
        templateUrl: "contact.html"
    });
}]);

tragonesApp.controller('tragonesController', ['$scope', '$location',function($scope, $location){

    $scope.filterMessage="No se está aplicando ningún filtro";
    $scope.go = function ( path ) {
        $location.path( path );
    };
    $scope.search={
        name:"",
        city:""
    };
    $scope.changeFilterMessage = function(){
        if($scope.search.name=="" && $scope.search.city== ""){
            $scope.filterMessage="No se está aplicando ningún filtro";
        }
        else{
            $scope.filterMessage="Filtrando: ";
            if($scope.search.name &&$scope.search.name!=""){
                $scope.filterMessage =$scope.filterMessage+ "Nombre = "+$scope.search.name+". ";
            }
            if($scope.search.city && $scope.search.city!=""){
                $scope.filterMessage =$scope.filterMessage+ "Ciudad = "+$scope.search.city+". ";
            }
        }
    }

    $scope.contestants=[
        {
            name:'Carlos Ochoa',
            email:'ochoa@ejemplo.com',
            age:18,
            city:'Aguascalientes',
            favorite:'BBQ',
            desc:'Wings<3'
        },
        {
            name:'Carlos Aranda',
            email:'carlos@ejemplo.com',
            age:20,
            city:'Aguascalientes',
            favorite:'Buffalo',
            desc:'Wings<3'
        },
        {
            name:'Omar Ortega',
            email:'omar@ejemplo.com',
            age:21,
            city:'La Chona',
            favorite:'Buffalo',
            desc:'Wings<3'
        },
        {
            name:'Omar Cervantes',
            email:'omar@ejemplo.com',
            age:19,
            city:'La Chona',
            favorite:'Buffalo',
            desc:'Wings<3'
        },
        {
            name:'Juan Cornejo',
            email:'juan@ejemplo.com',
            age:20,
            city:'Asientos',
            favorite:'Buffalo',
            desc:'Wings<3'
        },
        {
            name:'Daniel Olvera',
            email:'daniel@ejemplo.com',
            age:22,
            city:'Asientos',
            favorite:'Buffalo',
            desc:'Wings<3'
        },
        {
            name:'Aldair Acero',
            email:'aldair@ejemplo.com',
            age:20,
            city:'Villa Hidalgo',
            favorite:'Buffalo',
            desc:'Wings<3'
        },
        {
            name:'Jesús Vargas',
            email:'aldair@ejemplo.com',
            age:23,
            city:'Villa Hidalgo',
            favorite:'Buffalo',
            desc:'Wings<3'
        },
        {
            name:'Eduardo Frausto',
            email:'eddy@ejemplo.com',
            age:25,
            city:'Aguascalientes',
            favorite:'Buffalo',
            desc:'Wings<3'
        },
        {
            name:'Fabian Bravo',
            email:'fabian@ejemplo.com',
            age:21,
            city:'Aguascalientes',
            favorite:'Buffalo',
            desc:'Wings<3'
        }
    ]

    $scope.addContestant = function(){
        
        $scope.contestants.push({
            name:$scope.newContestant.name,
            email:$scope.newContestant.email,
            age:parseInt($scope.newContestant.age),
            city:$scope.newContestant.city,
            favorite:$scope.newContestant.favorite,
            description:$scope.newContestant.desc, 
        });
        console.log("ENTRE");
        console.log($scope.contestants);

        $scope.newContestant.name = "";
        $scope.newContestant.email = "";
        $scope.newContestant.city = "";
        $scope.newContestant.desc="";
        $scope.registerForm.$setPristine();
        $scope.registerForm.$setUntouched();
    }

    $scope.tragones=[
        {
            name:'Beris',
            img:'img/beris.jpg',
            desc:"Es bien tragón"
        },
        {
            name:'Omar',
            img:'img/omar.jpg',
            desc:"Es de la chona"
        },
        {
            name:'Juan',
            img:'img/juan.jpg',
            desc:"Originario de asientos, juega billar"
        },
        {
            name:'Carlos',
            img:'img/carlos.jpg',
            desc:"Es lmv"
        }
    ]
}]);