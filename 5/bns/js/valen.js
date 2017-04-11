
function rnd(m,n){
	return parseInt(Math.random()*(n-m)+m);
}

function flower(){
	$('<img src="img/v_flow'+rnd(1,4)+'.png" alt="" />')
	.appendTo('.container')
	.css({
		position: 'absolute',
		top: rnd(-10,10)+'%',
		left: rnd(10,80)+'%',
		animation: 'fadeDown'+rnd(1,3)+' 7s linear both'
	});	
}

$(function(){
	let timer=null;

	for(let i=0; i<5; i++){
		flower();
	}

	timer=setInterval(function(){
		$('img:odd').remove();
		for(let i=0; i<5; i++){
			flower();
		}
	},4000)

})