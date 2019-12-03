# 第九章

## 本章目标

1. 了解jquery入口函数
2. 掌握jquery事件绑定方式
3. 掌握jquery事件解绑方式
4. 掌握jquery事件手动触发（模拟事件）
5. 掌握事件传播、事件冒泡、事件默认行为

![](\work18js\js09\事件.PNG)

## 课程引入

1. jquery中内容设置的方法是？
2. jquery中属性设置的方法是？
3. jquery中样式设置的方法是？
4. jquery中标签总大小的方法是？

## 授课内容

### jquery入口函数

1. jquery的入口函数`$(function(){})`,是`$(document).ready(function(){})`的简化写法。这里是给document添加一个加载事件ready，此事件会在页面DOM结构加载完成时触发（不包含图片等非文字资源）。
2. 在写原生javascript时，一般会使用`window.onload = function(){}`,这是给window添加了一个加载事件load，此事件会在页面全部加载完成时触发（图片等非文字资源也已经加载）。

|            | 入口写法                                              | 事件对象 | 触发时机                            | 添加次数           |
| ---------- | ----------------------------------------------------- | -------- | ----------------------------------- | ------------------ |
| javascript | `window.onload = function(){}`                        | window   | 页面全部加载，包含图片等非文字资源  | 一个页面只有一个   |
| jquery     | `$(function(){})` 或`$(document).ready(function(){})` | document | 页面DOM加载，不包含图片等非文字资源 | 一个页面可以有多个 |

### 事件绑定方式

1. jquery中对常用事件都封装了方法，只要调用事件对应方法即可。
2. jqueyr还提供了on()、bind()、one()、hover()更加灵活的事件绑定方式。

```javascript
/*jquery事件绑定方式
				1.常用事件全部封装了方法,直接调用即可 click() mouseenter()
				2. on() bind() one() hover()*/
$("li").click(function(){
    console.log("一般方式添加的点击事件")
})
//bind
$("li").bind("click",function(){
    console.log("bind方式添加的点击事件")
})
//on
$("li").on("click",function(){ //这个是推荐使用的
    console.log("on方式添加的点击事件")
})
//one 绑定事件，一旦触发就会解绑
$("li").one("click",function(){ //这个是推荐使用的
    console.log("one方式添加的点击事件")
})
//hover 很特殊，用来简化 mouseenter mouseleave
$("li").mouseenter()
$("li").mouseleave()
//hover中传入两个函数，前边代表进入的效果，后边代表出去的效果
$("li").hover(function(){
    $(this).css("width","200px")
},function(){
    $(this).css("width","50px")
})
```



### 事件解绑方式

1. 去掉事件绑定有两个方法 off() on（） 、unbind( ) bind（）,推荐使用unbind()。

```javascript
//解绑事件 off() unbind()
$("button").eq(0)
    .click(function(){
    //解绑指定的事件
    $("li").off("click")
})
//解绑事件 off() unbind()
$("button").eq(1)
    .click(function(){
    //解绑所有事件
    $("li").off()
})
```

### 模拟模拟

1. 使用代码直接触发标签绑定的事件 trigger()

### 事件传播-事件对象

1. 了解什么是事件冒泡
2. 阻止事件冒泡

```javascript
//事件传播：子标签发生事件，(触发自己的事件处理函数)-----事件对被传递给父标签，(触发父标签的处理函数)---...----window
				//冒泡传播
				
				//事件对象
				//如果事件是传播出去的， 所有的事件处理函数，接收到的（数据{}）事件对象，是同一个。都是最开始的事件对象。保存的信息，是事件源的信息
```

### 事件代理

```javascript
//子标签太多、新增子标签。 都会把子标签的事件处理的逻辑，直接加给父标签。=====事件代理
				//事件代理的原理（技术点）：事件传播、事件对象
				//点击按钮添加li
				$("button").click(function(){
					$("<li>1</li>").appendTo("ul")
				})
				//ul 代理 li的事件处理
				$("ul").click(function(e){
				console.log("运行了ul的点击事件处理函数")
					var target = e.target; //获取事件源标签 js
					var name = target.nodeName // 获取标签名称
					if(name == "LI"){ //判断点击的是否为li ，是就执行操作 ，不是什么都不做
						$(target).css({
							width: 100,
							height:100
						})
					}
				})
```

### 事件默认行为

1. 了解什么是事件默认行为
2. 阻止事件默认行为

## 实战演练

