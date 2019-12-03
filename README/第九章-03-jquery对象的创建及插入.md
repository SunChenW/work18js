# 第九章-03

## 本章目标

1.掌握jquyer对象创建方式

2.掌握jquery对象插入方式

3.掌握jquery对象删除方式

![](js09\文档处理.PNG)

## 课程引入

> 1. 选择器？
> 2. 筛选的方式？
> 3. 遍历的方式？
> 4. jquery对象的方法get()/index()/eq()的作用都是什么？

## 授课内容

### 创建jquery对象

1、使用`$()`方法，传入符合`html`语法的标签结构，即可创建对应的jquery对象。

```html
<body>
		<ul class="father">
			<li class="son">000</li>
		</ul>
		<script src="jquery-1.11.0.js"></script>
		<script>
			$(function(){
				//创建一个空的jquery对象
				var newli1 = $("<li></li>");
				//创建一个有内容的jquery对象
				var newli2 = $('<li>111</li>') //防止引号冲突，将外层引号替换为单引号
			})
		</script>
	</body>
```

### 将jquery对象插入、复制、删除

1.  将jquery对象，作为子元素插入。`append()`  `appenTo()` `prepend()` `prependTo()`

```javascript
//将newli1 作为.father的子元素插入--追加在末尾
$(".father").append(newli1)
//将 newli2 作为 .father 的子元素插入---追加在末尾
newli2.appendTo(".father")


//将newli1 作为.father的子元素插入--在首位添加
$(".father").prepend(newli1)
//将 newli2 作为 .father 的子元素插入---在首位添加
newli2.prependTo(".father")

```
2.  将jquery对象，作为兄弟插入 `before()` `insertBefore()`  `after()` `insertAfter()`

```javascript
//将新创建的jqueyr对象，作为兄弟插入 before() insertBefore()  after() insertAfter()
newli1.insertBefore(".son")
newli2.insertAfter(".son")

//$(".son").after(newli1)
//$(".son").before(newli2)
```

3. 将jquery对象，做为父元素插入 `wrap()`

  ```javascript
  //创建一个div标签，作为 .father 的父元素
  
  $(".father").wrap("<div></div>")
  
  ```

4. 替换jquery对象 `replaceWith()` `replaceAll()`			
```html
<body>
    <div>div</div>
    <div>div</div>
    <script src="jquery-1.11.0.js"></script>
    <script>
        $(function(){
            //将div替换为 p标签
            //$("div").replaceWith("<p>p</p>")
            $("<p>p</p>").replaceAll("div")
        })
    </script>
</body>
```

5. 复制（克隆一个jquery对象）

```html
<body>
    <ul>
        <li class="li">li</li>
    </ul>
    <script src="jquery-1.11.0.js"></script>
    <script>
        $(function(){
            $("li").click(function(){
                alert("被点击了")
            })
            //克隆一个div标签  克隆的标签默认是不具有原标签的事件，需要传入一个参数 true才是完全克隆
            $("li").eq(0).clone().appendTo("ul")
            $("li").eq(0).clone(true).appendTo("ul")
        })
    </script>
</body>
```

6. 删除jquery对象及删空jquery对象 remove() empty()

```javascript
//删空jquery对象的内容
$("li").empty()
//删除jquery对象
$("li").remove()
```

### 实战演练：

1. 点击提交 获取用户输入的数据
2. 使用用户输入的数据，拼接表单标签
3. 将拼接好的表单标签追加到页面中
4. 点击删除时，将删除标签的父标签删除

```javascript
$("#btn").click(function(){
    //用户姓名，电话，性别，邮箱
    var name = $("#name").val();
    var phone = $("#phone").val();
    var sex = $("[name=group]:checked").val();
    var address = $("#address").val();
    //创建新的表格内容，添加到表格中
    $("<tr>"+
      "<td>"+name+"</td>"+
      "<td>"+phone+"</td>"+
      "<td>"+sex+"</td>"+
      "<td>"+address+"</td>"+
      '<td><input type="button" value="删除" /></td>'+
      "</tr>").appendTo("tbody")
    //点击删除按钮：删除父标签
    $(".remove").click(function(){
        $(this).parents("tr").remove();
    })
})
```

