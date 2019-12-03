# 格莱商城

## 项目分析

- 移动端项目

## 线上项目比较

- 对比淘宝等电商移动端项目，使用全屏方式开发项目。

## 项目准备

- 项目目录创建
- 项目资源：图片、插件源码（jquery 2.X、reset.css）
- 项目初始化的css（reset css）

```css
/*  怪异盒子模型:标签设置的宽高就是标签总大小*/
* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
/*  怪异盒子模型:伪标签设置的宽高就是标签总大小*/
*:before,
*:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

/* 标签的去掉 margin 和 padding */
body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
form,
fieldset,
legend,
input,
button,
textarea,
p,
th,
td {
    margin: 0;
    padding: 0;
}

body {
    background: #fff;
    color: #555;
    font-size: 14px;
    font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
}

td,
th,
caption {
    font-size: 14px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-weight: normal;
    font-size: 100%;
}

address,
caption,
cite,
code,
dfn,
em,
strong,
th,
var {
    font-style: normal;
    font-weight: normal;
}

a {
    color: #555;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

/* 兼容 img的底部 白边 */
img {
    border: none;
    vertical-align: middle;
}

ol,
ul,
li {
    list-style: none;
}

input,
textarea,
select,
button {
    font: 14px "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
}

table {
    border-collapse: collapse;
}

html {
    overflow-y: scroll;
}


/* 清除浮动 */ 
.clearfix:before,
.clearfix:after {
    content: " ";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}

.clearfix {
    *zoom: 1;
}

/*公共类*/
.fl {
    float: left
}

.fr {
    float: right
}
.hide{
	display: none;
}
/* 全局精灵图设置 */
[class^=icon]{
	display: inline-block;
	background-image: url(../img/icon.png);
	background-repeat: no-repeat;
	background-size:375px 451px;
	/* 正常情况下,移动端的图片(背景图),图片都是实际使用的两倍大小  设备像素比*/
}
```



## 首页开发

### 视口声明

```html
<!-- 移动端视口声明：视口大小等于屏幕大小、禁止页面自动缩放、禁止用户手势缩放 -->
		<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
```

### 设备像素比

```html
1. 电脑屏幕的设备像素比一般为1:1 ，使用图片时正常使用即可。
2. 移动端（手机）屏幕的设备像素比一般是1:2，使用的图片要用2倍图：图片实际尺寸是实际使用尺寸的两倍。
3. 部分苹果手机的屏幕像素比为1:3
---------
设备箱像素比越大，屏幕精度越高。
```

### SEO

```html
1. 为了让搜索引擎（百度等），更好的搜索到页面，所做的优化称为SEO优化。
2. 常用方式： 设置 网页关键字，与网页描述
	<meta name="Keywords" content="格莱商城"/>
	<meta name="Description" content="我是格莱商城的唯一官网"/>
3. LOGO 位置除了图片显示LOGO ,也要添加文字（文字设置为隐藏即可）
					<a href="index.html">
						<span class="hide">格莱商城</span>
					</a>
```

### 顶部区域

- html：浮动布局，盒子模型调整

```html
		<div class="container">
			<!-- 头部 -->
			<div class="top clearfix">
				<!-- 顶部 logo -->
				<div class="top_logo fl">
					<a href="index.html" class="icon_logo">
						<span class="hide">格莱商城</span>
					</a>
				</div>
				<!-- 顶部 搜索 -->
				<div class="top_search fl">
					<span class="icon_search fl"></span>
					<input type="text fl">
				</div>
				<!-- 顶部 用户 -->
				<div class="top_user fr">
					<a href="user.html" class="icon_user"></a>
				</div>
			</div>
		</div>
```

- css：精灵图的使用、css函数calc()

```css
/* 顶部 */
.top{
	background-color: #39435b;
	padding: 10px 15px;
}
/* 顶部logo */
.top .top_logo{
	width: 120px;
	height: 35px;
}
.top .top_logo a{
	width: 100%;
	height: 35px;
}
/* 顶部搜索 */
.top .top_search{
	background-color: #e1e5ee;
	border-radius: 17px; /* 设置圆角 */
	width: calc(100% - 160px);  /* 使用css函数,计算结果. */
}
.top .top_search span{
	width: 20px;
	height: 35px;
	background-position: -130px 0; /* 精灵图位置调整 */
	margin:0 5px;
}
.top .top_search input{
	border: none;
	background-color: #e1e5ee;
	margin-top: 10px;
	width: calc(100% - 40px); /* 使用css函数,计算结果. */
}
/* 顶部用户 */
.top .top_user{
	width: 35px;
	height: 35px;
}
.top .top_user a{
	width: 100%;
	height: 35px;
	background-position: -336px 0; /* 精灵图位置调整 */
}
```

