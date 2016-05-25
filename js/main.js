$(function(){
	$("footer a").on('click',function(){
		var $cur=$(this);
		var curTabIndex=$cur.index()+1;

		// 控制tab页签样式
		$("footer a").removeClass("curTab");
		$cur.addClass("curTab");

		// 控制对应tabcontent显示/隐藏
		$(".content .tab").hide();
		$(".content .tab:nth-child("+curTabIndex+")").show();
	});
})