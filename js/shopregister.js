	document.getElementById('post').addEventListener('tap',function(){
		mui.openWindow({
			url:"shopregistersuccess.html",
			id:"shopregistersuccess.html",
		})
	})
	$(function(){
		$(".agree .agrees").click(function(){
			
			if($(".agree .agrees img").attr('src')=="../img/gouwuche_weixuanzhong.png"){
				$(".agree .agrees img").attr('src',"../img/gouwuche_xuanzhong.png")
			}else{
				$(".agree .agrees img").attr('src',"../img/gouwuche_weixuanzhong.png");
			}
			
		})
	})

	function imgChange(obj1, obj2) {
	        //获取点击的文本框
	var file = document.getElementById("file");
	//存放图片的父级元素
	var imgContainer = document.getElementsByClassName(obj1)[0];
	//获取的图片文件
	var fileList = file.files;
	//文本框的父级元素
	var input = document.getElementsByClassName(obj2)[0];
	var imgArr = [];
	//遍历获取到得图片文件
	
	if(fileList.length==1){
			var imgUrl = window.URL.createObjectURL(file.files[0]);
		    imgArr.push(imgUrl);
		    var img = document.createElement("img");
		    img.setAttribute("src", imgArr[0]);
		    var imgAdd = document.createElement("div");
		    imgAdd.setAttribute("class", "z_addImg");
		    imgAdd.appendChild(img);
		    imgContainer.appendChild(imgAdd);
		}else{
			return false
		}
	
	   imgRemove()
};
	function imgRemove() {
	    var imgList = document.getElementsByClassName("z_addImg");
	    
	    for (var j = 0; j < imgList.length; j++) {
	        imgList[j].index = j;
	        imgList[j].onclick = function() {
	            var t = this;        
	            t.style.display = "none";
	        }
	    };
	};