$(document).ready(function(){

	// GNB
	$(".golf_gnb li.one_depth").hover(function(){
		var gnbIndex = $(this).index();
		$(".golf_gnb_lyr_wrap").show();
		$(".golf_gnb_lyr").eq(gnbIndex).show();
		$(".golf_header").addClass("on");

		$(".golf_gnb_lyr").eq(gnbIndex).hover(function(){
			$(".golf_gnb_lyr_wrap").show();
			$(".golf_gnb_lyr").eq(gnbIndex).show();
			$(".golf_header").addClass("on");
		}, function(){
			$(".golf_gnb_lyr_wrap").hide();
			$(".golf_gnb_lyr").hide();
			$(".golf_header").removeClass("on");	
		});
	}, function(){
		$(".golf_gnb_lyr_wrap").hide();
		$(".golf_gnb_lyr").hide();
		$(".golf_header").removeClass("on");
	});
	// GNB type2
	$(".golf_gnb li.menu_type02").hover(function(){
		$(this).find(".type02_submenu").show();
	}, function(){
		$(this).find(".type02_submenu").hide();
	});

	function promo_rolling_mix(){
		var cateWrap = $(".golf_zone_main_con .golf_zone_obj_slide_wrap");
		var cateList = cateWrap.find(".golf_zone_obj_slide");
		cateList.find('>li').each(function (idx) {
			$(this).data('index', idx+1);
		});

		var length       = cateWrap.find("li").length;
		var range        = Math.ceil(length / 4);
		// var grpIdx       = Math.ceil(range * Math.random());
		var grpIdx       = 1;

		cateWrap.find("li").removeClass("on");
		for(var i=0 ; i < (grpIdx - 1) * 4 ; i++){
			var li = cateWrap.find("li:first");
			cateList.append(li);
		}
		cateWrap.find("li:first").addClass("on");
	}

	function promo_rolling() {
		var config = {
			bool: false,
			id: null,
			sec:5000
		};
		var isBoolean = false;
		controller();
		rollingInit(true);

		function controller() {
			var cateWrap = $(".golf_zone_main_con .golf_zone_obj_slide_wrap");
			var cateList = cateWrap.find(".golf_zone_obj_slide");
			var prev = cateWrap.find(".btn_area .left_btn");
			var next = cateWrap.find(".btn_area .right_btn");
			
			var listSize = cateList.find(">li").length;
			var indicate = $('.btn_area .num_cnt');
			indicate.find('.total').text(listSize);
			var now = indicate.find('.now');
			var current = $(cateList).find(">li.on").data('index');
			now.text(current);
			if (listSize <= 4) {
				$(prev).addClass("end");
				$(next).addClass("end")
			} else {
				$(prev).removeClass("end");
				$(next).removeClass("end")
			}

			

			$(cateList).find(">li").each(function(lastItem) {
				$(this).on({
					click: function(e) {
						var activeIndex = $(cateList).find(">li.on").index(); //이전이미지
						$(cateList).find(">li").removeClass();
						$(cateList).find("li").eq(activeIndex).addClass("off"); //이전이미지
						$(this).addClass("on");
						var current = $(cateList).find(">li.on").data('index');
						now.text(current);

						if (listSize === 4) {
							$(prev).addClass("end");
							$(next).addClass("end")
						} else {
							$(prev).removeClass("end");
							$(next).removeClass("end")
						}
						//isBoolean = true;

						//좌우 이미지 변경
						funcDimChange();
						clearInterval(config.id);
					config.id = setInterval(dimTimer, config.sec);

						e.preventDefault()
					},
					mouseleave: function() {
						isBoolean = false;
						if (config.bool) {
							rollingInit(true)
						}
					}
				})
			});
			$(prev).on({
				click: function(e) {
					var activeIndex = $(cateList).find(">li.on").index(); //이전이미지
					$(cateList).find(">li").removeClass();
					$(cateList).find("li").eq(activeIndex).addClass("off"); //이전이미지

					if (activeIndex < 1 && listSize >= 4) {
						var firstItem = $(cateList).find(">li:first");
						var lastItem = $(cateList).find(">li:last");
						$(lastItem).insertBefore($(firstItem));
						$(cateList).find(">li:eq(0)").addClass("on");
					} else {
						activeIndex = (activeIndex == 0) ? listSize : activeIndex;
						$(cateList).find(">li:eq(" + (activeIndex - 1) + ")").addClass("on");
					}
					var current = $(cateList).find(">li.on").data('index');
					now.text(current);

					//좌우 이미지 변경
					funcDimChange();
					clearInterval(config.id);
					config.id = setInterval(dimTimer, config.sec);

					e.preventDefault()
				},
				//mouseenter: function() {
				//	isBoolean = true
				//},
				mouseleave: function() {
					isBoolean = false;
					if (config.bool) {
						rollingInit(true)
					}
				}
			});
			$(next).on({
				click: function(e) {
					var top = $(window).scrollTop();
					var activeIndex = $(cateList).find("li.on").index(); //이전이미지
					$(cateList).find("li").removeClass();
					$(cateList).find("li").eq(activeIndex).addClass("off"); //이전이미지

					if (activeIndex > 2) {
						var firstItem = $(cateList).find(">li:first");
						var lastItem = $(cateList).find(">li:last");
						
						$(firstItem).insertAfter($(lastItem));
						$(cateList).find(">li:eq(3)").addClass("on");
					} else {
						activeIndex = (activeIndex < 0) ? activeIndex - 1 : activeIndex;
						activeIndex = (activeIndex + 1 >= listSize) ? -1 : activeIndex;
						$(cateList).find(">li:eq(" + (activeIndex + 1) + ")").addClass("on");
					}
					var current = $(cateList).find(">li.on").data('index');
					now.text(current);

					//좌우 이미지 변경
					funcDimChange();
					clearInterval(config.id);
					config.id = setInterval(dimTimer, config.sec);

					$(window).scrollTop(top);
					return false;
				},
				//mouseenter: function() {
				//	isBoolean = true
				//},
				mouseleave: function() {
					isBoolean = false;
					if (config.bool) {
						rollingInit(true)
					}
				}
			});
		}
		function rollingInit(cateList) {
			var a = $(".golf_zone_main_con .golf_zone_obj_slide_wrap .golf_zone_obj_slide").find(">li").length;
			clearInterval(config.id);
			if (a <= 1) {
				return false
			}
			if (cateList) {
				config.id = setInterval(dimTimer, config.sec)
			}

			// 초기 좌우 딤드이미지 설정
			$('.golf_dim_left').css('background-image','url(' + $('.golf_zone_obj_slide li').eq(a-1).find("img").attr('src') + ')');
			$('.golf_dim_right').css('background-image','url(' + $('.golf_zone_obj_slide li').eq(1).find("img").attr('src') + ')');

			
		}

		function dimTimer(){
			if (!isBoolean) {
				$(".btn_area .right_btn").trigger("click")
				//좌우 이미지 변경
				funcDimChange();
			} else {
				rollingInit(true)
			}
		}

		function funcDimChange(){
			var objLength = $('.golf_zone_obj_slide li').length;
			if($('.golf_zone_obj_slide .on').index() == (objLength-1)){
				$('.golf_dim_right').css('background-image','url(' + $('.golf_zone_obj_slide li').eq(0).find("img").attr('src') + ')');
			}else{
				$('.golf_dim_right').css('background-image','url(' + $('.golf_zone_obj_slide li.on').next().find("img").attr('src') + ')');
			}
			if($('.golf_zone_obj_slide .on').index() == 0){
				$('.golf_dim_left').css('background-image','url(' + $('.golf_zone_obj_slide li').eq(objLength-1).find("img").attr('src') + ')');
			}else{
				$('.golf_dim_left').css('background-image','url(' + $('.golf_zone_obj_slide li.on').prev().find("img").attr('src') + ')');
			}
		}
	}
	$(function () {
		promo_rolling_mix();
		promo_rolling();
	});

	// hot_deal slide
	if($(".hot_deal_slide").length > 0){
		var hotSlideLength = $(".hot_deal_slide").find(".swiper-slide").length;

		var hotSlideSwiper = new Swiper ('.hot_deal_slide', {
			slidesPerView: "auto",
			spaceBetween: 20,
			loop: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'fraction',
			},
		});
		hotSlideSwiper.on("slideChange", function(){
			var hotSlidePer = Math.round(100 * ((this.realIndex + 1) / hotSlideLength));
			var hotSlideProg = $(".mr_ssv_navi").find("progress");
			hotSlideProg.attr('value', parseInt(hotSlidePer));
		});

		$(".mr_ssv_navi .mr_bar progress").attr("value", Math.round(100 * (1 / hotSlideLength)));
	}

	// md theme tab
	var mdTabBtn = $(".theme_tab_btn li"),
		mdTabCont = $(".theme_tab_contents .md_slide_box");

	mdTabBtn.on("click", function(){
		var target = $(this),
			index = target.index();

		mdTabBtn.removeClass("on");
		target.addClass("on");

		mdTabCont.removeClass("on").eq(index).addClass("on");
	});

	// discovery slide
	if($(".discovery_slide").length > 0){
		var disSlideLength = $(".discovery_slide").find(".swiper-slide").length;

		var disSlideSwiper = new Swiper ('.discovery_slide', {
			slidesPerView: "auto",
			spaceBetween: 20,
			loop: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'fraction',
			},
		});
		disSlideSwiper.on("slideChange", function(){
			var disSlidePer = Math.round(100 * ((this.realIndex + 1) / disSlideLength));
			var disSlideProg = $(".mr_ssv_navi").find("progress");
			disSlideProg.attr('value', parseInt(disSlidePer));
		});

		$(".mr_ssv_navi .mr_bar progress").attr("value", Math.round(100 * (1 / disSlideLength)));
	}

	// ranking tab
	var rkTabBtn = $(".tab_btn li"),
		rkTabCont = $(".tab_contents .cont");

	rkTabBtn.on("click", function(){
		var target = $(this),
			index = target.index();

		rkTabBtn.removeClass("on");
		target.addClass("on");

		rkTabCont.removeClass("on").eq(index).addClass("on");
	});
});