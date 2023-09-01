var clutter="";
function makebubble(){
for(var i=1;i<=160;i++){
	var num=Math.floor(Math.random()*10);
	clutter +=`<div id="bubble">${num}</div>`;
}
}
makebubble();
var btm=document.getElementById('panelBottom');
btm.innerHTML=clutter;

var timer=60;
function runtime(){
   var timrerstart=	setInterval(function(){
		if(timer>0){
       timer--;
   }else{
   	document.getElementById('panelBottom').innerHTML=`<h1>GAME OVER</h1><h2>Your Score is</h2><h2>${score}</h2><button id="gamebtn">try again</button>`;
   	clearInterval(timrerstart);
   }
   document.getElementById('boxtimer').innerHTML=timer;
	},1000)
}
runtime();
var hitnum=0;
function hitload() {
	 hitnum=Math.floor(Math.random()*10);
	document.getElementById('hit').innerHTML=hitnum;
}
hitload();


var score=0;
function increasescore(){
	score += 10;
	document.getElementById('score').innerHTML=score;
}


document.getElementById('panelBottom').addEventListener('click',function(dets){
	var clickednum=Number(dets.target.textContent);
	if(clickednum === hitnum){
		increasescore();
		makebubble();
		hitload();
	}
});
document.getElementById('gamebtn').addEventListener('click',function(){
	makebubble();
});









