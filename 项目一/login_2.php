<?php
    header("content-type","text/html;charset=utf-8");
    
    $usernameid = $_POST["usernameid"]; 
	$userpassword = $_POST["userpassword"];

    $con = mysql_connect("localhost","root","root");
    mysql_select_db("item01",$con);

    $sqlStr = "select * from username where usernameid='".$usernameid."' and userpassword='".$userpassword."'";
    $result = mysql_query($sqlStr,$con);

    mysql_close($con);
     
    $rows = mysql_num_rows($result);
    if($rows>0){//登录成功 
        echo "1";	
    }else {//登录失败，返回0.
        echo "0";
    }	





















?>