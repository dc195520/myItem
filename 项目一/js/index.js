
// 鼠标滑过显示购物车信息
// $(".gwc").hover(function(){
// 	$(".gwcinner").show();
// })
$(".gwc").mouseenter(function(){
	$(".gwcinner").show();
})
$(".gwc").mouseleave(function(){
	$(".gwcinner").hide();
})


// 轮播图
$ (function(){
	initUI();
	changeImg();
	
	$(".list_pic").mouseover(stopChange);
	$(".list_pic").mouseout(changeImg);
		
	$("#btns li").click(function(){
		goImg($(this).index()+1);
	});
	
	// let arr = ["http://www.1000phone.com","http://www.baidu.com","http://www.taobao.com","http://www.jingdong.com","http://www.mobiletrain.org"];
	
	// $("img").click(function(){
	// 	location.href=arr[$(this).index()];
	// });
	
	// $("span:eq(0)").click(function(){
	// 	let transOrd = ord-1;
	// 	if(transOrd<1){
	// 		transOrd=3;
	// 	}
	// 	goImg(transOrd);		
	// });
	
	// $("span:eq(1)").click(function(){
	// 	let transOrd = ord+1;
	// 	if(transOrd>3){
	// 		transOrd=1;
	// 	}
	// 	goImg(transOrd);		
	// })
})

//初始化UI
function initUI(){
	$("#btns li:eq(0)").css({"background-color":"red"});
}

let myTimer;
var ord = 1;//当前图片的序号

//停止
function stopChange(){
	window.clearInterval(myTimer);
}

//跳转到指定的图片上。
function goImg(transOrd){
	//1、改变数据
	outOrd = ord;//此时的ord就是要出去ord。
	ord=transOrd;//改变ord的值；
	//2、处理边界
	if(ord>3){
		ord=1;
	}	
	//3、外观呈现
	//1)、把所有的豆豆变成原始颜色（粉的）
	//2)、把当前的豆豆变成高亮（红色）
	$("#btns li").eq(transOrd-1).css({"background-color":"red"}).siblings().css({"background-color":"pink"});

	//3)、滑入滑出
	sliderIn(outOrd,ord);
}

//改变图片
function changeImg(){
	myTimer = setInterval(function(){
		//1、改变数据
		//移出的图片序号
		let outOrd = ord;//移出的图片序号
		ord=ord+1;
		//2、处理边界
		if(ord>3){
			ord=1;
		}		
		//3、外观呈现
//		//1)、把所有的豆豆变成原始颜色（粉的）
//		//2)、把当前的豆豆变成高亮（红色）
		$("#btns li").eq(ord-1).css({"background-color":"red"}).siblings().css({"background-color":"pink"});
//		//3)、图片滑入
		sliderIn(outOrd,ord);
	},4000);	
}

//滑进滑出 
function sliderIn(outOrd,inOrd){
	$(".item").eq(outOrd-1).css({"left":0}).animate({
		      left:-1920
	},2000);
	$(".item").eq(inOrd-1).css({"left":1920}).animate({
		      left:0
	},2000);
}


// 配件专区
$("#list_kmt").hover(
    function(){
        $(".kmt_img").show();
        $(".cdb_img").hide();
        $(".ej_img").hide();
    }
)
$("#list_cdb").hover(
	function(){
        $(".kmt_img").hide();
        $(".cdb_img").show();
        $(".ej_img").hide();
    }
)
$("#list_ej").hover(
    function(){
        $(".kmt_img").css({"display":"none"});
        $(".cdb_img").css({"display":"none"});
        $(".ej_img").css({"display":"block"});
    },
    function(){
       

    }
)
// 导航区
$("#a_axon").hover(  
	function(){
		$(".a_phone").show();
		$(".a_phone2").hide();
	}
)
$(".a_phone").mouseleave(function(){
	$(".a_phone").hide();
})

$("#a_blade").hover(
	function(){
		$(".a_phone2").show();
		$(".a_phone").hide();
})
$(".a_phone2").mouseleave(function(){
	$(".a_phone2").hide();
})

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

// 回到顶部
$(".item_gotop").click(function(){
	$("this").scrollTop(0);
})

$(".phono_list").click(function(){
	location.href="goodsxq.html";
})
/*
// JS链式代码  多看，多参考
$(function(){
    $(".option_a2").hover(function(){
        $(this).children(".option_a2_a").slideDown(500);
    },function(){
		$(this).children(".option_a2_a").slideUp(500);
	});
});


$(function(){
	$(".rush-top .rr").mouseover(function(){
	 	var index1=$(this).index();
	 	$(".rush-bot>div").eq(index1).show().siblings().hide();
        // $(this).addClass("bb").siblings().removeClass("bb"); 
        $(this).addClass("bb").siblings().removeClass("bb")
	})
})
*/



