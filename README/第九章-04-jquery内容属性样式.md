# 第九章-04

## 本章目标

1.掌握jquery内容与值操作操作

2.掌握jquery属性操作

3.掌握jquery样式操作

![](js09\内容样式属性.PNG)

## 课程引入

> 1. jquery的创建方式
> 2. jquery对象作为子元素插入方法？作为兄弟元素插入方法？
> 3. jquery克隆的方法及注意事项？
> 4. jquery对象删除及删空的方法？

## 授课内容

### 内容与值

1. jquery中与内容和值相关的方法有三个`html()` `text()` `val()`

```html
<body>
    <div class="father">
        父标签文本
        <div>子标签1</div>
        <div>子标签2</div>
    </div>
    <script src="jquery-1.11.0.js"></script>
    <script>
        $(function(){
            var father = $(".father");
            var son1 = $(".father div:eq(0)");
            var son2 = $(".father div:eq(1)");
            /*html()、text() 都是用来获取及设置标签的内容。html()课识别html结构，text()只识别普通文本。*/

            //获取标签内容
            console.log(father.html())
            console.log(father.text())

            //设置标签内容
            son1.html("<span>一个span</span>")
            son2.text("<span>一个span</span>")
        })
    </script>
</body>
```

2. 表单标签（input，select，textarea），使用val() 设置及获取值。

```html
<body>
    <input type="button" value="获取"/>
    <input type="button" value="设置"/>
    <hr />
    <input type="text" value="初始值"/>
    <input type="text" value="初始值"/>

    <script src="jquery-1.11.0.js"></script>
    <script>
        $(function(){
            //获取标签
            var btn1 = $("[type=button]").eq(0)
            var btn2 = $("[type=button]").eq(1)
            var input1 = $("[type=text]").eq(0)
            var input2 = $("[type=text]").eq(1)

            //按钮1点击获取两个输入框的值，并输出
            btn1.click(function(){
                console.log(input1.val())
                console.log(input2.val())
            })
            //按钮2点击，给两个输入框设置任意值
            btn2.click(function(){
                input1.val("使用jquery设置的值");
                input2.val("使用jquery设置的值")
            })
        })
    </script>
</body>
```

### 属性操作

#### 一般属性操作

1. 标签的一般属性值得获取、设置使用`attr()`,删除使用`removeAttr()`

> 062 美女相册 ：`属性操作`、`事件操作`



#### 特殊属性操作

1. 标签中有些属性是特殊的，属性名与属性值一样（required=required、checked=checked...）,这样的特殊属性使用`prop()`及`removeProp()`

#### class专用操作

1. class属性及其常用，jquery做了特殊处理，提供了一套专用的方法。`addClass()` `removeClass()` `toggleClass()`。 `hasClass() `判断是否含有指定class值

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title></title>
		<style type="text/css">
			.a{
				color: red;
			}
			.b{
				font-size: 32px;
			}
			.c{
				border: 1px red solid;
			}
		</style>
	</head>
	<body>
		<button>添加.c</button>
		<button>删除.b</button>
		<button>切换.a</button>
		<hr />
		<div class="a b">通过class控制标签样式</div>
		<script src="jquery-1.11.0.js"></script>
		<script>
			$(function(){
				//获取标签
				var btn1 = $("button").eq(0)
				var btn2 = $("button").eq(1)
				var btn3 = $("button").eq(2)
				var div = $("div")
				
				//addClass() 添加类名
				btn1.click(function(){
					div.addClass("c")
				})
				//removeClass() 删除类名
				btn2.click(function(){
					div.removeClass("b")
				})
				//toggleClass() 切换类名（没有加上，有删除）
				btn3.click(function(){
					div.toggleClass("a")
				})
				
			})
		</script>
	</body>
</html>

```

### 样式操作

1. jquery中使用css()方法，获取及设置标签样式。与`div.style.*`不同的是此方法可以获取标签的有效样式，但是设置时还是内联样式。

```javascript
	$(function(){
        console.log($("div").css("color"))
        console.log($("div").css("font-size"))
        console.log($("div").css("border"))
        //设置单个样式
        $("div").css("line-height","200px")
        //设置多个样式
        $("div").css({
            "width":"200px",
            "height":"200px",
            "border-radius":"50%",
            "text-align":"center"
        })
    })
```

### 尺寸及位置

1. jquery中还有几个方法，用来获取窗口及标签的最终（计算之后）的大小、位置、滚动距离。

![](G:\work18js\js09\尺寸及位置.PNG)

2. 标签尺寸：内容大小、内容+padding、内容+padding+border
3. outerWidth(true) :内容+padding+border +margin
4. 标签大小设置时有区别，窗口大小不可设置

```javascript
$(function(){
    //标签大小获取
    console.log($("div").width())
    console.log($("div").innerWidth())
    console.log($("div").outerWidth())
    console.log($("div").outerWidth(true))

    //矿口大小获取
    console.log($(window).width())
    console.log($(window).innerWidth())
    console.log($(window).outerWidth())

})
```

## 实战演练

遮罩层061mask：`jquery选择器`、`jquery对象 创建、插入、删除`、`jquery对象属性操作`、`jquery对象样式操作`、`jquery对象内容操作`、`jquery对象事件操作`

