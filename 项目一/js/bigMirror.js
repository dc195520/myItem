//放大镜插件
//放大镜：
function Mirror(domObj,mirrorWidth,mirrorHeight,beiShu,bgColor){
	this.domObj = domObj;
	
	this.mirrorWidth = mirrorWidth;
	this.mirrorHeight = mirrorHeight;
	this.beiShu = beiShu;
	this.bgColor = bgColor;
	this.createUI();
	this.createEvent();
}

Mirror.prototype.createUI = function(){
		//创建放大镜
	this.mirrorBoxDom = document.createElement("div");
	this.mirrorBoxDom.style.cssText = "position: absolute;opacity: 0.4;display:none;";
	this.mirrorBoxDom.style.width=this.mirrorWidth+"px";
	this.mirrorBoxDom.style.height=this.mirrorHeight+"px";
	this.mirrorBoxDom.style.backgroundColor=this.bgColor;
	this.domObj.appendChild(this.mirrorBoxDom);
	
	//创建放大效果
	this.showImgBoxDom = document.createElement("div");
	this.showImgBoxDom.style.cssText = "position: absolute;top:0px;display:none;";
	this.showImgBoxDom.style.left = this.domObj.offsetWidth+10+"px";
	this.showImgBoxDom.style.width=this.mirrorWidth*this.beiShu+"px";
	this.showImgBoxDom.style.height=this.mirrorHeight*this.beiShu+"px";
	this.showImgBoxDom.style.backgroundImage=getStyle(this.domObj,"backgroundImage");
	this.showImgBoxDom.style.backgroundSize=this.domObj.offsetWidth*this.beiShu+"px "+this.domObj.offsetHeight*this.beiShu+"px";
		this.domObj.appendChild(this.showImgBoxDom);		
	}
	
Mirror.prototype.createEvent = function(){
		
		let obj = this;//是放大镜对象
	
	this.domObj.onmouseover = function(){
		obj.mirrorBoxDom.style.display="block";
		obj.showImgBoxDom.style.display="block";
	}
	
	this.domObj.onmouseout = function(){
		obj.mirrorBoxDom.style.display="none";
		obj.showImgBoxDom.style.display="none";
	}
	
	//鼠标移动放大镜，显示效果对应在移动
	this.domObj.onmousemove = function(event){
		let evt = event || window.event;
		//let rect = this.getBoundingClientRect();
			obj.moveImg(evt.pageX-obj.domObj.offsetLeft,evt.pageY-obj.domObj.offsetTop);
		}
	}
	
Mirror.prototype.moveImg = function(mouseLeft,mouseTop){
		//一、让放大镜跟随
	//1、数据(计算放大镜的位置)
	let left1 = mouseLeft-this.mirrorWidth/2;
	let top1 = mouseTop-this.mirrorHeight/2;
	
	//2、处理边界
	if(left1<0){
		left1=0;
	}else if(left1>this.domObj.offsetWidth-this.mirrorWidth){
		left1=this.domObj.offsetWidth-this.mirrorWidth;
	}
	
	if(top1<0){
		top1=0;
	}else if(top1>this.domObj.offsetHeight-this.mirrorHeight){
		top1=this.domObj.offsetHeight-this.mirrorHeight;
	}
	//3、改变外观
	this.mirrorBoxDom.style.left = left1+"px";
	this.mirrorBoxDom.style.top = top1+"px";
	this.showImgBoxDom.style.backgroundPosition=(-1*this.beiShu*left1)+"px "+(-1*this.beiShu*top1)+"px";	
}

























// 点击加
$(".add").click(function(){
	// 数量
	let t = $(this).parents(".goods_one").find(".num");
	//单价
	let p = $(this).parents(".goods_one").find(".goods_price");
	//小计
	let s = $(this).parents(".goods_one").find(".goods_xiaoji");
	// let t1 = parseInt(t.html())+1;
	t.html(parseInt(t.html())+1);
	
	s.html( ( parseInt(t.html() ) * parseFloat(p.html() ) ).toFixed(2) );
	sum();
})

// 点减
$(".reduce").click(function(){
	//数量
	let t = $(this).parents(".goods_one").find(".num");
	//单价
	let p = $(this).parents(".goods_one").find(".goods_price");
	//小计
	let s = $(this).parents(".goods_one").find(".goods_xiaoji");
	t.html( parseInt( t.html() ) -1 );
	// let t1 =parseInt( t.html() ) -1;
	if(t.html() <=1){
		t.html(1);
	} 

	s.html( (parseInt(t.html()) * parseFloat(p.html())).toFixed(2)  );
	sum();
})

//单选
$(".checkgoods").click(function(){
	// 被点击选中的按钮的长度  等于  所有的按钮长度
	     // 1、全选被勾选  2、求和
	if($('.checkgoods:checked').length == $('.checkgoods').length){
		$('.checkAll').prop('checked',true);
		sum();
	}else{ //只执行求和    
		$('.checkAll').prop('checked',false);
		sum();
	}
})

//多选
	//当全选按钮被选中
	// 1.所有单选按钮被选中
	// 2.必须执行求和操作  数量求和   金额求和
$('.checkAll').click(function(){
	if( $(this).is(':checked')){ 
		//找到所有的多选框
		$(':checkbox').prop('checked',true);
		sum();		
	}else{
		$(':checkbox').prop('checked',false);

	}
})

//点击单选或多选  数量和金额显示到下面
// 求和    数量   总价
function sum(){
	let total_num = 0;
	let total_price = 0;
	$('.checkgoods').each(function(){
		if( $(this).is(':checked') ){
			let nums = parseInt( $(this).parents('.goods_one').find('.num').html() );
			let sums = parseFloat( $(this).parents('.goods_one').find('.goods_xiaoji').html() );
			total_num += nums;
			total_price += sums;
		}
		$(".bot_count").html(total_num);
		$(".bot_price").html( total_price.toFixed(2) );
	})
}

// 删除
$(".goods_delete").click(function(){
	if(window.confirm("您确定要删除吗？")==true){
		$(this).parentsUntil(".goods").detach(".goods_one");

	}
})

function del(){
	$('.goods_delete').click(function(){
		if(window.confirm("您确定要删除吗？")==true){
			$(".goods").detach(".goods_one");	
		}
	})
}

