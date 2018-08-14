<?php
 //字符编码
header("Content-type: text/html; charset=utf-8");
 
$usernameid = $_REQUEST["username"];
$userpassword = $_REQUEST["userpass"];
$con = mysql_connect("localhost","root","root");
if(!$con){
    die("数据库连接失败：".mysql_error());
}else{
    mysql_select_db("item01",$con);
    $sqlstr = "select * from username where usernameid='".$usernameid."' and  userpassword='".$userpassword."'";

    $result = mysql_query($sqlstr,$con);

    $rowCount = mysql_num_rows($result);
    mysql_close($con);
 
    if($rowCount>=1){  //存在，可登陆 
        echo "1";
        // header("localtion:index.html");
    }else{
        echo "0";
        // echo "密码输入有误!";
    }
}

?>