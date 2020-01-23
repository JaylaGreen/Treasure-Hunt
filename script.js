$(".img1").click(function() {
    $(".img1").hide();
});
$("button").click(function() {
    $(".img1").show();
});
$("p").dblclick(function() {
    $(".img3").show();
});
$(".img3").click(function() {
    $(".img3").hide();
});
$("p").dblclick(function(){
    $(".img2").hide();
});
$(".step").click(function(){
    $("body").css("background-color", "pink");
});