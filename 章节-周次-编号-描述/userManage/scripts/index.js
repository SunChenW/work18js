$(function () {
    $("#btn").click(function () {
        var name = $('#name').val();
        var phone = $('#phone').val();
        //判断单选框是否选中
        var sex = $("#sex").is(":checked") ? "男" : "女";
        var address = $("#address").val();
        //往表格行里面追加一个新的表格行
        $("table tbody").append("<tr><td>" + name + "</td><td>" + phone + "</td><td>" + sex + "</td><td>" + address +
            "</td><td><input type=\"button\" onclick=\"$(this).parent().parent().remove()\" value=\"删除\" /></td></tr>");
        return false;
    })
    //表格每行里面删除按钮点击后删除当前表格行
    $("table tbody tr input[type=button]").click(function () {
        //按钮的父元素（td）的父元素（tr）删除
        $(this).parent().parent().remove();
    })
})