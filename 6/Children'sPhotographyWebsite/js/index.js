
$(function(){

	$('.parent_list').find('ul .one').fadeIn('slow').siblings().fadeOut('slow');

	$('.parent_list ol li').on('click',function(){
		$(this).addClass('active').siblings().removeClass('active');
		$(this).parents('.parent_list').find('ul li').eq($(this).index()).fadeIn('slow').siblings().fadeOut('slow');
	})
});


$(function(){

	$('.mother_list').find('ul .one').fadeIn('slow').siblings().fadeOut('slow');

	$('.mother_list ol li').on('click',function(){
		$(this).addClass('active').siblings().removeClass('active');
		$(this).parents('.mother_list').find('ul li').eq($(this).index()).fadeIn('slow').siblings().fadeOut('slow');
	})
});