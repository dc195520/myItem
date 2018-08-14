
//获取cookie
function addCookie(key,value,days){
	var d = new Date();
	d.setDate(d.getDate()+days);
	//保存cookie；
	document.cookie = key+"="+escape(value)+";expires="+d.toGMTString();	
}
// 检验手机号
$("#phoneId").focus(function(){
    $("#phone_sign").hide();
}) 
 
$("#phoneId").blur(function(){
    let  regObj = /^1[345789]\d{9}$/; 
    if(regObj.test(this.value)){ 
        $("#phone_sign").css({"display":"none"});
    }else{
        $("#phone_sign").css({"display":"block"});
    }
    $.get(
        "checkTel.php",
        {
            "usernameid":$("#phoneId").val()	
        },
        function(data){
            if(data=="1"){
                $(".check_name").hide();						
            }else{
                $(".check_name").show();
            }
        }				
    );
}) 

//点击提交，数据添加到表里

$(".smt").click(function(){

    $.post(
        "addTel.php", 
        {
            "usernameid":$("#phoneId").val(),
            "userpassword":$("#psd").val()
        },
        function(data){					
                setTimeout(function(){
                    location.href = "login.html";
                },1000);
            console.log(data);
        });
/*      
    //ajax请求后端数据
    //鼠标一离开用户名表单，验证用户名是否存在

    //1.创建对象
    let xhr = new XMLHttpRequest();
    let postStr="usernameid="+$("#phoneId").val()+"&userpassword="+$("#psd").val();
    //2.设置请求参数
    xhr.open("post","saveid.php",true); //是否同步异步
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    // 3.设置回调函数
    xhr.onreadystatechange = function(){
        if(xhr.readyState==4 && xhr.status==200){
            //交互完成 			服务器成功处理请求并返回请求的网页
            console.log(xhr.responseText);
            if(xhr.responseText==1){ 
                //1.保存cookie
                addCookie("username",$("#phoneId").value,7); 
                //2.跳转到首页
                // header("location:index.html");  //php响应
                location.href = "index.html"; //js响应
            }
        }
    }
    xhr.send(postStr);
*/    
})

//判断密码强度 
$("#psd").focus(function(){
    $(".psd_qd").hide();
})

$("#psd").blur(function(){
    let str=$("#psd")[0].value;
    $(".psd_qd").hide();
	let reg=/^[A-Za-z0-9]\w{5,15}$/;
	if(reg.test(this.value)==false){
        $(".psd_qd").show();
        $("#psd_img_1").hide();
        $("#psd_img_2").hide();
        $("#psd_img_3").hide();
	}else{
		if(str.length<=8 ){
            $("#psd_img_1").show();
            $("#psd_img_2").hide();
            $("#psd_img_3").hide();
		}else if(str.length<=12 && str.length>8){
            $("#psd_img_1").hide();
           $("#psd_img_2").hide();
			$("#psd_img_2").show();
		}else if(str.length<=16 &&str.length>12){
			$("#psd_img_2").hide();
            $("#psd_img_3").show();
            
		}
	}
})


//检验密码输入是否一致
$("#again_psd").blur(function(){
    if($("#psd").val()!=$("#again_psd").val()){
        $(".check_psd").show();
    }else{
        $(".check_psd").hide();
    }
})
$("#again_psd").focus(function(){
    $(".check_psd").hide();
})

// 产生随机的验证码
function showMa(n){   
	var arr=["0","1","2","3","4","5","6","7","8","9","a","A","b","B","c","C","d","D","e","E","f","F","g","G","h","H","i","I","j","J","k","K","l","L","m","M","n","N","o","O","p","P","q","Q","r","R","s","S","t","T","u","U","v","V","w","W","x","X","y","Y","z","Z"];
	var str="";
	for(var i=0;i<n;i++){
		index=parseInt(Math.random()*arr.length);
		str+=arr[index];
	}
	return str; 
}

//验证码与输入的是否一致
// 获取文本框中的值 在jQuery中用val()
$(".checkMa").blur(function(){
    // let regObj =  new RegExp(/^[a-zA-Z0-9]{4}$/,"i");
    // let $strShow = $("#showMa").html();
    let maSmall =  $("#showMa").html().toLowerCase();  //验证码全部转为小写 
    
    let  intSmall = $(".checkMa").val().toLowerCase() ;                                        
    if( intSmall!=maSmall){
        $(".check_word").show();
    }else{
        $(".check_word").hide();
    }
})
$(".checkMa").focus(function(){
    $(".check_word").hide();
})

//点击获取短信验证码  倒计时
$(".getMa").click(function(){
    let myTimer = null;
    let seconds = 60;    
    myTimer=setInterval(function(){
        seconds--;
        if(seconds<0){
            clearInterval(myTimer);
            myTimer = null;
            $(".getMa").html("获取验证码");
            return;            
        }
        $(".getMa").html(seconds);
    },1000);     
})

$(function(){
    $("#showMa").html(showMa(4)) ;  //页面一打开显示验证码

    $("#check_Ma").click(function(){   //点击换码调验证码
        $(".check_word").hide();
        $("#showMa").html(showMa(4)) ;
    });
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













