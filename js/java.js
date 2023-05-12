$(".buscador2").hide();
$(".menu").click(function(){
    $(".buscador2").slideToggle(2000);
})
$(".bus").click(function(){
    $(".buscador2").slideUp(1000);
})

$(".imagen1").click(function (e) { 
    e.preventDefault();
    $("#video").slideDown(700);
});
$("#video").dblclick(function(){
    $(this).slideUp(500);
})
$("a").click(function (e) {
    e.preventDefault();
})

const openmodal = document.querySelector(".regis");
const openmodal1 = document.querySelector("#regis");
const modal = document.querySelector(".modal");
const cerrar = document.querySelector(".cerrar1");

openmodal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
});
openmodal1.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
});
cerrar.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});