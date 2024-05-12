var buyf = 0;
alert
var cat = prompt ('введите имя');
alert('Hello,' + cat)
function buy()
{
	if(buyf==0)
	{
    document.getElementById('btn').style.background = '#c92a9c';
	document.getElementById('btn').innerHTML = 'В корзине';
	document.getElementById('btn').style.color = '#d4c8e8';
	buyf=1;  // ?
	}
	else{
		document.getElementById('btn').style.background = 'silver';
	document.getElementById('btn').innerHTML = 'Приобрести';
	document.getElementById('btn').style.color = 'black';
	buyf=0;       // ?

	}
	
}


