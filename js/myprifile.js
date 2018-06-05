$(function(){
	var $nickname=$('.center .content .nicknames');
	var $sex=$('.center .content .sexs');
	var $phonenumber=$('.center .content .phonenumbers');
	var $mask=$('.mask');
	var $sure=$('#sexsure');
	var $changesex=$('.changesex');
	var $changesure=$('.change .changenickname .nickname p');
	var $surealter=$('.change .changenumber .surealter');
	var $changenickname=$('.changenickname');
	var index=0;
	var $text
	var changenumber=$('.changenumber');
	$.Velocity.RegisterEffect('lxy.slideUp',{
	   		defaultDuration:300,
	        calls:[
	       // 透明度由0至100；y轴由-100px到0px；
	        [{opacity:[0.5,0],translateY:[0,100]}]
	    ]
	});
	$.Velocity.RegisterEffect('lxy.slideUpone',{
	   		defaultDuration:300,
	        calls:[
	       // 透明度由0至100；y轴由-100px到0px；
	        [{opacity:[1,0],translateY:[0,100]}]
	    ]
	});
	$.Velocity.RegisterEffect('lxy.slideDown',{
	   		defaultDuration:300,
	        calls:[
	       // 透明度由0至100；y轴由-100px到0px；
	        [{opacity:[0,1],translateY:[100,0]}]
	     ]
		});
	
	var seqopen=[{
   		elements:$mask,
   		properties:'lxy.slideUp',
   		options:{
   			 delay:300,
   			 sequenceQueue:false
   		}
   	},
   	{
   		elements:changenumber,
   		properties:'lxy.slideUpone',
   		options:{
   			delay:100,
   			sequenceQueue:false
   		}
   	}]
	var seqclose=[{
   		elements:$mask,
   		properties:'lxy.slideDown',
   		options:{
// 			 delay:300,
   			 sequenceQueue:false
   		}
   	},
   	{
   		 elements:changenumber,
   		properties:'lxy.slideDown',
   		options:{
   			
   			sequenceQueue:false
   		}
   	}]
	//性别
	var seqopen1=[{
   		elements:$mask,
   		properties:'lxy.slideUp',
   		options:{
   			 delay:300,
   			 sequenceQueue:false
   		}
   	},
   	{
   		elements:$changesex,
   		properties:'lxy.slideUpone',
   		options:{
   			delay:100,
   			sequenceQueue:false
   		}
   	}]
	var seqclose1=[{
   		elements:$mask,
   		properties:'lxy.slideDown',
   		options:{
// 			 delay:300,
   			 sequenceQueue:false
   		}
   	},
   	{
   		 elements:$changesex,
   		properties:'lxy.slideDown',
   		options:{
   			
   			sequenceQueue:false
   		}
   	}]
	//昵称
	var seqopen2=[{
   		elements:$mask,
   		properties:'lxy.slideUp',
   		options:{
   			 delay:300,
   			 sequenceQueue:false
   		}
   	},
   	{
   		elements:$changenickname,
   		properties:'lxy.slideUpone',
   		options:{
   			delay:100,
   			sequenceQueue:false
   		}
   	}]
	var seqclose2=[{
   		elements:$mask,
   		properties:'lxy.slideDown',
   		options:{
// 			 delay:300,
   			 sequenceQueue:false
   		}
   	},
   	{
   		 elements:$changenickname,
   		properties:'lxy.slideDown',
   		options:{
   			
   			sequenceQueue:false
   		}
   	}]
	//改手机号
	$phonenumber.on('click',function(){
		$('.mask').css('z-index',100)
		$('.changenumber').css('z-index',101)
   		$.Velocity.RunSequence(seqopen)

   });
	$surealter.on('click',function(){
   		$.Velocity.RunSequence(seqclose);
   		$('.mask').css('z-index',-100)
		$('.changenumber').css('z-index',-100)
   	})
	
   
    // 改昵称
	$nickname.bind('click',function(){
		$('.mask').css('z-index',100);
		$('.changenickname').css('z-index',101);
		$.Velocity.RunSequence(seqopen2)

	})
	$changesure.bind('click',function(){
		$('.mask').css('z-index',-100)
//		$('.changesex').css('z-index',-101);
   		$.Velocity.RunSequence(seqclose2);
	    $('.nicknames .head_pic').html($('.input_input input').val())
		  
	})
	//该性别
	$sex.bind('click',function(){
	
		var $sexitem=$('.changesex .sexitem');
		var $val=$('.center .content .sexs .head_pic').html();		
		
		var index=0;
		
		$('.mask').css('z-index',100)
//		$('.changesex').css('z-index',101);
   		$.Velocity.RunSequence(seqopen1);
		
		
		$sexitem.eq(0).addClass('changecolor').siblings().removeClass('changecolor')
		$sexitem.on('click',function(){
			
			index=$(this).index();  
			$(this).addClass("changecolor").siblings().removeClass("changecolor");
	        $text=$(this).html();
	        
		});
	
	  
		
	})
	 $sure.on('click',function(){
	    $('.mask').css('z-index',-100)
//		$('.changesex').css('z-index',-101);
   		$.Velocity.RunSequence(seqclose1);
	    $('.center .content .sexs .head_pic').html($text)
	    
	 })

	

})
