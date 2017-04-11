/**
 * Created by lenovo on 2017/4/8.
 */
$(()=>{
    $('#cq').on('mouseover',function () {
        $('#dq').css('display','block');
    });
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
    $('#classify-set1').on('mouseout',function () {
        $('#classify-set1').css('display','none');
    })
});