### 轮播区域swiper

<https://blog.csdn.net/sun_chen_93/article/details/103242569> 

- 使用swiper插件轮播
- 需要首先引入swiper源码

```html

```

- html代码

```html
<div class="banner">
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><a href=""><img src="img/banner.png" /></a></div>
            <div class="swiper-slide"><a href=""><img src="img/banner2.png" /></a></div>
            <div class="swiper-slide"><a href=""><img src="img/banner3.png" /></a></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <!-- 如果需要导航按钮 -->
        <!-- <div class="swiper-button-prev"></div> -->
        <!-- <div class="swiper-button-next"></div> -->
        <!-- 如果需要滚动条 -->
        <!-- <div class="swiper-scrollbar"></div> -->
    </div>
</div>
```

- css

```css
/* 轮播区域 */
.banner img{
	width: 100%;
}
```

- js

```javascript
// 调用swiper效果，并进行配置
var mySwiper = new Swiper('.swiper-container', {
    /*常用配置：开启轮播、无缝轮播、左右按钮控制、分液器指示、分页器控制、操作后再次自动轮播*/
    //自动轮播
    autoplay: 500,
    //无缝轮播
    loop: true,
    // 如果需要前进后退按钮
    //nextButton: '.swiper-button-next',
    //prevButton: '.swiper-button-prev',
    // 如果需要分页器
    pagination: '.swiper-pagination',
    //用户操作以后 依旧可以自动轮播
    disableOnInteraction: false,
    //分页器可以点击切换图片
    //paginationClickable: true
})
```

### 轮播区域animation

- 使用animation 实现简单动画
- html

```html
			<!-- 轮播区域 -->
			<div class="banner">
				<div class="wrap">
					<div class="slide"><a href=""><img src="img/banner.png" /></a></div>
					<div class="slide"><a href=""><img src="img/banner2.png" /></a></div>
					<div class="slide"><a href=""><img src="img/banner3.png" /></a></div>
				</div>
			</div>
```

- css

```css
/* 轮播区域 */
.banner{
	width: 100%;
    overflow: hidden;
}
.banner .wrap{
	width: 300%;
	display: flex;
	position: relative;
	/* 设置动画:动画名称 动画时间 动画速度 无限重复  */
	animation: banner 10s ease-out infinite;
}
.banner img{
	width: 100%;
}
/* 定义动画帧 */
@keyframes banner{
	0%,30%{
		left: 0;
	}
	35%,65%{
		left: -100%;
	}
	70%,100%{
		left: -200%;
	}
}
```

### 书籍

- 无只要知识点：浮动、弹性盒子、盒子模型
- html

```html
			<!-- 书籍 -->
			<div class="books clearfix">
				<h3 class="title">
					<span href="javascript:;" class="icon_book"></span>书籍资料
					<a href="javascript:;" class="more fr">更多></a>
				</h3>
				<div class="left">
					<div class="books_top">
						<a href=""><img src="img/bz01.png" alt=""></a>
					</div>
					<div class="books_bottom">
						<a href=""><img src="img/book1.png" alt=""></a>
						<a href=""><img src="img/book1.png" alt=""></a>
					</div>
				</div>
				<div class="right">
					<a href=""><img src="img/books.png" alt=""></a>
				</div>
			</div>
```

- css

```css
/* 书籍 */
.books{
	margin-top: 15px;
	background-color: #fff;
}
.books .title{
	line-height: 20px;
	padding: 5px 10px;
	background-color: #fff;
	font-weight: bold;
	border-bottom: 1px solid lightgray;
}
.books .title span{
	float: left;
	width: 20px;
	height: 20px;
	background-position: 3px -50px;
	vertical-align: text-bottom;
}
.books .title .more{
	color: #ff9900;
	font-size: 12px;
	font-weight: normal;
}
/* 左侧 */
.books .left{
	float: left;
	width: 53%;
	border-right: 1px lightgray solid;
}
/* 左侧上 */
.books .left .books_top{
	padding: 15px;
	border-bottom: 1px lightgray solid;
}
.books .left .books_top img{
	width: 100%;
}
/* 左侧下 */
.books .left .books_bottom{
	display: flex;
}
.books .left .books_bottom a{
	padding: 15px;
	flex: 1;
}
.books .left .books_bottom img{
	width: 100%;
}
/* 右侧 */
.books .right{
	float: left;
	padding:40px 15px 15px;
	width: 47%;
}
.books .right img{
	width: 100%;
}
```





