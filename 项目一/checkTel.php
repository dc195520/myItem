<?php
	//php中定义一个变量用$
	header("content-type","text/html;charset=utf-8");
	
	// 1.接收数据
	$usernameid = $_GET["usernameid"]; 
	//2、在数据库中查询
	 	//1)、建立连接，并选择数据库
	$con = mysql_connect("localhost","root","root");
	mysql_select_db("item01",$con);
	//2)、执行SQL语句（查询）
	$sqlStr="select * from username where usernameid='".$usernameid."'";  
		
	$result = mysql_query($sqlStr,$con);
 
	//3)、关闭连接 
	mysql_close($con);
	//3、响应结果
	//获得$result的行数
	$rowsCount = mysql_num_rows($result);
	if($rowsCount>0){ //用户名存在
		echo "0";
	}else{   //不存在
		echo "1";
	}
?>
