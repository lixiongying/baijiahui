
window.onload=function(){
	receive();
}

function getUrl(url) {
	var urlObj = {};
	var urlArr = null;
	var url2 = url.split('?');
	url2 = url2[1].split('&');
	url2.forEach(function(obj, index) {
		urlArr = obj.split('=');
		urlObj[urlArr[0]] = urlArr[1];
	});
	return urlObj;
}


function receive(){
	var url=location.search;
	var Num=getUrl(url).num;
	
	 var $nav = $('.nav_order .inner_con');
	 var $span=$(".inner_border_con");
	 var $inner = $(".select .orderitem");
	 $nav.eq(Num).addClass('inner_con_style').siblings().removeClass('inner_con_style');
	 $inner.eq(Num).fadeIn(50).siblings().fadeOut(50);
	 $span.eq(Num).show().parent().siblings().find("span.inner_border_con").hide();
}

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

$(function(){
	$('.orderrceive .order_main').on('click',function(){
		mui.openWindow({
			url:'orderform.html',
				
			id:'orderform.html'
		})
	});
	
	$('.orderobligation .form_btn_three').on('click',function(){
		mui.openWindow({
			url:'payfororder.html',
				
			id:'payfororder.html'
		})
	})
	$('#evalute').on('click',function(){
		mui.openWindow({
			url:'orderformevalute.html',
				
			id:'orderformevalute.html'
		})
	})
	$('.ordershipping .order_main').on('click',function(){
		mui.openWindow({
			url:'orderformtwo.html',
				
			id:'orderformtwo.html'
		})
	})
	
//	$('.orderevalute .order_main').on('click',function(){
//		mui.openWindow({
//			url:'orderformthree.html',
//				
//			id:'orderformthree.html'
//		})
//	})
})

