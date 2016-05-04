$(function(){
	var audio = $("audio")[0];  
	$("#music").toggle(function(){
		audio.pause(); 
		$(this).css({"-webkit-animation-play-state":"paused","-moz-animation-play-state":"paused","-ms-animation-play-state":"paused","animation-o-play-state":"paused","animation-play-state":"paused","animation-play-state":"paused"});
	},function(){
		audio.play(); 
		$(this).css({"-webkit-animation-play-state":"running","-moz-animation-play-state":"running","-ms-animation-play-state":"running","animation-o-play-state":"running","animation-play-state":"running","animation-play-state":"running"});
	});	 
	
});