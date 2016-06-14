define(['app','angularRoute'],function(app,angularRoute){
	app.config(['$routeProvider', function($routeProvider){
	    $routeProvider
	        .when('/',{
	        	templateUrl:'index.html'
	        })
	        .when('/index',{
	        	templateUrl:'index.html'
	        })
	        .when('/logistics',{
	        	templateUrl:'logistics.html'
	        })
	        .when('/shoppingcar',{
	        	templateUrl:'shoppingcar.html'
	        })
	        .when('/myCat',{
	        	templateUrl:'myCat.html'
	        })
	        .when('/more',{
	        	templateUrl:'more.html'
	        })
	        .otherwise({redirectTo:'/'});
	}])

    .controller('MobileAppCtrl', ['$scope', function($scope){
  		$scope.name="123";
  	}]);
})