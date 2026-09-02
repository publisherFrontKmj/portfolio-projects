$(document).ready(function(){
    if($(".ezlounge_zone .ban_slide01 li").length > 0){
        var cardSwiper1 = new Swiper ('.ezlounge_zone .ban_slide01', {
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
    if($(".ezlounge_zone .ban_slide02 li").length > 0){
        var cardSwiper2 = new Swiper ('.ezlounge_zone .ban_slide02', {
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

    $(".ezlounge_list_wrap .count2").on("click", function(){
        if($(this).hasClass("on")){
            $(this).removeClass("on");
        }else{
            $(this).addClass("on");
        }   
    });

    $(".reply_wrap .push_chk").on("click", function(){
        if($(this).hasClass("on")){
            $(this).removeClass("on");
            $(this).find("i").animate({
                left: "0"
            },200);
        }else{
            $(this).addClass("on");
            $(this).find("i").animate({
                left: "30px"
            },200);
        }
        return false;
    });    

    $(".ezlounge_quick .quick_like").on("click", function(){
        if($(this).hasClass("on")){
            $(this).removeClass("on");
        }else{
            $(this).addClass("on");
        }   
    });

    $(".reply .reply_like").on("click", function(){
        if($(this).hasClass("on")){
            $(this).removeClass("on");
        }else{
            $(this).addClass("on");
        }   
    });

    $(".challenge_set_btn .set_btn").on("click", function(){
        if($(this).closest(".challenge_set_btn").hasClass("on")){
            $(this).closest(".challenge_set_btn").removeClass("on");
        }else{
            $(this).closest(".challenge_set_btn").addClass("on");
        }   
    });

    // 공유하기 팝업 on
    $(".ezlounge_quick .quick_share").on("click", function(){
        $(".ezlounge_popup_bg").addClass("on");
        $(".ezlounge_share_popup").addClass("on");
    });
    
    var elPopTabBtn = $(".ezlounge_popup .layer_tab_btn li"),
        elPopTabCont = $(".ezlounge_popup .layer_tab_contents .layer_tab_cont");

    elPopTabBtn.on("click", function(){
        var target = $(this),
            index = target.index();

        elPopTabBtn.removeClass("on");
        target.addClass("on");

        elPopTabCont.removeClass("on").eq(index).addClass("on");
    });

    // 신고하기 팝업 on
    $(".ezlounge_zone .report_pop_button").on("click", function(){
        $(".ezlounge_popup_bg").addClass("on");
        $(".ezlounge_report_popup").addClass("on");
    });

    // 참여하기 팝업 on
    $(".ezlounge_zone .attend_pop_button").on("click", function(){
        $(".ezlounge_popup_bg").addClass("on");
        $(".ezlounge_attend_popup").addClass("on");
    });
    
    // 팝업 off
    $(".ezlounge_popup .pop_close").on("click", function(){
        $(".ezlounge_popup_bg").removeClass("on");
        $(this).closest(".ezlounge_popup").removeClass("on");
    }); 
});
//이미지 등록 삭제
function deleteit(no) {
    document.getElementById("uploadPreview"+no).src = "//img.ezwelfare.net/welfare_mall/ezlounge/ezlounge_file_icon.png";
    document.getElementById("uploadImage"+no).value=""; 
    e.preventDefault();
}
//이미지 등록
function PreviewImage(no) {
    var oFReader = new FileReader();
    oFReader.readAsDataURL(document.getElementById("uploadImage"+no).files[0]);
    oFReader.onload = function (oFREvent) {
        document.getElementById("uploadPreview"+no).src = oFREvent.target.result;
    };
}