//将全宽网页变为750px大小的手机端小页面，将页面缩放
(function(doc, win) {
    var docEl = doc.documentElement,
        isIOS = navigator.userAgent.match(/iphone|ipod|ipad/gi),
        dpr = isIOS ? Math.min(win.devicePixelRatio, 3) : 1,
        dpr = window.top === window.self ? dpr : 1, //被iframe引用时，禁止缩放
        dpr = 1, // 首页引用IFRAME，强制为1
        scale = 1 / dpr,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    docEl.dataset.dpr = win.devicePixelRatio;
    if (navigator.userAgent.match(/iphone/gi) && screen.width == 375 && win.devicePixelRatio == 2) {
        docEl.classList.add('iphone6')
    }
    if (navigator.userAgent.match(/iphone/gi) && screen.width == 414 && win.devicePixelRatio == 3) {
        docEl.classList.add('iphone6p')
    }
    //添加一条元数据标签
    var metaEl = doc.createElement('meta');
    metaEl.name = 'viewport';
    metaEl.content = 'initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale;
    docEl.firstElementChild.appendChild(metaEl);
    var recalc = function() {
        var width = docEl.clientWidth;
        if (width / dpr > 750) {
            width = 750 * dpr;
        }
        docEl.style.fontSize = 100 * (width / 750) + 'px';
    };
    recalc()
    if (!doc.addEventListener) return;
    // win.addEventListener(resizeEvt, recalc, false);
})(document, window);

//菜单按钮的显示与关闭
var arr=document.getElementsByClassName('menu_list')[0];
document.getElementsByClassName('home')[0].addEventListener("click",function(){    
    if(arr.classList.contains('hide')){
        arr.classList.remove('hide');
    }   
    else{
        arr.classList.add('hide');
    }
},true);

// window.onscroll=function(){
//     console.log(window.pageYOffset);
// }

// //获取鼠标点击的标签的id,跳到指定的页面坐标
// var jumps=document.getElementsByTagName('li');
// for(var i=0,j=jumps.length;i<j;i++){
//     jumps[i].addEventListener("click",btn_scroll,true);
// }
// function btn_scroll(e){
//     arr.classList.add('hide');
//     console.log(this.querySelector("span").id);
//     var t_id= this.querySelector("span").id;
//     switch(t_id){
//         case 0:window.scrollTo(0,0);break;
//         case 1:window.scrollTo(0,30);break;
//         case 2:window.scrollTo(0,60);break;
//         case 3:window.scrollTo(0,90);break;
//         case 4:window.scrollTo(0,120);break;
//         default:window.scrollTo(0,180);break;
//     }
// }

var jumps=document.querySelectorAll('li');
for(var i=0,j=jumps.length;i<j;i++){
    jumps[i].addEventListener("click",btn_scroll,true);
}
function btn_scroll(){
    arr.classList.add('hide');
}


//当向下滑动时，隐藏菜单栏，当回到顶部时，显示主菜单
window.onscroll = function () {
    // console.log(window.pageXOffset + " " + window.pageYOffset);
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    var menu = document.getElementsByClassName("menu")[0];
    if (t >= 60) {
        menu.style.display = "none";        
    } else {
        menu.style.display = "inline";
    }
}