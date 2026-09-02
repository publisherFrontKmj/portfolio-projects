$(document).ready(function(){
    //ham menu
    $(".header_wrap .header_menu").on("click", function(){
        $(".gnb_wrap").addClass("on");
        $(".gnb_bg").addClass("on");
        $("html, body").css("overflow-y","hidden"); // 240119 추가
    });

    $(".gnb_wrap .gnb_box ul li .main_gnb").on("click", function(){
        $(".gnb_wrap .gnb_box ul li .main_gnb").removeClass("on");
        $(".gnb_wrap .gnb_box ul li .sub_gnb").removeClass("on");
        $(this).addClass("on").next(".sub_gnb").addClass("on");
    });

    $(".gnb_wrap .gnb_close_icon").on("click", function(){
        $(".gnb_wrap").removeClass("on");
        $(".gnb_bg").removeClass("on");
        $("html, body").css("overflow-y","visible"); // 240119 추가
    });

    //info slide
    if($(".info_slide li").length > 0){
        new Swiper ('.info_slide', {
            spaceBetween: 20,
            slidesPerView: "auto",
            pagination: {
                el: ".swiper-pagination",
                type: "progressbar",
            },
        });
    }

    //intro 공지사항/게시판 tab
    var tabBtn = $(".tab_btn_box li"),
        tabCont = $(".tab_cont .tab_cont_box");

    tabBtn.on("click", function(){
        var target = $(this),
            index = target.index();

        tabBtn.removeClass("on");
        target.addClass("on");

        tabCont.removeClass("on").eq(index).addClass("on");
    });

    //faq list
    $(".faq_wrap ul li").on("click", function(){
        if($(this).hasClass("on")){
            $(this).removeClass("on").children(".faq_a").hide();
        }else{
            $(this).addClass("on").children(".faq_a").show();
        }
    });
});