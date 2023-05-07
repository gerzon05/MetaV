$(".buscador2").hide();
$(".menu").click(function(){
    $(".buscador2").slideToggle(2000);
})
$(".bus").click(function(){
    $(".buscador2").slideUp(1000);
})
$("video").hide();
$(".imagen1").click(function (e) { 
    e.preventDefault();
    $("#video").slideDown(700);
});
$("#video").dblclick(function(){
    $(this).slideUp(500);
})