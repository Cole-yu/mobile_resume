$(document).ready(function(){
    //当dom树构建完成时，加载初始动画效果，同时渲染页面
    setTimeout(hiding, 1000);      //1000毫秒后执行隐藏加载动画的函数
});

function hiding() {                //隐藏加载动画，显示网页具体内容
    $('body').addClass('loaded');
    $('#loader-wrapper .load_title').remove();  //从dom中移除元素；但仍保留元素本身在jquery对象中，不保留元素的数据和方法，
}