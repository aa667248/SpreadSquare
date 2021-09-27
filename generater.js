var i = 0;
function boxgenerate(){
    i++
    html_text = '<div class="box" id="box'+i+'"></div>'
    document.getElementById('marker').insertAdjacentHTML('afterend',html_text)
}

function spred(contentname,times){
    size = 50 + times*1.5
    var position_top = document.getElementById(contentname).getBoundingClientRect().top - 0.75
    var position_left = document.getElementById(contentname).getBoundingClientRect().left - 0.75
    document.getElementById(contentname).style.width = size+'px'
    document.getElementById(contentname).style.height = size+'px'
    document.getElementById(contentname).style.top = position_top+'px'
    document.getElementById(contentname).style.left = position_left+'px'
}

function game(){
    var id = setInterval(function(){
        if(stopgame==true){clearInterval(id)}else{
        phase++
        document.getElementById('phase_text').innerHTML = 'phase'+phase;
        var contents = []
        for(k=0;k<=phase/5;k++){
            boxgenerate()
            contentname = 'box'+i
            rand_top = Math.random()*100 + '%'
            rand_left = Math.random()*100 + '%'
            document.getElementById(contentname).style.top = rand_top;
            document.getElementById(contentname).style.left = rand_left;

            contents.push('box'+i)
        }
        setTimeout(function(){
            for(l=0;l<contents.length;l++){
                document.getElementById(contents[l]).style.pointerEvents ='all';
            }
        },300)
        time = 0
        console.log(time)
        var id2 = setInterval(function(){
            time++
            for(l=0;l<contents.length;l++){
                spred(contents[l],time)
            }
            
            if(time>=400){
                clearInterval(id2)
                for(l=0;l<contents.length;l++){
                    document.getElementById(contents[l]).remove()
                }
            }
        },10)}
        if(stopgame==true){clearInterval(id)}
    },5000)
}
