/**
 * Created by lenovo on 2017/4/8.
 */
$(()=>{
    $('#cq').on('mouseover',function () {
        $('#dq').css('display','block');
    });
    $('#cq').on('mouseout',function () {
        $('#dq').css('display','none');
    })
});

$(()=>{
    var timer=null;
    $('#dq').on('mouseover',function () {
        $('#dq').css('display','block');
        clearTimeout(timer);
    });
    $('#dq').on('mouseout',function () {
        $('#dq').css('display','none');
    })
});


$(()=>{
    $('#dog1').on('mouseover',function () {
        $('#dog-set1').css('display','block');
    });
    $('#dog1').on('mouseout',function () {
        $('#dog-set1').css('display','none');
    });
});

$(()=>{
    $('#dog1').on('mouseover',function () {
        $('#dog-set1').css('display','block');
    });
});

$(()=>{
    var timer=null;
    $('#dog-set1').on('mouseover',function () {
        $('#dog-set1').css('display','block');
        clearTimeout(timer);
    });
    $('#dog-set1').on('mouseout',function () {
        $('#dog-set1').css('display','none');
    })
});




$(()=>{
    $('#classify1').on('mouseover',function () {
        $('#classify-set1').css('display','block');
    });
});

$(()=>{
    var timer=null;
    $('#classify-set1').on('mouseover',function () {
        $('#classify-set1').css('display','block');
        clearTimeout(timer);
    });
    // $('#classify-set1').on('mouseout',function () {
    //     $('#classify-set1').css('display','none');
    // })
});

$(function() {
    var c = 0;
    function timer() {
        c++;
        if (c == 6) {
            c = 0;
        }
        $("#Banner .Banner1 li").eq(c).stop().fadeIn(800).siblings().fadeOut(400);
        $("#Banner .btn ul li").eq(c).stop().addClass("cur").siblings().removeClass("cur");
    }

    time = setInterval(timer, 5000);
    $("#Banner").hover(function () {
        clearInterval(time);
    }, function () {
        time = setInterval(timer, 5000);
    });
    $("#Banner .btn ul li").mouseenter(function () {
        var n = $(this).index();
        $("#Banner .Banner1 li").eq(n).stop().show().siblings().hide();
        $("#Banner .btn ul li").eq(n).stop().addClass("cur").siblings().removeClass("cur");
    });
    $(".her_top .her_title .her_menu li").click(function () {
        var n = $(this).index();
        $(".her_menu li").eq(n).addClass("current").siblings().removeClass("current");
        $(".her_top .pro_con").eq(n).show().siblings(".pro_con").hide();
    })
});


$(function(){
    $('.food-right-i input').mouseover(function () {
        $('.food-right-i input').removeClass('on');
        $('#box .jinkou,#box .remen').hide().eq($(this).index()).show();
        $(this).addClass('on');
    });
});
$(function(){
    $('.food-right-i input').click(function () {
        $('.food-right-i input').removeClass('on');
        $('#box1 .jinkou,#box1 .remen').hide().eq($(this).index()).show();
        $(this).addClass('on');
    });
});
$(function(){
    $('.food-right-i input').mouseout(function () {
        $('.food-right-i input').removeClass('on');
        $('#box2 .jinkou,#box2 .remen').hide().eq($(this).index()).show();
        $(this).addClass('on');
    });
});
