function getClass(ssclass){
	var aResult=[];
	var aEle=document.getElementsByTagName('*');
	for(var i=0;i<aEle.length;i++){
		if(aEle[i].className==ssclass){
			aResult.push(aEle[i])
		}
	}
	return aResult;
}

window.onload=function(){
	var p_innertext=document.getElementById('p_text');
	var select_btn=getClass('select_btn');
	var jia=getClass('jia');
	var jian=getClass('jian');
	var input_input=getClass('input_input');
//	var selimg=select_btn.getElementsByTagName('img')[1];
//	console.log(selimg)
	var selectall=document.getElementById('selcetall');
	var goaccounts=document.getElementById('goaccounts');
//	console.log( goaccounts)
	p_innertext.innerHTML='编辑';
	p_innertext.onclick=function(){
		this.innerHTML='完成';
		for(var i=0;i<select_btn.length;i++){
		   	select_btn[i].style.display='block';	
		   	selectall.style.display='block';
		   	goaccounts.style.display='none';
//		   	var flag=1;
//		   	if(flag==1){
//		   		selimg[i].src="../img/gouwuche_xuanzhong.png";
//		   		flag=0
//		   	}else{
//		   		selimg[i].src="../img/gouwuche_weixuanzhong.png";
//		   		flag=1
//		   	}
		}	  
		
		
	}
	for(var i=0;i<jia.length;i++){
		jia[i].onclick=function(){
			for(var j=0;j<input_input.length;j++){				
				input_input.value=parseInt(input_input.value)+1;							
			}
      
		}
	}	
    	
}
