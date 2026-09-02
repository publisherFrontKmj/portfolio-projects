$(document).ready(function(){
    //header menu
    $(".header_menu").on("click", function(){
        $(".gnb_bg").addClass("on");
        $(".gnb_wrap").addClass("on");

        $(".gnb_close_icon").on("click", function(){
            $(".gnb_bg").removeClass("on");
            $(".gnb_wrap").removeClass("on");
        });
    });

    //login select
    $(".login_box_02 .login_select_box .login_select_top").on("click", function(){
        $(this).siblings(".login_select").addClass("on");

        $(".login_select li").on("click", function(){
            $(".login_select").removeClass("on");
        });
    });

    //banner
    new Swiper ('.banner_slide_wrap', {
        loop : true,
        spaceBetween: 15,
        slidesPerView : 'auto',
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    });

    //prd division accordion 1
    $(".prd_select_box").on("click",function(){
        if($(this).hasClass("on")){
            $(this).removeClass("on");
        }else{
            $(this).addClass("on");
        }
    });

    //prd division accordion 2
    $(".prd_division_open .list_depth_01").on("click",function(){
        if($(this).hasClass("on")){
            $(this).removeClass("on").siblings("ul").removeClass("on");
        }else{
            $(this).addClass("on").siblings("ul").addClass("on");
        }

        $(".list_depth_02").on("click", function(){
            if($(this).hasClass("on")){
                $(this).removeClass("on").siblings(".list_depth_03").removeClass("on");
            }else{
                $(this).addClass("on").siblings(".list_depth_03").addClass("on");
            }
        });
    });

    //prd division accordion 3 brand mall
    $(".prd_division_brand .list_depth_01").on("click",function(){
        if($(this).hasClass("on")){
            $(this).removeClass("on").next("ul").removeClass("on");
        }else{
            $(this).addClass("on").next("ul").addClass("on");
        }
    });

    //tab (실서버 js와 다름//개발자 요청//230203)
    var tabBtn = $(".manual_wrap .prd_select_option p"),
        tabCont = $(".manual_wrap .prd_division .prd_division_tab");

    tabBtn.on("click", function(){
        var target = $(this),
            index = target.index(),
            textData = target.text();

        $(".select_text_change").text(textData);

        tabBtn.removeClass("on");
        target.addClass("on");

        tabCont.removeClass("on").eq(index).addClass("on");
    });

    //manual accordion
    $(".tab3_select_box").on("click", function(){
        $(this).addClass("on");
        $(".tab_03_select").addClass("on");    

        $(".tab_03_select .tab_03_select_list > span").on("click", function(){
            $(".tab_03_select .tab_03_select_list > span").removeClass("on").siblings().removeClass("on");
            $(this).addClass("on").siblings().addClass("on");
        });

        $(".tab3_select_box .tab_03_hidden_list span").on("click", function(){
            $(".tab3_select_box").removeClass("on");
            $(".tab_03_select").removeClass("on");
            return false;
        });
    });

    //FAQ accordion
    $(".qna_select_box").on("click", function(){
        $(this).addClass("on");
        $(".qna_select").addClass("on");

        $(".qna_select .qna_select_list a").on("click", function(){
            var textData = $(this).text();
            
            $(".qna_select_box").removeClass("on");
            $(".qna_select").removeClass("on");
            $(".qna_select_text").text(textData);
            return false;
        });
    });

    //FAQ list accordion
    $(".qna_list_wrap .qna_show_list").on("click", function(){
        if($(this).hasClass("on")){
            $(this).removeClass("on");
            $(this).siblings(".qna_hidden_list").removeClass("on");
        }else{
            $(".qna_list_wrap .qna_show_list").removeClass("on");
            $(".qna_list_wrap .qna_hidden_list").removeClass("on");
            $(this).addClass("on");
            $(this).siblings(".qna_hidden_list").addClass("on");
        }
    });
});