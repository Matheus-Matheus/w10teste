
document.querySelector('#mouse-position').addEventListener('mousemove', (e) => {
}, );
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    console.log(scroll)
})
window.addEventListener("mousemove", (evento =>{
    let x =evento.offsetX
    let y =evento.offsetY
    console.log(x,y)
}))
//botaomenu e busca
var botaow10 =document.querySelector("#botaow10")
var popbarra = document.querySelector(".popbarra")
var botaobusca = document.querySelector("#buscar")
var inputbusca = document.querySelector(".buscar")
var botaooff = document.querySelector('#botaooff')
var offpop = document.querySelector("#sobrepor")
var divoff = document.querySelector(".off")
var inputvalor = document.querySelector('input[name="busca"]')
var valoradd = document.querySelector("#valoradd")
var table = document.querySelector("#tabela")
var local = document.querySelector("#local")
inputvalor.addEventListener("keyup", function(){
valoradd.textContent = inputvalor.value
})
var contaclick = 0;
//botoes
function criabotaoevento(botao,addclass){
    botao.addEventListener("click",function(event){
        evento.preventDefault();
        contaclick++
        console.log(contaclick)
        addclass.classList.add("fadein")
        addclass.classList.add("popbarraon");
        setTimeout(function(){
        addclass.classList.remove("fadein")
        },500)
    
        if (contaclick > 1) {
        addclass.classList.remove("popbarraon");
        contaclick = 0;
        }

    })
}       

botaow10.addEventListener("click",function(evento){
    var tempo = new Date();
    var dois = tempo.toLocaleTimeString();
    localStorage.setItem("data", dois)
    evento.preventDefault();
    contaclick++
    console.log(contaclick)
    popbarra.classList.add("fadein")
    popbarra.classList.add("popbarraon");
    setTimeout(function(){
        popbarra.classList.remove("fadein")
    },500)
    
    if (contaclick > 1) {
        popbarra.classList.remove("popbarraon");
        contaclick = 0;
    }
    
    
})
//setinterval para atualizar o local storage do botão
setInterval(()=>{
    let temper = localStorage.getItem("data")
    local.textContent = temper;
    local.classList.add("offlinks")
},500)
botaobusca.addEventListener("click",function(evento){
    evento.preventDefault();
    contaclick++
    console.log(contaclick)
    inputbusca.classList.add("fadein")
    inputbusca.classList.add("buscaron");
    table.classList.remove("tabelapesquisasoff")
    table.classList.add("tabelapesquisaon")

    setTimeout(function(){
        inputbusca.classList.remove("fadein")
    },500);
    if (contaclick > 1) {
        table.classList.add("tabelapesquisasoff")
        inputbusca.classList.remove("buscaron");
        contaclick = 0;
    }
    body.createElement(h1)
    
})
botaooff.addEventListener("click",function(evento){
    evento.preventDefault();
    contaclick++
    console.log(contaclick)
    offpop.classList.add("fadein")
    divoff.classList.remove("off")
    setTimeout(function(){
        offpop.classList.remove("fadein")
        divoff.classList.remove("popbarraon")
    },500)
    
    if (contaclick > 1) {
        offpop.classList.remove("popbarraon")
        divoff.classList.add("off");
        contaclick = 0;
    }
    
})
//horas e data
setInterval(function(){
    var texto = document.querySelector("#text");
    var horas = document.querySelector("#horas");
    var data = new Date();
    texto.innerHTML = data.toLocaleDateString();
    horas.innerHTML = data.toLocaleTimeString();
},1000)
//wallpaper
let wallpaper = ["img/w10wall.jpg","img/wall2.jpg","img/wall3.jpg",];
let wallpaperlenght = wallpaper.length;
(function() { 
    var i = 0;
    var el = document.getElementById('wallp');
    function toggle() {
        el.src = wallpaper[i];
        i = (i + 1) % wallpaperlenght;
        setTimeout(function(){
            el.classList.add("changefade")
        },5000)
    }
    setInterval(toggle, 5000);
})();

// Set the date we're counting down to

var countDownDate = new Date().getTime()+604800000 //+599990000;
console.log(countDownDate)

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);