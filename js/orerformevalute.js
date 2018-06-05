var rating = (function() {
        // 初始点亮的星星数量的函数
	var lightOn = function($item, num) {
	  $item.each(function(index) {
	    if(index < num) {
	       $(this).children('img').attr('src','../img/fabiaopingjia_pingfen.png')
	    } else {
	      $(this).children('img').attr('src','../img/fabiaopingjia_pingfen2.png')
	    }
	  })
	}
	var init = function(el, num) {
	  var $rating = $(el);
	  var $item = $rating.find('.rating-item');
	  // 调用lightOn函数，并传入参数
	  lightOn($item, num);
	  // 事件绑定(将子元素的事件委托给父元素处理)
	  $rating.on('mousemove', '.rating-item', function() {
	    lightOn($item, $(this).index() + 1);
	  }).on('click', '.rating-item', function() {
	    num = $(this).index() + 1;
	  }).on('mouseout', function() {
	    lightOn($item, num);
	  });
	};
	// jQuery插件
    $.fn.extend({
      ratingStar: function(num) {
        return this.each(function() {
          init(this, num)
        })
      }
    })
    return {
      initfn: init
    }
})();
      

//var rating=(function(){
//	var lighton=function($item.num){
//		$item.each(function(){
//			var index=$(this).index()
//			if(index<num){
//				$item.children('img').attr('src','../img/fabiaopingjia_pingfen.png')
//			}else{
//				$item.children('img').attr('src','../img/fabiaopingjia_pingfen2.png')
//			}
//		})
//	}
//	var init=function(el,num){
//		var $el=$(el);
//		var $item=$el.find('.rating-item');
//		lighton(el,num);
//		$item.on('mousemove','.rating-item',function(){
//			lighton($item,$(this).index()+1);
//		}).on('click','.rating-item',function(){
//			num=$(this).index()+1
//		}).on('mouseout',function(){
//			lighton($item,num);
//		})
//	}
//	$.fn.extend=({
//		ratingStar:function(num){
//			return this.each(function(){
//				init(this,num)
//			})
//		}
//	})
//	return{
//		initfn:init
//	}
//})()
