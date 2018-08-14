
//用户名输入是否正确
//检验是否输入用户名
// 获取文本框中的值 在jQuery中用val()

$("#username").focus(function(){
	$(".check_name").hide();
})
$("#username").blur(function(){
	let  regObj = /^1[345789]\d{9}$/; 
	if(regObj.test(this.value)){ 		
		$(".check_name").hide();
	}else{
		$(".check_name").show();
	}
})

// 产生随机的验证码
function showMa(n){   //有参数
	var arr=["0","1","2","3","4","5","6","7","8","9","a","A","b","B","c","C","d","D","e","E","f","F","g","G","h","H","i","I","j","J","k","K","l","L","m","M","n","N","o","O","p","P","q","Q","r","R","s","S","t","T","u","U","v","V","w","W","x","X","y","Y","z","Z"];
	var str="";
	for(var i=0;i<n;i++){
		index=parseInt(Math.random()*arr.length);//随机下标
		str+=arr[index];
	}
	return str; 
}
	
//页面一打开显示验证码	
$("#showMa").html(showMa(4));
	
//点击换验证码
$("#check_Ma").click(function(){
	$("#showMa").html(showMa(4)) ;
})



//验证码与输入的是否一致
// 获取文本框中的值 在jQuery中用val() 
$(".checkMa").focus(function(){
	$(".check_word").hide();
})
$(".checkMa").blur(function(){
    let maSmall =  $("#showMa").html().toLowerCase();  //验证码全部转为小写 
    let  intSmall = $(".checkMa").val().toLowerCase() ;                                        
    if( intSmall!=maSmall){
        $(".check_word").show();
    }else{
        $(".check_word").hide();
    }
})
//获取cookie
function addCookie(key,value,days){
	var d = new Date();
	d.setDate(d.getDate()+days);
	//保存cookie；
	document.cookie = key+"="+escape(value)+";expires="+d.toGMTString();	
}	 
//验证用户名
$(".smt").click(function(){
	$.post( 
		"login_2.php",
		{
			"usernameid":$("#username").val(),
			"userpassword":$("#userpass").val()
		},
		function(data){					
			if(data=="1"){//登录成功！
				//记录cookie
				addCookie("usernameid",$("#username").val(),7);
				location.href="index.html";
			}else{
				$(".check_login").html("用户名或密码输入有误").show();
			}
		}
	);
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
    


