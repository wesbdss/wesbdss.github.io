var t1 = document.getElementById('asp1');
var t2 = document.getElementById('asp2');
var t3 = document.getElementById('asp3');

$('html').click(function (event) {
    console.log(event.target.id);
    ['id1','id2','id3','id4','id5','nameBot'].forEach(name =>{
        return 0;
    });
    if (event.target.id == 'id1'||event.target.id =='id2'||event.target.id =='id3'||event.target.id =='id4'||event.target.id =='id5'||event.target.id =='nameBot'||event.target.id =='but1'||event.target.id =='slot1'||event.target.id =='slot2'||event.target.id =='border1'||event.target.id =='resposta1'||event.target.id =='pergunta1') {
        console.log("Ativou Chat");
        gsap.to(document.getElementById('id1'),{duration: 1,css:{position:"fixed",width:"50vh",height:"65vh",bottom:"40px",backgroundColor:"white",color:"white",borderRadius:"10px",textAlign:"center",fontSize:"30px",boxShadow:"1px 1px 2px #888",zIndex:"1000"}});
        gsap.to(document.getElementById('id2'),{duration:1,css:{marginTop:"16px",width:"100px",height:"100px",borderRadius:"100%",size:"80px",borderStyle:"solid",borderColor:"black"}});
        gsap.to(document.getElementById('id2'),{x:-40,duration: 1});
        gsap.to(document.getElementById('nameBot'),2,{css:{opacity:'1'}});
        document.getElementById('id1').className= ".chatopen";
        document.getElementById('id2').className =".chatopen";

        // b.style = "position:fixed;width:60vh;height:65vh;bottom:40px;right:40px;background-color: white;color:#FFF;border-radius:10px;text-align:center;font-size:30px;box-shadow: 1px 1px 2px #888;z-index:1000;";
        // b3.style = "margin-top:16px; width: 30px; height: 30px; border-radius: 100%; size: 80px; border-style: solid; border-color: black;";
        document.getElementById('id3').hidden = false;
        document.getElementById('nameBot').hidden= false;
        document.getElementById('id5').hidden = false;
        document.getElementById('border1').hidden=false;
        document.getElementById('id4').hidden = false;
        document.getElementById('slot1').hidden=false;
        document.getElementById('slot2').hidden=false;
    } else {
        console.log("Desativou Chat");
        gsap.to(document.getElementById('id1'),{duration: 1,css:{position:"fixed",width:"60px",height:"60px",bottom:"40px",backgroundColor:"white",color:"white",borderRadius:"50px",textAlign:"center",fontSize:"30px",boxShadow:"1px 1px 2px #888",zIndex:"1000"}});
        // b.style = "position:fixed;width:60px;height:60px;bottom:40px;right:40px;background-color: gray;color: gray;border-radius:50px;text-align:center;font-size:30px;box-shadow: 1px 1px 2px #888;z-index:1000;";
        document.getElementById('id2').style= "margin-top:16px; width: 30px; height: 30px; border-radius: 100%; size: 80px;";
        gsap.to(document.getElementById('id2'),{duration:1,css:{marginTop:"3px",width:"50px",height:"55px",borderRadius:"100%",size:"80px"}});
        gsap.to(document.getElementById('id2'),{x:0,duration: 1});
        gsap.to(document.getElementById('nameBot'),2,{css:{opacity:'0'}});
        document.getElementById('id1').className= ".chatopen";
        document.getElementById('id2').className =".chatopen";
        document.getElementById('id5').hidden = true;
        document.getElementById('id4').hidden = true;
        document.getElementById('border1').hidden=true;
        document.getElementById('slot1').hidden=true;
        document.getElementById('slot2').hidden=true;
        document.getElementById('id3').hidden = true;
        document.getElementById('nameBot').hidden= true;
    }
})


gsap.from(t1, { x: -1000, y: -1000, duration: 1 });
gsap.from(t2, { x: 1000, y: 1000, duration: 1, delay: 0.5 });
gsap.from(t3, { x: 1000, y: 1000, duration: 1, delay: 0.10 });
gsap.from(".card", { opacity: 0, duration: 5 });
gsap.to(t2, {opacity:0.4,duration:1,repeat:-1,yoyo:true});
