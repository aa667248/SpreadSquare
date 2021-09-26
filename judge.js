$(document).on('mouseenter','div',function(){
    if(stopgame==false){
	document.getElementById('cursor').style.background = 'red';
    document.getElementById('score').style.display = 'inline';
    stopgame=true
    phase=phase-1
    document.getElementById('marker').insertAdjacentHTML('afterbegin','<input type="button" onclick="restart()">')
    }
});