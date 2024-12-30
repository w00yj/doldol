// hopojiyagdol sub1 script

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
    

    // ========================================= content

    $(".con1 button").click(function(){
        $(".con1 button").removeClass("on");
        $(this).addClass("on");
    });

    $(".con2-btn a").click(function(){
        $(".con2-btn a").removeClass("on");
        $(this).addClass("on");
    });

    $(".con3-btn a").click(function(){
        $(".con3-btn a").removeClass("on");
        $(this).addClass("on");
    });

    $("#con2-2").hide();

    $('#c2btn-2').on('click', function (e) { 
        e.preventDefault(); 
        $('#con2-1').hide(); 

        const targetId = $(this).attr('href'); 
        $('#con2-2').show(); 
    }); 

    $('#c2btn-1').on('click', function (e) { 
        e.preventDefault(); 
        $('#con2-2').hide(); 

        const targetId = $(this).attr('href'); 
        $('#con2-1').show(); 
    }); 

    $("#con3-2").hide();

    $('#c3btn-2').on('click', function (e) { 
        e.preventDefault(); 
        $('#con3-1').hide(); 

        const targetId = $(this).attr('href'); 
        $('#con3-2').show(); 
    }); 

    $('#c3btn-1').on('click', function (e) { 
        e.preventDefault(); 
        $('#con3-2').hide(); 

        const targetId = $(this).attr('href'); 
        $('#con3-1').show(); 
    }); 

    });