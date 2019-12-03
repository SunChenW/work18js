$(function(){
	//定义参考值
	var index = 0;
	//先写的功能：指示器排他功能，移动功能
	$(".indicator li").mouseenter(function(){
		$(this).addClass("current").siblings().removeClass("current");
		//获取鼠标在第几个li
		index = $(this).index()
		//图片对应移动
		$(".inner").stop().animate({
			left:- index * 1200
		},500)
	})
	//无缝轮播，需要用到6张图，将第一张复制到最后
	$(".inner li").eq(0).clone().appendTo(".inner");
	//左侧效果
	$(".left").click(function(){
		if(index==5){
			index=0;
			$(".inner").css("left",0)
		}
		index++; //index累加
		//图移动
		$(".inner").stop().animate({
			left:- index * 1200
		},500)
		//对应着改变指示器:第六张图时，要指示第一个。其他情况对应指示
		if(index==5){
			$(".indicator li").eq(0).addClass("current").siblings().removeClass("current");
		}else{
			$(".indicator li").eq(index).addClass("current").siblings().removeClass("current");
		}
	})
	//右侧效果
	$(".right").click(function(){
		if(index==0){
			index =5;
			$(".inner").css("left",-5*1200)
		}
		index--; //index累减
		//图移动
		$(".inner").stop().animate({
			left:- index * 1200
		},500)
		//对应着改变指示器:情况对应指示
		$(".indicator li").eq(index).addClass("current").siblings().removeClass("current");		
	})
	
	//循环点击left
	var time = setInterval(function(){
		$(".left").trigger("click")
	},2000)
	
	$(".swiper").hover(function(){
		clearInterval(time)
	},function(){
		time = setInterval(function(){
		$(".left").trigger("click")
	},2000)
	})
})

swiper:特定功能 ---插件,
功能较多,处理一类功能: 库 (jquery) bootstrap(框架 css框架)
可以解决真个网页问题: 框架 vue react angular 小程序