$(function(){
	/*定义参考值*/
	var index = 0;
	/*鼠标选择指示器时，改变指示器状态，图片对应移动*/
	$(".indicators li")
	.mouseenter(function(){
		//鼠标滑过的指示器，添加.current,去掉所有兄弟的.current
		$(this).addClass("current").siblings().removeClass("current")
		//获取鼠标滑过的为第几个
		index = $(this).index()
		//轮播图针对性位移：使用动画改变位置，动画执行时间为500ms
		$(".inner").stop().animate({
			left: - index * 1200
		},500)
	})

	/*实现无缝对接 --将第一张图克隆一份到最后。这样总共有6张图，5个指示器。接下来就是数学运算的过程*/
	$(".inner li").eq(0).clone(true).appendTo(".inner")
	/*鼠标点击左侧*/
	$(".left").click(function(){
		//定义结束条件：不能一直变大。某个值时将参考值归零，并将整个轮播图瞬间归位
		if(index == 5){
			$(".inner").css("left",0)
			index = 0;
		}
		index ++ ;
		//点击之后，参考值加一，图片动画移动
		$(".inner").stop().animate({
				left: - index * 1200
			},500)
		//显示最后一张图时，指示器指示第一个，其余情况指示器对应指示
		if(index==5){
			$(".indicators li").eq(0).addClass("current").siblings().removeClass("current")
		}else{
			$(".indicators li").eq(index).addClass("current").siblings().removeClass("current")
		}
	})
	//右侧点击
	$(".right").click(function(){
		//定义结束条件
		if(index == 0){
			$(".inner").css("left",-5*1200)
			index = 5;
		}
		index -- ;
		$(".inner").stop().animate({
				left: - index * 1200
			},500)
		$(".indicators li").eq(index).addClass("current").siblings().removeClass("current")
	})
	
	//使用定时器，循环点击 左侧按钮
	var time = setInterval(function(){
		$(".left").trigger('click')
	},2000)
	//鼠标进入 轮播范围停止轮播，离开之后重新开启轮播
	$(".swiper").hover(function(){
		clearInterval(time)
	},function(){
		time = setInterval(function(){
			$(".left").trigger('click')
		},2000)
	})
})