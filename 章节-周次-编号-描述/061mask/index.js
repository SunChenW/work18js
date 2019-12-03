$(function(){
	//点击按钮
	$("#btn").click(function(){
		//创建jquery对象
		var mask = $("<div></div>"); //遮罩层
		var container = $("<div></div>"); //遮罩中的容器
		var title = $("<h1></h1>"); //遮罩中的标题
		var content = $("<p></p>"); //遮罩中的内容
		
		//将jquey对象插入页面
		mask.appendTo("body")
		container.appendTo(mask)
		title.appendTo(container)
		content.appendTo(container)
		
		//遮罩层添加内容、样式及事件
		mask
		.addClass("mask") //添加class
		.css({				//设置样式
			"position":"fixed",
			"left":"0",
			"top":"0",
			"width":"100%",
			"height":"100%",
			"background-color":"rgba(0,0,0,0.7)"
		})
		.click(function(){  //添加点击事件
			$(this).remove()
		})
		
		//container 添加内容、样式及事件
		container
		.css({
			"width": "50%",
			"position": "absolute",
			"left": "50%",
			"top": "50%",
			"transform": "translateX(-50%) translateY(-50%)",
			"padding":"10px",
			"min-width":"200px",
			"background-color":"white"
		})
		.click(function(){
			return false;
		})
		
		//title 添加内容、样式及事件
		title
		.css({
			"border-bottom":"1px dashed gray"
		})
		.html("Hello jQuery")
		
		//content 添加内容、样式及事件
		content
		.css({
			"text-indent": "2em",
			"line-height":"1.5em"
		})
		.text("jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.")
	})
})