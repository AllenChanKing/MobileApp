define(['jquery'],function($){
    (function ($) {
        $.toast=function(msg,timeout){
            if(!msg){
                msg='something went wrong!';
            }
            if(!timeout){
                timeout=2000;
            }
            var $toastEle=$("body").find(".toast");
            if($toastEle.length==0){
                var msgEle="<div class='toast'>"+msg+"</div>";
                $("body").children(":first").before(msgEle);
            }   
            $("body").find(".toast").fadeIn(100).delay(timeout).fadeOut(100,function(){
                $(this).remove();
            });
        }
    })(jQuery);
});

