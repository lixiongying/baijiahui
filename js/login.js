//点击登录
function checkPhone(){
    var phone = document.getElementById('phone').value;
    if($('#phone').val()==''){
    	mui.toast('手机号不能为空，请填写')
    }else if(!(/^1[34578]\d{9}$/.test(phone))){ 
        mui.toast("手机号码有误，请重填");  
        return false; 
    }else if($('.loginPass').val()==''){
    	mui.toast('请填写密码')	;
    	return false;
    }else if($('#phone').val()!='' && $('.loginPass').val()!=''){
    	var Url='http:// /Mobile/ApiUser/login'
	    var parms={};
	    parms.mobile=$('#phone').val();
	    parms.password=$('.loginPass').val();
	    mui.post(Url,parms,function(data){
//	    	if(data)
	    })
	    
    }
    else{
    	var list = plus.webview.getWebviewById('homepage.html');
		list.reload();
    }
}

$('.register').click(function(){
	
	mui.openWindow({
		url:"register.html",
		id:"register.html"
	})
})
//点击注册
function zhuce(){
	var moblie=$('.register_moblie').val();
	var register_pass=$('.register_pass').val();
	var register_pass1=$('.register_pass1').val();
	 if(moblie==''){
		mui.toast('请填写手机码号')
	}else if(register_pass==''){
		mui.toast('请填写密码')	
	}else if(register_pass1==''){
		mui.toast('请填写密码')	
	}else if(register_pass1!=register_pass){
		mui.toast('密码不一致');	
	}else if(register_pass!='' && register_pass1!='' && moblie!='' && register_pass1==register_pass){
		var Url='http://shuidifu.sxnet.cc/index.php/Mobile/Login/register';
		var parms={};
		parms.mobile=$('.register_moblie').val();
		parms.password =$('.register_pass').val();
		mui.post(Url,parms,function(data){
			mui.toast('注册成功')
		})
	}
	
}
//点击登录
function login(){
	if($('.loginMoblie').val()==''){
		mui.toast('请填写手机码号')
	}else if($('.loginPass').val()==''){
		mui.toast('请填写密码')	
	}else if($('.loginPass').val()!='' && $('.loginMoblie').val()!=''){
		var Url='http://shuidifu.sxnet.cc/index.php/Mobile/Login/pwdLogin';
	var parms={};
	parms.mobile=$('.loginMoblie').val();
	parms.password =$('.loginPass').val();
	mui.post(Url,parms,function(data){
		if(data.code==0){
		mui.toast('登录成功')
		localStorage.setItem('user_id',data.root);
		mui.back();
		var list = plus.webview.getWebviewById('myself.html');
		list.reload();
		}else{
			mui.toast('账号或密码错误')
		}
		
	})
	}
	
}
