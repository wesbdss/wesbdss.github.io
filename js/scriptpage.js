$('#statusbot').text("Status Chatbot: Offline");
var audio = document.getElementById('song');

$('#botao2').click(function () {
    if ($("div.row.chao").is(":hidden")) {
        $("div.row.chao").toggle("fast");
        $('#inicio').hide();
    } else {
        $("div.row.chao").hide();
    }

    if($("div.row.chao").is(":hidden") && $("div.row.subchao").is(":hidden")){
        $('#inicio').toggle();
    }

});

$('#botao1').click(function () {
    if ($("div.row.subchao").is(":hidden")) {
        $("div.row.subchao").toggle("fast");
        $('#inicio').hide();
    } else {
        $("div.row.subchao").hide();
    }
    if($("div.row.chao").is(":hidden") && $("div.row.subchao").is(":hidden")){
        $('#inicio').toggle();
    }
});

$("#botao3").click(function () {
    if ($("#pap").is(":hidden")) {
        $("#pap").toggle("fast");
    } else {
        $("#pap").hide();
    }
});
$('#sendbot').click(async function () {
    await talk($('#text').val());
    $('#text').val('');
});
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
$('#text').on('keypress', function (e) {
    var code = e.keyCode || e.which;
    if (code == 13) {
        talk($('#text').val());
        $('#text').val('');
    }
})
async function talk(texto) {
    var x;
    var aux;
    $("#talk").text("");
    for (x in texto) {
        await sleep(20);
        aux = $('#talk').text();
        audio.play();
        $('#talk').text(aux + texto[x]);
    }
}
$('body').click(function (event) {
    if (event.target.id == 'lv') {
        $('#talk').text('');
        talk("Esse ai e o meu nivel de programador atual!");
    }if (event.target.id == 'vida'){
        $('#talk').text('');
        talk("Programador e triste, quase nao tem vida.");
    }
    if (event.target.id == 'nickname'){
        $('#talk').text('');
        talk("Esse ai e meu nick, gosto de usar como assinatura.");
    }
});
$("div.row.subchao").hide();
$("div.row.chao").hide();
$("#pap").hide();

talk("Seja Bem Vindo, nao estou funcionado ainda, tenha calma!!");


// 
// Canvas code
// 
// var tamx = 300;
// var tamy = 300;
// var context = document.getElementById('passive').getContext('2d');
// var posAX = 0;
// var posAY = 0;
// function eraseCore(x,y){
//     context.fillStyle = "rgb(0,0,0)";
//     context.fillRect(x, y, x+1,y+1);
// }
// function renderCore(x,y){
//     context.fillStyle = "rgb(255,0,0)";
//     context.fillRect(x, y, x+1,y+1);
// }
// $('body').on('keydown', function (e) {
//     var code = e.keyCode || e.which;
//     if(code == 37){
//         eraseCore(posAX,posAY);
//         posAX-=1
//         renderCore(posAX,posAY);
//     }
//     if(code == 38){
//         eraseCore(posAX,posAY);
//         posAY-=1
//         renderCore(posAX,posAY);
//     }
//     if(code == 39){
//         eraseCore(posAX,posAY);
//         posAX+=1
//         renderCore(posAX,posAY);
//     }
//     if(code == 40){
//         eraseCore(posAX,posAY);
//         posAY+=1
//         renderCore(posAX,posAY);
//     }
// })
// renderCore(posAX,posAY);

