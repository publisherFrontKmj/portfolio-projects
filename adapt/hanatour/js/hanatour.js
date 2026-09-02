$(function(){
	/* op_search */
	if($('.op_search_box').length > 0){
		//검색창 레이블 클릭시 사라지기
		$('.input_label').click(function(){
			$(this).children('label').hide();
			$(this).children('input').focus();
			$(this).children('div').show();
			$('.datepicker').hide();
		});
		$('.input_label > input').click(function(){

			$('.datepicker').removeClass('datepicker--open');
			$('.datepicker').addClass('datepicker--closed');
			$('.datepicker').hide();
			return false;
		});
		$(document).click(function(e){
			if($('.op_search_box, .next , .txt_sl ,.txt_paging ,.ezprice_n_todayprice, .promotion_proceed_serch').has(e.target).length === 0){
				if($('.input_label').children('input').length > 0){
					if($('.input_label').children('input').val().length === 0){
						$('.input_label > label').stop().show();
					}
					$('.input_label > div').stop().hide();
					$('.datepicker').hide();
				}
			}
		});
		$('.checkin_startday').click(function(){
			if($('.input_label').children('input').length > 0){
				if($('.input_label').children('input').val().length === 0){
					$('.input_label > label').stop().show();
				}
				$('.input_label > div').stop().hide();
			}

			$('.input_label > div').hide();
			$('.datepicker').addClass('datepicker--open');
			$('.datepicker').removeClass('datepicker--closed');
			$('.datepicker').show();
			return false;
		});

	}

	/* op_swiper */
	if($('.op_swiper_box').length > 0){
		var evtSwiperLength = $('.op_swiper_box .swiper').find(".swiper-slide").length;
		
		var evtMainSwiper = new Swiper ('.op_swiper_box .swiper', {
			loop : true,
			effect : 'fade',
			autoplay: {     
				delay: 5000, 
			},
			pagination: {
				el: ".swiper-tools .swiper-pagination",
				type: "fraction",
			},
			navigation: {
				nextEl: ".swiper-tools .swiper-button-next",
				prevEl: ".swiper-tools .swiper-button-prev",
			}
		});

		evtMainSwiper.on("slideChange", function(){
			var slidePer = Math.round(100 * ((this.realIndex + 1) / evtSwiperLength));
			var slideProg = $(".swiper-tools .mr_bar").find("progress");
			slideProg.attr('value', parseInt(slidePer));
		});

		// 초기값설정
		$(".swiper-tools").find(".swiper-pagination-total").text(evtSwiperLength);
		$(".swiper-tools .mr_bar progress").attr("value", Math.round(100 * (1 / evtSwiperLength)));

		$('.swiper-tools').on("click", ".btn-swiper-play.play", function(){
			evtMainSwiper.autoplay.start();
			$(this).removeClass('play');
			$(this).addClass('stop');
		});
		$('.swiper-tools').on("click", ".btn-swiper-play.stop", function(){
			evtMainSwiper.autoplay.stop();
			$(this).removeClass('stop');
			$(this).addClass('play');
		});
	}

	/* tab */
	if($('.op_title_tab').length > 0){
		$('.op_title_tab li').on( 'click', function() { 
			var now_tab = $(this).index();
			if (!$(this).parent().find('li').eq(now_tab).hasClass('on')){
				$(this).parent().find('li').removeClass('on');
				$(this).parent().parent().parent().parent().find('.js-tab-cont').css('display', 'none').removeClass('on');
				$(this).parent().find('li').eq(now_tab).addClass('on');
				$(this).parent().parent().parent().parent().find('.js-tab-cont').eq(now_tab).css('display', 'block').addClass('on');
			} else {
				return false;
			}
		});
	}

    // 예약취소 사유 팝업 on
    $(".tour_cancel_btn").on("click", function(){
        $(".tour_pop01").addClass("on");
        $(".tour_pop_bg").addClass("on");
    });
    // 상품 등급 및 상태 팝업 on
    $(".prd_detail_box .desc_r a").on("click", function(){
        $(".tour_pop02").addClass("on");
        $(".tour_pop_bg").addClass("on");
    });
    // 여행자 정보 팝업 on
    $(".detail_right .reserv_btn").on("click", function(){
        $(".tour_pop03").addClass("on");
        $(".tour_pop_bg").addClass("on");
    });
    // 다른 출발일 상품 팝업 on
    $(".change_date a").on("click", function(){
        $(".tour_pop04").addClass("on");
        $(".tour_pop_bg").addClass("on");
    });
    // 팝업 off
    $(".tour_pop_wrap .layer_top a").on("click", function(){
        $(this).parents().parents().removeClass("on");
        $(".tour_pop_bg").removeClass("on");
    });
    $(".tour_pop_wrap .layer_bottom a").on("click", function(){
        $(this).parents().parents().removeClass("on");
        $(".tour_pop_bg").removeClass("on");
    });

    //notice faq
    $(".notice_table .notice_q").on("click", function(){
        if($(this).hasClass("on")){
            $(this).removeClass("on").next(".notice_a").hide();
        }else{
            $(this).addClass("on").next(".notice_a").show();
        }
    });

    //search - 판매상품 보기
    $(".search_prd .s_prd_btn").on("click", function(){
        if($(this).hasClass("open")){
            $(this).parents().next(".search_calendar_box").hide();
            $(this).removeClass("open");
        }else{
            $(this).parents().next(".search_calendar_box").show();
            $(this).addClass("open");
        }
    });

    //search - 판매상품 보기
    $(".date_select span").on("click", function(){
        if($(this).parents().hasClass("on")){
            $(this).parents().removeClass("on");
        }else{
            $(this).parents().addClass("on");
        }
    });

    // if($(".op_cyc1").length > 0){
    //     var OpLength1 = $(".op_cyc1").find(".swiper-slide").length;

    //     var OpSwiper1 = new Swiper('.op_cyc1', {
    //         loop: true,
    //         spaceBetween: 20,
    //         pagination: {
    //             el: '.op_navi1 .op_page',
    //         },
    //         navigation: {
    //             nextEl: '.op_navi1 .op_next',
    //             prevEl: '.op_navi1 .op_prev',
    //         },
    //         observer: true,
    //         observeParents: true,
    //     });
    // }

    // if($(".op_cyc2").length > 0){
    //     var OpLength2 = $(".op_cyc2").find(".swiper-slide").length;

    //     var OpSwiper2 = new Swiper('.op_cyc2', {
    //         loop: true,
    //         spaceBetween: 20,
    //         pagination: {
    //             el: '.op_navi2 .op_page',
    //         },
    //         navigation: {
    //             nextEl: '.op_navi2 .op_next',
    //             prevEl: '.op_navi2 .op_prev',
    //         },
    //         observer: true,
    //         observeParents: true,
    //     });
    // }

    // if($(".op_cyc3").length > 0){
    //     var OpLength3 = $(".op_cyc3").find(".swiper-slide").length;

    //     var OpSwiper3 = new Swiper('.op_cyc3', {
    //         loop: true,
    //         spaceBetween: 20,
    //         pagination: {
    //             el: '.op_navi3 .op_page',
    //         },
    //         navigation: {
    //             nextEl: '.op_navi3 .op_next',
    //             prevEl: '.op_navi3 .op_prev',
    //         },
    //         observer: true,
    //         observeParents: true,
    //     });
    // }

    // if($(".op_cyc4").length > 0){
    //     var OpLength4 = $(".op_cyc4").find(".swiper-slide").length;

    //     var OpSwiper4 = new Swiper('.op_cyc4', {
    //         loop: true,
    //         spaceBetween: 20,
    //         pagination: {
    //             el: '.op_navi4 .op_page',
    //         },
    //         navigation: {
    //             nextEl: '.op_navi4 .op_next',
    //             prevEl: '.op_navi4 .op_prev',
    //         },
    //         observer: true,
    //         observeParents: true,
    //     });
    // }

    // if($(".op_cyc5").length > 0){
    //     var OpLength5 = $(".op_cyc5").find(".swiper-slide").length;

    //     var OpSwiper5 = new Swiper('.op_cyc5', {
    //         loop: true,
    //         spaceBetween: 20,
    //         pagination: {
    //             el: '.op_navi5 .op_page',
    //             type: "fraction",
    //         },
    //         navigation: {
    //             nextEl: '.op_navi5 .op_next',
    //             prevEl: '.op_navi5 .op_prev',
    //         },
    //         observer: true,
    //         observeParents: true,
    //     });
    // }

    // if($(".op_cyc6").length > 0){
    //     var OpLength6 = $(".op_cyc6").find(".swiper-slide").length;

    //     var OpSwiper6 = new Swiper('.op_cyc6', {
    //         loop: true,
    //         spaceBetween: 20,
    //         pagination: {
    //             el: '.op_navi6 .op_page',
    //             type: "fraction",
    //         },
    //         navigation: {
    //             nextEl: '.op_navi6 .op_next',
    //             prevEl: '.op_navi6 .op_prev',
    //         },
    //         observer: true,
    //         observeParents: true,
    //     });
    // }
    // $('.op_tabs_view').each(function(){
    //     if($('.op_item_box',this).length>1) {
    //         $(this).hover(
    //             function(){ $(".slide-ctrls .page", this).hide();$(".slide-ctrls a", this).addClass('on').removeClass('off');},
    //             function(){ $(".slide-ctrls .page", this).hide();$(".slide-ctrls a", this).removeClass('on').addClass('off');}
    //         )
    //     }
    // });
});
function Calendar() {
    //매출전포
    function jsOrderSalesCheckView(){
        window.open('/cuser/popup/orderSalesCheck.ez', 'orderSalesCheck' , 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,copyhistory=no,width=560,height=600');
    }

    $(function() {
        $( "#startDt, #endDt").datepicker({
            showOn: "both",
            buttonText: "",
            changeMonth: true,
            changeYear: true,
            nextText: '다음 달',
            prevText: '이전 달',
            closeText: '닫기',
            monthNamesShort: [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12" ],
            dayNamesMin: [ "일", "월", "화", "수", "목", "금", "토" ],
            yearRange: "-1:+10", 
            beforeShow: function (){},
            dateFormat: "yy-mm-dd"

        }).on("click focus", function(){
            // 웹표준 추가
            if(!$(".ui-datepicker-month").attr("id")){
                $(".ui-datepicker-month").attr("id","ui-datepicker-month");
                $(".ui-datepicker-title").prepend('<label for="ui-datepicker-month" class="blind">월선택</label>' );
            }
            if(!$(".ui-datepicker-year").attr("id")){
                $(".ui-datepicker-year").attr("id","ui-datepicker-year");
                $(".ui-datepicker-title").prepend('<label for="ui-datepicker-year" class="blind">년선택</label>' );
            }
            if($(".ui-datepicker-calendar caption").size() == 0){
                $(".ui-datepicker-calendar").prepend('<caption><strong>달력선택</strong><p>일,월,화,수,목,금,토</p></caption>').find("th").attr("scope","col");
            }

        }).next().css("margin-left","5px"); // 달력이미지버튼
    });
}

