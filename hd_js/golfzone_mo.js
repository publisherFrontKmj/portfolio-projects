$(document).ready(function(){
	if($(".hot_slide li").length > 0){
		new Swiper ('.hot_slide', {
			slidesPerView: "auto",
			spaceBetween: 10,
		});
	}

	if($(".deal_slide li").length > 0){
		new Swiper ('.deal_slide', {
			loop : true,
			slidesPerView: "auto",
			spaceBetween: 10,
			centeredSlides: true,
			pagination : { 
				el : '.swiper-pagination',
				clickable : true, 
			},
		});
	}

	if($(".hot_deal_slide li").length > 0){
		new Swiper ('.hot_deal_slide', {
			slidesPerView: "auto",
			spaceBetween: 10,
			pagination: {
				el: ".swiper-pagination",
				type: "progressbar",
			},
		});
	}

	if($(".brand_sale_slide li").length > 0){
		new Swiper ('.brand_sale_slide', {
			slidesPerView: "auto",
			spaceBetween: 10,
		});
	}

	if($(".new_discovery_slide li").length > 0){
		new Swiper ('.new_discovery_slide', {
			slidesPerView: "auto",
			spaceBetween: 10,
			pagination: {
				el: ".swiper-pagination",
				type: "progressbar",
			},
		});
	}

	// ranking top
	var tabBtn = $(".ranking_tab .ranking_tab_btn li"),
		tabCont = $(".ranking_tab .ranking_tab_cont .tab_content");

	tabBtn.on("click", function(){
		var target = $(this),
			index = target.index();

		tabBtn.removeClass("on");
		target.addClass("on");

		tabCont.removeClass("on").eq(index).addClass("on");
	});

	if($(".ranking_slide_01 li").length > 0){
		new Swiper ('.ranking_slide_01', {
			slidesPerView: "auto",
			spaceBetween: 10,
			observer: true,
			observeParents: true,
		});
	}
	if($(".ranking_slide_02 li").length > 0){
		new Swiper ('.ranking_slide_02', {
			slidesPerView: "auto",
			spaceBetween: 10,
			observer: true,
			observeParents: true,
		});
	}
	if($(".ranking_slide_03 li").length > 0){
		new Swiper ('.ranking_slide_03', {
			slidesPerView: "auto",
			spaceBetween: 10,
			observer: true,
			observeParents: true,
		});
	}
	if($(".ranking_slide_04 li").length > 0){
		new Swiper ('.ranking_slide_04', {
			slidesPerView: "auto",
			spaceBetween: 10,
			observer: true,
			observeParents: true,
		});
	}
	if($(".ranking_slide_05 li").length > 0){
		new Swiper ('.ranking_slide_05', {
			slidesPerView: "auto",
			spaceBetween: 10,
			observer: true,
			observeParents: true,
		});
	}
	if($(".ranking_slide_06 li").length > 0){
		new Swiper ('.ranking_slide_06', {
			slidesPerView: "auto",
			spaceBetween: 10,
			observer: true,
			observeParents: true,
		});
	}

	if($(".gift_golf_slide li").length > 0){
		new Swiper ('.gift_golf_slide', {
			slidesPerView: "auto",
			spaceBetween: 10,
			pagination: {
				el: ".swiper-pagination",
				type: "progressbar",
			},
		});
	}

	if($(".golf_trip_slide li").length > 0){
		new Swiper ('.golf_trip_slide', {
			slidesPerView: "auto",
			spaceBetween: 10,
			pagination: {
				el: ".swiper-pagination",
				type: "progressbar",
			},
		});
	}

	if($(".golf_lesson_slide li").length > 0){
		new Swiper ('.golf_lesson_slide', {
			slidesPerView: "auto",
			spaceBetween: 10,
			pagination: {
				el: ".swiper-pagination",
				type: "progressbar",
			},
		});
	}
});