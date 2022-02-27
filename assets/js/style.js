$(function(){
    $(window).on('load',Resize);
    $(window).resize(Resize);
});

function Resize(e){
    screen_width = document.documentElement.clientWidth
    screen_height = document.documentElement.clientHeight
    size_rate = screen_width/1440
    $('.space').css({height: 50*size_rate+'px'});
    $('#option').css({
        width: 200*size_rate+'px',
        height: 200*size_rate+'px'
    });
    $('#option2').css({
        width: 200*size_rate+'px',
        height: 200*size_rate+'px'
    });
    $('.options').css({
        width: 190*size_rate+'px',
        height: 50*size_rate+'px',
        border: 'solid '+5*size_rate+'px white',
        fontSize: 48*size_rate+'px'
    });
    $('.space2').css({height: 10*size_rate+'px'});
    $('#setting_body').css({
        width: 700*size_rate+'px',
        height: 700*size_rate+'px',
        border: 'solid '+5*size_rate+'px white',
        fontSize: 30*size_rate+'px'
    })
    $('.setting_jp').css({fontSize: 20*size_rate+'px'})
    $('#rule_body').css({
        width: 700*size_rate+'px',
        height: 700*size_rate+'px',
        border: 'solid '+5*size_rate+'px white',
        fontSize: 30*size_rate+'px'
    })
    $('#rule_body h2').css({fontSize: 25*size_rate+'px'})
    $('#rule_body p').css({fontSize: 20*size_rate+'px'})
}