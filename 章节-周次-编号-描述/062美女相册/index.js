$(function(){
	$(".smallImgs img").click(function(){
		$(".bigImg img").attr("src",$(this).attr("src"))
	})
})