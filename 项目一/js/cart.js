// 固定定位滑过

$(".item_weixin").mouseenter(function(){
	$(".item_ma").css({
		"transform": "scale(1);"		
	}).show(); 
})

$(".item_weixin").mouseleave(function(){
	$(".item_ma").css({
		"transform": "scale(0);",		
	}).hide();
}) 


//点击加
$(".add").click(function(){
	//数量
	let n = $(this).parents(".goods_one").find(".num");
	//单价
	let p = $(this).parents(".goods_one").find(".goods_price");
	//小计
	let s = $(this).parents(".goods_one").find(".goods_xiaoji");
		n.html( parseInt( n.html() )+1  )	;
	s.html( ( parseInt( n.html() ) * parseFloat( p.html() ) ).toFixed(2) )  ;	
})

//减
$(".reduce").click(function(){
	//数量
	let n = $(this).parents(".goods_one").find(".num");
	//单价
	let p = $(this).parents(".goods_one").find(".goods_price");
	//小计
	let s = $(this).parents(".goods_one").find(".goods_xiaoji");
	
	// let n1 = parseInt(n.html() )-1 ;
	n.html( parseInt( t.html() ) -1 );
	if(n.html()<=1){
		n.html(1);
	}

	s.html( ( parseInt( n.html() ) * parseFloat( p.html() ) ).toFixed(2) )  ;

})

//单选
$(".checkgoods").click(function(){
	if($(".checkgoods:checked").length == $(".checkgoods").length){
		$(".checkAll").prop("checked",true);
		sum();

	}else{
		$(".checkAll").prop("checked",false);
		sum();
	}
})

//多选
$(".checkAll").click(function(){
	if($(this).is(":checked")){
		$(":checkbox").prop("checked",true);
		sum();
	}else{
		$(":checkbox").prop("checked",false);
		sum();
	}
})

// 求和
function sum(){
	let total_num = 0;
	let total_sum = 0;
	$(".checkgoods").each(function(){
		if( $(this).is(":checked") ){
			let n = parseInt( $(this).parents(".goods_one").find(".num").html() ) ;
			let s = parseFloat( $(this).parents(".goods_one").find(".goods_xiaoji").html() )  ;
			total_num += n;
			total_sum += s;
		}
		$(".bot_count").html(total_num );
		$(".bot_price").html( total_sum);
	})
}


//删除
$(".goods_delete").click(function(){
	if(window.confirm("您是否要删除？")==true){
		$(this).parentsUntil(".goods").detach(".goods_one");
	}
})

function del(){
	$(".goods_delete").click(function(){
		if(window.confirm("您是否要删除？")==true){
			$(".goods").detach(".goods_one");
		}
	})
}





























