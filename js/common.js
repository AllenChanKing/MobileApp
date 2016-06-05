function toast(msg,timeout){
	var $toastEle=$("body").find(".toast");
	console.log($toastEle);
	if($toastEle.length==0){
		var msgEle="<div class='toast'>"+msg+"</div>";
		$("body").children(":first").before(msgEle);
		// $("body").find(".toast").fadeIn();
	}	
	setTimeout(function(){
		// $("body").find(".toast").fadeOut();
		$("body").find(".toast").remove();
	},timeout);
}
