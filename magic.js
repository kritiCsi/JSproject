var score=0;
let sc= document.getElementById('text');
function main()
{
	var x=Math.floor(Math.random()*6+1);
	// document.getElementById('dice1').style.display='block';
	document.getElementById("dice1").src='dice-'+x+'.png';
	score=score+x;
	sc.innerHTML=score;
}

var count=20;
var counter=setInterval(timer,1000);
function timer()
{
	count=count-1;
	if(count<=0)
	{
		clearInterval(counter);
		return;
	}
document.getElementById("timer").innerHTML=count+"secs";
}


