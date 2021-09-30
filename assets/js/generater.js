function boxgen(){
    i++
    htmltext = '<div class="box square" id="box'+i+'"></div>'
    document.getElementById('marker').insertAdjacentHTML('afterbegin',htmltext)
}
function spred(contentname,times){
    var size = 50 + times*inc_px
    var position_top = document.getElementById(contentname).getBoundingClientRect().top - (inc_px/2)
    var position_left = document.getElementById(contentname).getBoundingClientRect().left - (inc_px/2)
    document.getElementById(contentname).style.width = size+'px'
    document.getElementById(contentname).style.height = size+'px'
    document.getElementById(contentname).style.top = position_top+'px'
    document.getElementById(contentname).style.left = position_left+'px'
}
function start_game(){
    var id = setInterval(function(){
        if(stopgame==true){clearInterval(id)}else{
        document.getElementById('marker').innerHTML='';
        phase++
        document.getElementById('phase_text').innerHTML='phase:'+phase
        var tmp=[]
        if(phase/increase_speed>=increase_limit){count=increase_limit}else{count=phase/increase_speed}
        for(k=0;k<count;k++){
            boxgen()
            var tmpname = 'box'+i
            rand_top = Math.random()*100 + '%'
            rand_left = Math.random()*100 + '%'
            document.getElementById(tmpname).style.top = rand_top;
            document.getElementById(tmpname).style.left = rand_left;
            tmp.push(tmpname)
        }
        var t=0
        var id2 = setInterval(function(){
            t++
            for(l=0;l<tmp.length;l++){
                spred(tmp[l],t)
            }
            if(t*inc_px+50>=size_limit){
                clearInterval(id2)
            }
            if(stopgame==true){clearInterval(id2)}
        },10)}
        if(stopgame==true){clearInterval(id)}else{scoref()}
    },phase_speed)
}
