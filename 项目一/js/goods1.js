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