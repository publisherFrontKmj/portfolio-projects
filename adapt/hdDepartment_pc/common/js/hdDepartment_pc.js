$(document).ready(function(){
    $(".hd_dt_zone_wrap .one_depth").mouseover(function(){
        $(this).find(".sub_menu").show();
    });

    $(".hd_dt_zone_wrap .one_depth").mouseleave(function(){
        $(this).find(".sub_menu").hide();
    });

    // banner_slide_box
    if($(".ban_slide li").length > 0){
        var cardSwiper = new Swiper ('.hd_dt_zone_wrap .ban_slide', {
            loop : true,
            slidesPerView: 'auto',
            centeredSlides: true,
            autoplay: {     
                delay: 5000, 
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

    // 슬라이드 auto on
    function cardSliderStart(){
        cardSwiper.autoplay.start();
        $('.card_slide_pause').removeClass('on');
    };
    // 슬라이드 auto off
    function cardSliderStop(){
        cardSwiper.autoplay.stop();
        $('.card_slide_pause').addClass('on');
    };

    // 슬라이드 auto on/off
    var hdDtBanPause = 0;
    $('.card_slide_pause').on("click", function(){
        if(hdDtBanPause == 0){
            cardSliderStop();
            hdDtBanPause = 1;
        }else{
            cardSliderStart();
            hdDtBanPause = 0;
        }
    });

    //special_price tab
    var spTabBtn = $(".hd_dt_zone .sp_tab_btn li"),
        spTabCont = $(".hd_dt_zone .sp_tab_cont_box .sp_tab_cont");

    spTabBtn.on("click", function(){
        var target = $(this),
            index = target.index();

        spTabBtn.removeClass("on");
        target.addClass("on");

        spTabCont.removeClass("on").eq(index).addClass("on");
    });

    if($(".sale_brand_slide li").length > 0){
        new Swiper ('.sale_brand_slide', {
            slidesPerView: "auto",
            spaceBetween: 18,
            navigation: {
                nextEl: ".sale_brand_slide_box .swiper-button-next",
                prevEl: ".sale_brand_slide_box .swiper-button-prev"
            }
        });
    }

    //sale_brand tab
    var sbTabBtn = $(".sale_brand_slide li"),
        sbTabCont = $(".sale_brand_content .content_list");

    sbTabBtn.on("click", function(){
        var target = $(this),
            index = target.index();

        sbTabBtn.removeClass("on");
        target.addClass("on");

        sbTabCont.removeClass("on").eq(index).addClass("on");
    });

});




