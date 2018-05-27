window.onload=function(){
	var mySwiper = new Swiper('.swiper-container', {
		autoplay: 4000,//可选选项，自动滑动，手指触屏滑动会停止自动轮播
		autoplayDisableOnInteraction : false,//手指触屏滑动之后，重新开启自动轮播
		initialSlide :0,//初始显示的li的索引
		speed : 1000,//滑动的速度
		observer:true,//当li节点被修改的时候自动更新Swiper
		observeParents:true,//当容器container宽度改变的时候(window.onresize或者自适应)自动更新Swiper
		grabCursor : true,//鼠标抓手形状，触屏看不到
		pagination : '.swiper-pagination',//下面的图标跟随切换
		loop : true,//无缝轮播 自动在li列表的前面添加最后一个，在li列表后面添加第一个
	});
	
	var bg=document.getElementById('bagr_pic');
	bg.style.opacity=0;
	 
}
function share(){
	var flag=true;
	var details=document.getElementById('detailss');
	var share=document.getElementById("share");
	var mask=document.getElementById("mask_one");
	var cancelshare=document.getElementById('cancelshare');
	
	details.onclick=function(){
		share.style.display="block";
		mask.style.display="block";
		
	}
	
	mask.onclick=function(){
		share.style.display="none";
		mask.style.display="none"
	}
	cancelshare.onclick=function(){
		share.style.display="none";
		mask.style.display="none"
	}
}

 function buyimmediately(i){
 	
 	var mask=document.getElementById("mask_one");
	var buy=document.getElementById("buy_one");
	var tabbar=document.getElementById("tabbar");
	var input_num=document.getElementById('inputNum')
	var num_jian=document.getElementById("jian");
	var num_jia=document.getElementById("jia");
	var fruit=document.getElementById('fruit_one');
	var buyimmediately=document.getElementById("buyimmediately");
    var sureorcancel=document.getElementById("sureorcancel")
	var shoptoast=document.getElementById('car');
	var plusshopcar=document.getElementById('plusshopcar');
	var sure=document.getElementById("sure");
	var cancel=document.getElementById('cancel')
    	mask.style.display='block';
		buy.style.display='block';	
        sureorcancel.style.display='block';
        tabbar.style.display='none';
	num_jia.onclick=function(){
		input_num.value=parseInt(input_num.value)+1;  	
	}
    num_jian.onclick=function(){
	  	if(parseInt(input_num.value)==0){
	  		input_num.value==0;
	    }else{
	   	 input_num.value=parseInt(input_num.value)-1;   	
	    }

    }
     mask.onclick=function(){
    	mask.style.display='block';
    }
    fruit.onclick=function(){
    	mask.style.display='none';
		buy.style.display='none';
		sureorcancel.style.display='none';
        tabbar.style.display='block';
    }
    sure.onclick=function(){
    	mask.style.display='none';
		buy.style.display='none';
		sureorcancel.style.display='none';
		tabbar.style.display='block';
		shoptoast.style.display="block"
		setTimeout(function(){
			shoptoast.style.display='none';
		},2000)
    }
    cancel.onclick=function(){
    	mask.style.display='none';
		buy.style.display='none';
		sureorcancel.style.display='none';
		tabbar.style.display='block';
    }
}	  

document.onscroll=function(){
	var bg=document.getElementById('bagr_pic');
	bg.style.opacity=1;
	var height=400;
	var scrolltop=document.documentElement.scrollTop||document.body.scrollTop;
	var detail=document.getElementById('bagr_pic');
	var numopcaity=scrolltop/height;
	if(scrolltop>height){
		return
	}else{
		detail.style.opacity=numopcaity;
	}
	
}
