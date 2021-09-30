$(document).on('mouseenter','.square',function(){
    document.getElementById('cursor').style.display='none'
    stopgame=true
    document.body.style.cursor='auto'
    setTimeout(function(){
        document.getElementById('marker').style.display='none'
        document.getElementById('game').style.display='none'
        result_s()
        document.getElementById('result').style.display='inline'
        document.getElementById('marker').innerHTML=''
        document.getElementById('bgm').pause()
        document.getElementById('bgm').currentTime = 0
    },phase_speed)
});