$(function(){
	$('.payforsure').on("click",function(){
		$(".mask").show();
		$('.paymentcode').show();
		$('.paymentcode .code_title span').click(function(){
			$(".mask").hide();
		    $('.paymentcode').hide();
		})
	});

})
function changeImg(obj){
//	var index = type;
//	var div = $('.extra_payfor_two');
//	for(i=0;i<3;i++){
//		if(i!=index){
//			div.eq(i).children('img').attr('src','../img/gouwuche_weixuanzhong.png');
//		}else{
//			div.eq(i).children('img').attr('src','../img/gouwuche_xuanzhong.png');
//		}
//	}

	$(obj).children('.extra_payfor_two').children('img').attr('src','../img/gouwuche_xuanzhong.png');
	$(obj).siblings().children('.extra_payfor_two').children('img').attr('src','../img/gouwuche_weixuanzhong.png');
}

//$(function(){
//	//出现浮动层
//	$(".payforsure").click(function(){
//		$(".mask").show();
//		$(".paymentcode").show();
//		$(".numb_box").show();
//	});
//	
//	//关闭浮动
//	$(".codenone").click(function(){
//		$(".mask").hide();
//		$(".paymentcode").hide();
//		$(".numb_box").hide();
//		//数字显示隐藏
//		
//		$(".mm_box").click(function(){
//		$(".numb_box").slideDown(500);
//		});
//		//----
//		var i = 0;
//		$(".nub_ggg li").click(function(){
//			i++
//			if(i<6){
//				$(".mm_box li").eq(i-1).addClass("mmdd");
//				}else{
//					$(".mm_box li").eq(i-1).addClass("mmdd"); 
//					
//					//window.document.location="cg.html"
//			 } 
//		});
//		$(".nub_ggg li .del").click(function(){
//			if(i>0){
//				i--
//				$(".mm_box li").eq(i).removeClass("mmdd");
//				i==0;
//				}
//			//alert(i);
//		});
//});