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


$(function(){

		var $jia=$('.world_five .jia');	
		var $jian=$('.world_five .jian');
		var $inputsum=$('.input_input'); 
		var $CheckBox=$('.select_btn')
		var $select=$('.selected');	
		var $goaccounts=$('.goaccounts');
		var $selectall=$('.selectall');
		var $accounts=$('.goaccounts .delete');//结算按钮
		var $eddit=$('.p_text');
		var $delete=$('.selectall .delete');
		var $completes=$('.completes')//		完成按钮
		var $editor=$('.selectall .edit')

		$jia.click(function(){
		    var $priceTotal;
		    var $inputVal = $(this).parents('.world_five').find('input');
            
            var $count = parseInt($inputVal.val())+1;
            var $price = $(this).parents('.world_five').parents('.select_fruit').find('.price').html();  //单价
            var $allprice=$(this).parents('.select_fruit').find('.world_six');
            $priceTotal = $count*parseInt($price);
            $allprice.html($priceTotal);
		    $inputVal.val($count);
		  
	        
		    updatemoney();
		})
		
		$jian.on('click',function(){
			
		var $inputVal = $(this).parents('.world_five').find('input'),
            $count = parseInt($inputVal.val())-1,
//          $priceTotalObj = $(this).parents('.order_lists').find('.sum_price'),
            $price = $(this).parents('.world_five').parents('.select_fruit').find('.price').html(),  //单价
            $priceTotal = $count*parseInt($price),
            $allprice=$(this).parents('.select_fruit').find('.world_six');
		    if($inputVal.val()>1){
		    	
              $inputVal.val($count);
          	  $allprice.html($priceTotal);
            }else{
             	$inputVal==1
            }
		  
		   	updatemoney()
		});
		
		$inputsum.keyup(function(){
			
			var $count = 0,
			    $price = $(this).parents('.world_five').parents('.select_fruit').find('.price').html();
			
			
			if($(this).val()==''){
                $(this).val('1');
            }
			$(this).val($(this).val().replace(/\D|^0/g,''));
			$count = $(this).val();
			$priceTotal = $count*parseInt($price);
			$allprice=$(this).parents('.select_fruit').find('.world_six');
			$allprice.html($priceTotal);
			$(this).attr('value',$count);
			updatemoney();
			
		})
		//全选
		$select.click(function(){
			if($(this).hasClass('selectnotAll')){
				var $inputVal = $('.select').find('input');
            
	            var $count = parseInt($inputVal.val());
	            var $price = $('.select').find('.price').html();  //单价
	            var $allprice=$('.select').find('.world_six');
	            $priceTotal = $count*parseInt($price);
	            $allprice.html($priceTotal);
				$(this).removeClass('selectnotAll').addClass('selectAll');
				$CheckBox.addClass('pitchup')
                $('.form_item').addClass('addbgcolor');
                $accounts.removeClass('accountsnot').addClass('wentaccounts');
               
			}else{
			    $(this).removeClass('selectAll').addClass('selectnotAll');
				$CheckBox.removeClass('pitchup').addClass('unpitchup');
				$('.form_item').removeClass('addbgcolor');
				$accounts.removeClass('wentaccounts').addClass('accountsnot')
			}
			updatemoney();

		})
		
		
		$CheckBox.each(function(){
			$pitch=$(this).parent('.select').find('.pitchup');
			
			$(this).click(function(){
				if($(this).hasClass('unpitchup')){
						var num=0;
						var len=$CheckBox.length;
						var $inputVal = $(this).parents('.select').find('input');
            
			            var $count = parseInt($inputVal.val());
			            var $price = $(this).parents('.select').find('.price').html();  //单价
			            var $allprice=$(this).parents('.select').find('.world_six');
			            $priceTotal = $count*parseInt($price);
			            $allprice.html($priceTotal);
			            
						$(this).removeClass('unpitchup');
						$(this).addClass('pitchup');
						$(this).parents('.form_item').addClass('addbgcolor');
						 $accounts.removeClass('accountsnot').addClass('wentaccounts')
						$CheckBox.each(function(){
							if ($(this).hasClass('pitchup')){
		                        num++;
		                    }
				        })
						if (num == len) {
//		                   alert(num)
                            $select.removeClass('selectnotAll');
		                    $select.addClass('selectAll');
		                    $editor.removeClass('editornot').addClass('editor');
		                   
		                }
						
					}else{
						
						$(this).removeClass('pitchup').addClass('unpitchup');
		                $select.removeClass('selectAll').addClass('selectnotAll');
		                $(this).parents('.form_item').removeClass('addbgcolor');
		                $editor.removeClass('editor').addClass('editornot');
				  }
					updatemoney()
								
			})
		    
		})
		
		
		var $price=$('.world_four .price').text();
		var $all_total=$('.alltotal');
		
		
     //编辑
      
     
	   $eddit.click(function(){
	   
	  	var num=0;
	 
	  	var len=$CheckBox.length;
	  	$(this).css('display','none');
	 	$completes.css('display','block');
	   	$CheckBox.removeClass('pitchup').addClass('unpitchup');
	  	$('.form_item').removeClass('addbgcolor');
	  	$goaccounts.css('display','none');
	   	$selectall.css('display',"block");
	   	$CheckBox.click(function(){
	   		 $CheckBox.each(function(){
        	
	        	if($(this).hasClass('pitchup')){
//                  var nummoney=$(this).parents('.select').find('.world_six').html(); 
                    
//                  var $inputVal = $(this).parents('.selecte').find('input'),
//		            $count = parseInt($inputVal.val()),
//		//          $priceTotalObj = $(this).parents('.order_lists').find('.sum_price'),
//		            $price = $(this).parents('.select').find('.price').html(),  //单价
//		            $priceTotal1 = $count*parseInt($price),
//		            $allprice1=$(this).parents('.selcet').find('.world_six');
//		            $allprice1.html($priceTotal1);
		           
//		   		    updatemoney()
	        	}
	        	
        })
	   	})
       
   
   
	   	$delete.click(function(){
	   		
	   		$CheckBox.each(function(){
	  		if($(this).hasClass('pitchup')){
	  			$(this).parents('.form_item').remove();
	  			
	  		}
	  		
	   	  })
	   		
	   	})
    
        if($(this).css('display','none')){
//	  		alert('yes')
	  		$completes.click(function(){
	  			$(this).css('display','none');
	  			$eddit.css('display','block');
	  			$goaccounts.css('display','block');
	        	$selectall.css('display',"none");
//	        	$('.piece_num').html('0');
	        	
	  			
	  		})
	  		 
	  	}
	    
	   })
	   
	   function updatemoney(){	
		   var total_money = 0;
           var total_count = 0;         
           var $account=$('.goaccounts .delete');
           $CheckBox.each(function(){
           	  if($(this).hasClass('pitchup')){
           	  	
           	  	var goods =parseInt($(this).parents('.select').find('.world_six').html()); 
           	  	var num =  parseInt($(this).parents('.select').find('.input_input').val());
           	 
           	   total_money += goods;
               total_count += num;
           	  }
           })
           
           $('.goaccounts .alltotal').html(total_money);
           $('.piece_num').html(total_count);
         
        }

	})