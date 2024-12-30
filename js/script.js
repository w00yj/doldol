// hopojiyagdol main script

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

    // ======================================== panner
    $(".content").hide();

    $('.sec1 a').on('click', function (e) { 
        e.preventDefault(); 
        $('.content, .content li').hide(); 

        const targetId = $(this).attr('href'); 
        $('.content').show(); 
        $(targetId).fadeIn(300); 
    }); 

    $("#c-btn , .content").click(function(){
        $(".content, .content li").hide();
    }); 

    // ========================================== slide

    const slide = $(".slide");
    const LiWidth = $(".slide li").width();

    $(".slide").css({
        position: "relative",
        left: 0
    })

    function moveLeft () {
        slide.animate({
            left : "-1340px"
        },2000,function(){
            $(this).children("li:first").appendTo(this);
            $(this).css("left", "0");
        })
    }

    setInterval(function(){
        moveLeft();
    },4500);

});