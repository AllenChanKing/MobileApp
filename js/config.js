requirejs.config({
  baseUrl: '../js',
  paths: {
    jquery: 'jquery-1.8.1.min',
    // angular: 'angular',
    common: 'common',
    flexiable: 'htmlFontSize',
    app:'app',
    mobileAppCtrl:'mobileAppCtrl'
  },
  shim:{
        "angular":{
            exports:"angular"
        },
        "angularRoute":{
          deps: ['angular'],
          exports:"angular-route"
        }
    }
});

requirejs(['angular','flexiable','common','mobileAppCtrl'], function(angular,flexiable,common,mobileAppCtrl){

    angular.bootstrap(document,['MobileApp']);

  	// $("footer a").on('click',function(){
  	// 	var $cur=$(this);
  	// 	var curTabIndex=$cur.index()+1;

  	// 	// 控制tab页签样式
  	// 	$("footer a").removeClass("curTab");
  	// 	$cur.addClass("curTab");

  	// 	// 控制对应tabcontent显示/隐藏
  	// 	$(".content .tab").hide();
  	// 	$(".content .tab:nth-child("+curTabIndex+")").show();
  	// });
});