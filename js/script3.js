// hopojiyagdol sub2 script

$(function(){

// ======================================== gnb menu dropdown
$(".depth2, .drop-box").hide();

$(".menu .gndmenu").mouseover(function(){
    $(".depth2, .drop-box").stop().slideDown();
});

$(".menu").mouseout(function(){
    $(".depth2, .drop-box").stop().slideUp();
});

// ========================================= logicon hover

$(".hlogicon").hide();

$(".log-icon").mouseover(function(){
    $(".hlogicon").show();
    $(".logicon").hide();
});

$(".log-icon").mouseout(function(){
    $(".logicon").show();
    $(".hlogicon").hide();
});

// ======================================= quick hover

// $(".qhicon").hide();

$(".quick li").mouseover(function(){
    $(this).find(".qicon").css("opacity", "0"); 
    $(this).find("p").css("color", "#ff8a00");
});

$(".quick li").mouseout(function(){
    $(this).find(".qicon").css("opacity", "1"); 
    $(this).find("p").css("color", "#fff");
});

});