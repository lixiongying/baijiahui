$(function(){
	var $inner_con = $(".inner_pages ul.inner_nav li.inner_con");
	var $inner = $(".select .orderitem");
	var $inner_border_con = $(".inner_pages ul.inner_nav li.inner_con span.inner_border_con");
	var index = 0;
		$inner_con.bind("click",function(){
			index = $(this).index();
			$(this).addClass("inner_con_style").siblings().removeClass("inner_con_style");
			$(this).find("span.inner_border_con").show().parent().siblings().find("span.inner_border_con").hide();
			$inner.eq(index).fadeIn(50).siblings().fadeOut(50);
		});
});