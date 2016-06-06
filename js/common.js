function toast(msg,timeout){
	var $toastEle=$("body").find(".toast");
	if($toastEle.length==0){
		var msgEle="<div class='toast'>"+msg+"</div>";
		$("body").children(":first").before(msgEle);
	}	
	$("body").find(".toast").fadeIn(100).delay(2000).fadeOut(100,function(){
		$(this).remove();
	});
}
