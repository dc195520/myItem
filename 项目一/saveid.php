<?php
    //字符编码
    header("Content-type: text/html; charset=utf-8");

    //php语言中分号必须写
//  1、接受前端传来的数据
    $usernameid = $_REQUEST["username"];  //[]中的为前端页面input框的name值
    $userpassword = $_REQUEST["userpass"]; 

//2 处理（连接数据库   保存数据）
    $resultStr = "";
    // 连接数据库
    $con = mysql_connect("localhost","root","root");
    if(!$con){
        $resultStr = "0";
    }else{
        // 连接数据库名  
        mysql_select_db("item01",$con);
        // 执行SQL语句（添加语句）
        // 判断该用户名是否被注册 
        $sqlstr = "select * from username where usernameid='".$usernameid."'";
        // 设置一个变量接收查询语句在数据库查询的结果
        //语句返回的是表格
        $result = mysql_query($sqlstr,$con); 
        // 查询表格有多少行
        $rows = mysql_num_rows($result);

       
        if($rows>0){//说明该用户名在数据库中是存在的。
            // $resultStr = "该用户名已存在";
            $resultStr = "0";
        }else{ //如果不存在
            // 将用户名添加到表中
            $sqlstr = "insert into username values('".$usernameid."','".$userpassword."')";
        
            $resultStr = "1";               
        } 
        //关闭数据库
        mysql_close($con);
        //3 输出(响应)
        echo $resultStr;      
    }
    
?>