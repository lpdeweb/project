// 显示内容切换
function tab(obj,iNow){
	$(obj+' ol li').eq(iNow).addClass('active').siblings().removeClass('active');
	$(obj+' ul').css({'marginLeft':-$(obj).width()*iNow});
}
// 添加计时器轮播
function timer(obj,iNow){
	clearInterval($(obj).attr('timer'));
	$(obj).attr({
		'timer':setInterval(function(){
			iNow++;
			if(iNow>$(obj+' ol li:last').index()){
				iNow=0;
			};
			tab(obj,iNow)
		},4000)
	})
}
// 轮播图运转
function turn(obj){

	let iNow=0;

	$(obj+' ol li').mouseover(function(){
		iNow=$(this).index();
		tab(obj,iNow);
	});

	timer(obj,iNow);

	$(obj).hover(function(){
		clearInterval($(obj).attr('timer'));
	},function(){
		timer(obj,iNow);
	})
}


$(function(){
	// guide左侧大型轮播
	turn('.gd-left');
	// guide右侧中型轮播
	turn('.tiny1');
	// guide右下小型轮播
	turn('.tiny2');
	turn('.tiny3');

	// guide时装部分
	$('.gd-clos ol li').mouseover(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.gd-clos ul li').eq($(this).index()).addClass('active').siblings().removeClass('active');
	})

	// refer手风琴效果
	$('.rf-pic').click(function(){
		let iNow=$(this).parent().index();
		$(this).parent().addClass('active').siblings().removeClass('active');
		$('.rf-tab').each(function(i,e){
			if(i<iNow){
				$(e).css({left:75*i-425});
			}else{
				$(e).css({left:75*i});
			}
		})
	})
})
