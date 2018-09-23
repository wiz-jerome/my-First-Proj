function init() {
    console.log('我代码可能写的不咋地，但是我女神美呀！！！');
    picShow();
    bindEvent();
}
var $img = $('img');
var len = $img.length;
var  curDisplay = 0;
var nowIndex = 0;
var timer;
var flag = true;
var wrap = $('.wrapper');
// 呈现图片立体展示
function picShow() {
    // 取最中间的图片的index；
    var mLen = Math.floor(len / 2);

    // 定义左右两边的index；
    var leftNum, rightNum;
    for(var i = 0; i < mLen; i ++) {
        // 左边的index相较于中间为负的，左边第一张为-1，左边第二张为-2；
        leftNum = curDisplay - i - 1;
        // eq为倒着取地址
        $img.eq(leftNum).css({
            transform: 'translateX(' + (-100 * (i + 1)) + 'px) translateZ(' + (200 - i * 100) + 'px) rotateY(30deg)'
        })
        // 左边的index相较于中间为负的，左边第一张为-1，左边第二张为-2；
        rightNum = curDisplay + i + 1;
        if (rightNum > len - 1) {
            rightNum -= len;
        }
        // eq为倒着取地址
        $img.eq(rightNum).css({
            transform: 'translateX(' + (100 * (i + 1)) + 'px) translateZ(' + (200 - i * 100) + 'px) rotateY(-30deg)'
        })
    }
    $img.removeClass('on');
    $img.eq(curDisplay).css({
        transform: 'translateZ(300px)'
    }).addClass('on');
    wrap.on('transitionend', function(){
        flag = true;
    })
}
// 实现点击事件
function bindEvent() {
    $img.on('click', function(e){
        // 如果移动时并且点击的这张不是第一张才可点击
        if (flag && !$(this).hasClass('on')){
            flag = false;
            nowIndex = $(this).index();
            move(nowIndex)
        }
    }).hover(function(){
        clearInterval(timer)
    }, function(){
        timer = setInterval(function(){
            play()
        },1500)
    })
    timer = setInterval(function(){
        play()
    },1500)
}
function play(){
    if (nowIndex == len-1) {
        nowIndex = 0;
    } else {
        nowIndex ++;
    }
    move(nowIndex)
}
function move(index){
    curDisplay = index;
    picShow();
}
init();