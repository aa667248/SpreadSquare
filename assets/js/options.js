function open_setting(vl){
    if(vl==false){
        document.getElementById('setting_body').style.display='none';
        document.getElementById('bgm').pause()
        document.getElementById('bgm').currentTime = 0
    }
    if(vl==true){
        document.getElementById('setting_body').style.display='inline';
    }
}

function open_rule(vl){
    if(vl==false){
        document.getElementById('rule_body').style.display='none';
    }
    if(vl==true){
        document.getElementById('rule_body').style.display='inline';
    }
}


function change_volume(){
    document.getElementById('output1').value=document.getElementById('volume').value
    document.getElementById('bgm').volume=document.getElementById('volume').value/100
    document.getElementById('bgm').play()
}


function result_s(){
    document.getElementById('result_phase').innerHTML='phase:'+phase
    document.getElementById('result_score').innerHTML='score: '+Math.floor(score)
    document.getElementById('td1').innerHTML='　'+document.getElementById('size_limit').value+' %'
    document.getElementById('td2').innerHTML='　'+document.getElementById('phase_speed').value+' second'
    document.getElementById('td3').innerHTML='　'+document.getElementById('increase_speed').value+' phase'
    document.getElementById('td4').innerHTML='　'+document.getElementById('increase_limit').value+' pieces'
    document.getElementById('td5').innerHTML='　'+document.getElementById('invincible_time').value+'second'
}

function home(){
    document.getElementById('game').style.display='none'
    document.getElementById('result').style.display='none'
    document.getElementById('menu').style.display='inline'
}

function scoref(){
        var score_x1 = x
        var score_y1 = y
        var score1 = Math.sqrt(Math.pow(score_x1-score_x2,2)+Math.pow(score_y1-score_y2,2))*phase/100
        score = score+score1
        score_x2 = score_x1
        score_y2 = score_y1
        console.log(score)
}
