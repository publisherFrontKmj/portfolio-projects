$(document).ready(function(){
    //header nav
    $(".gnb > ul > li").hover(function(){
        $(".sub_gnb").show();
        $(".nav_bg").show();
    },function(){
        $(".sub_gnb").hide();
        $(".nav_bg").hide();
    });

    //intro 공지사항/게시판 tab
    var tabBtn = $(".notice_wrap .tab_btn_box li"),
        tabCont = $(".notice_wrap .tab_cont_box");

    tabBtn.on("click", function(){
        var target = $(this),
            index = target.index();

        tabBtn.removeClass("on");
        target.addClass("on");

        tabCont.removeClass("on").eq(index).addClass("on");
    });

    //faq list
    $(".faq_wrap .faq_q").on("click", function(){
        if($(this).hasClass("on")){
            $(this).removeClass("on").next(".faq_a").hide();
        }else{
            $(this).addClass("on").next(".faq_a").show();
        }
    });
});