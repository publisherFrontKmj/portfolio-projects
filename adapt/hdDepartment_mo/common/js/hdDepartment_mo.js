$(document).ready(function(){

	if($(".ban_slide li").length > 0){
        var cardSwiper = new Swiper ('.hd_dt_zone .ban_slide', {
            loop : true,
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

	// special_shop
	if($(".event_shop_slide li").length > 0){
        var cardSwiper2 = new Swiper ('.hd_dt_zone .event_shop_slide', {
            loop : true,
        });
	}

    cardSwiper2.controller.control = cardSwiper;
    cardSwiper.controller.control = cardSwiper2;

    // 슬라이드 auto on
    function cardSliderStart(){
        cardSwiper.autoplay.start();
        cardSwiper2.autoplay.start();
        $('.card_slide_pause').removeClass('on');
    };
    // 슬라이드 auto off
    function cardSliderStop(){
        cardSwiper.autoplay.stop();
        cardSwiper2.autoplay.stop();
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

	// special_shop
	if($(".category_btn_slide li").length > 0){
		new Swiper ('.category_btn_slide', {
			slidesPerView: "auto",
			spaceBetween: 5,
		});
	}

	//category_box tab
    var cbTabBtn = $(".hd_dt_zone .category_btn li"),
        cbTabCont = $(".hd_dt_zone .category_content .content_list");

		cbTabBtn.on("click", function(){
        var target = $(this),
            index = target.index();

		cbTabBtn.removeClass("on");
        target.addClass("on");

        cbTabCont.removeClass("on").eq(index).addClass("on");
    });

    //sale_brand_slide
    if($(".sale_brand_slide li").length > 0){
        new Swiper ('.sale_brand_slide', {
            slidesPerView: "auto",
            spaceBetween: 10,
            pagination: {
                el: ".swiper-pagination",
                type: "progressbar",
            },
        });
    }

    //ranking_slide_01 
    if($(".ranking_slide_01 li").length > 0){
        new Swiper ('.ranking_slide_01', {
            slidesPerView: "auto",
            spaceBetween: 5,
            observer: true,
            observeParents: true,
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
