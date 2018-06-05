    function newPW(){
	    regExp=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
	    if($(".psd").val()==""){
//	        $(".popTips").text("密码不能为空");
//	        $(".popTips").show()
	        mui.toast('密码不能为空', {  
		    duration: 'long',  /*duration：持续显示时间，short：2000ms（默认）, long(3500ms)*/  
		    type: 'popTips' /* 是否使用h5绘制的对话框 */  
		})  
		return false;		        
	    }
	    
	    else if(!regExp.test($(".psd").val())){
	//			    	alert('密码格式错误');
	        $(".popTips").text("密码格式错误");
	        $(".popTips").show();
	//			        $(".popTips").delay(200).hide();
	        return false;
	    }
	    else{
	       
	       $(".popTips").hide();
	       return true;
	    }
	}
	$(".psd").blur(newPW);
	
	$('.complete').click(function(){
		
		mui.openWindow({
			url:"login.html",
			id:"login.html"
		})
	})
	
	$('.pleaseregister').click(function(){
	
		mui.openWindow({
			url:"login.html",
			id:"login.html"
		})
    })
	$('.back_img').click(function(){

		mui.openWindow({
			url:"login.html",
			id:"login.html"
		})
	})	