$(function() {
	/* 初始化页面 */
	// 轮播总个数
	var lists = $(".inner li").length
	// 轮播图大小设置
	$(".inner").width(100 * (lists + 1) + "%")
	$(".inner li").width(100 / (lists + 1) + "%")
	// 创建指示器
	for (var i = 0; i < lists; i++) {
		$("<li></li>").appendTo(".swiper .indicators")
	}
	$(".indicators li").eq(0).addClass("current")
	/*定义参考值*/
	var index = 0;
	// 每次位移的距离
	var step = $(".inner li").width();
	/*鼠标选择指示器时，改变指示器状态，图片对应移动*/
	$(".indicators li")
		.mouseenter(function() {
			//鼠标滑过的指示器，添加.current,去掉所有兄弟的.current
			$(this).addClass("current").siblings().removeClass("current")
			//获取鼠标滑过的为第几个
			index = $(this).index()
			//轮播图针对性位移：使用动画改变位置，动画执行时间为500ms
			$(".inner").stop().animate({
				left: -index * step
			}, 500)
		})
 
	/*实现无缝对接 --将第一张图克隆一份到最后。这样总共有6张图，5个指示器。接下来就是数学运算的过程*/
	$(".inner li").eq(0).clone(true).appendTo(".inner")
	/*鼠标点击左侧*/
	$(".prev").click(function() {
		// 每次位移的距离
		step = $(".inner li").width();
		//定义结束条件：不能一直变大。某个值时将参考值归零，并将整个轮播图瞬间归位
		if (index == lists) {
			$(".inner").css("left", 0)
			index = 0;
		}
		index++;
		//点击之后，参考值加一，图片动画移动
		$(".inner").stop().animate({
			left: -index * step
		}, 500)
		//显示最后一张图时，指示器指示第一个，其余情况指示器对应指示
		if (index == lists) {
			$(".indicators li").eq(0).addClass("current").siblings().removeClass("current")
		} else {
			$(".indicators li").eq(index).addClass("current").siblings().removeClass("current")
		}
	})
	//右侧点击
	$(".next").click(function() {
		// 每次位移的距离
		step = $(".inner li").width();
		//定义结束条件
		if (index == 0) {
			$(".inner").css("left", -lists * step)
			index = lists;
		}
		index--;
		$(".inner").stop().animate({
			left: -index * step
		}, 500)
		$(".indicators li").eq(index).addClass("current").siblings().removeClass("current")
	})
	//使用定时器，循环点击 左侧按钮
	var time = setInterval(function() {
		$(".prev").trigger('click')
	}, 2000)
	//鼠标进入 轮播范围停止轮播，离开之后重新开启轮播
	$(".swiper").hover(function() {
		clearInterval(time)
	}, function() {
		time = setInterval(function() {
			$(".prev").trigger('click')
		}, 2000)
	})
})