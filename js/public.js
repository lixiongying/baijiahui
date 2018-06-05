//设置窗口rem适配
			var html = document.getElementsByTagName('html')[0];
			var W = html.clientWidth;
			html.style.fontSize = W / 20 + "px";
			//窗口改变监听
			window.onresize = function(){
				var html = document.getElementsByTagName('html')[0];
				var W = html.clientWidth;
				html.style.fontSize = W / 20 + "px";
			}

	function back(){
		
		window.history.back(-1);
		
	}

	function url(obj){
		var url = $(obj).attr('data-url');
		mui.openWindow({
			url:url,
			id:url
		})
	}
