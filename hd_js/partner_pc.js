$(document).ready(function(){
    
    // //header fixed
    // $(window).on("scroll", function(){
    //     var winScroll = $(this).scrollTop();
    //         // headerHeight = $(".header_wrapper").outerHeight();
            
    //     if(winScroll > 0){
    //         $(".header_wrapper").addClass("position_fixed");
    //         $(".position_fixed_pt").addClass("on");
    //     }else{
    //         $(".header_wrapper").removeClass("position_fixed");
    //         $(".position_fixed_pt").removeClass("on");
    //     }
    // });

    //nav
    $(".gnb > ul > li").hover(function(){
        $(".sub_nav").show();
        $(".nav_bg").show();
    },function(){
        $(".sub_nav").hide();
        $(".nav_bg").hide();
    });

    //banner
    new Swiper ('.banner_slide_wrap', {
        loop : true,
        spaceBetween: 50,
        slidesPerView : 'auto',
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    //login select
    $(".login_box_02 .login_select_box .login_select_top").on("click", function(){
        $(this).siblings(".login_select").addClass("on");

        $(".login_select li").on("click", function(){
            $(".login_select").removeClass("on");
        });
    });
    
    //table accordion
    $(".prd_division_button_cont .prd_division_cont03").on("click", function(){
        if($(this).hasClass("on")){
            $(this).removeClass("on");
        }else{
            $(this).addClass("on");
        }
    });

    //tab (실서버 js와 다름//개발자 요청//230119)
    var tabBtn = $(".manual_wrap .prd_division_button_box .prd_division_tab_button"),
        tabCont = $(".manual_wrap .prd_division_tab_box .prd_division_tab");

    tabBtn.on("click", function(){
        var target = $(this),
            index = target.index(),
            textData = target.text();

        $(".path_change_text").text(textData);

        tabBtn.removeClass("active");
        target.addClass("active");

        tabCont.removeClass("active").eq(index).addClass("active");
    });

    //manual accordion
    $(".tab3_select_box").on("click", function(){
        $(".tab_03_select").addClass("on");    

        $(".tab_03_select .tab_03_select_list > a").on("click", function(){
            $(".tab_03_select .tab_03_select_list > a").removeClass("on").siblings().removeClass("on");
            $(this).addClass("on").siblings().addClass("on");
        });

        $(".tab3_select_box .tab_03_hidden_list a").on("click", function(){
            $(".tab_03_select").removeClass("on");
            return false;
        });
    });

    //FAQ accordion
    $(".qna_select_box").on("click", function(){
        $(".qna_select").addClass("on");

        $(".qna_select .qna_select_list a").on("click", function(){
            var textData = $(this).text();
            
            $(".qna_select").removeClass("on");
            $(".qna_select_text").text(textData);
            return false;
        });
    });

    //FAQ list accordion
    $(".notice_list_accordion ul li").on("click", function(){
        $(".notice_list_accordion ul li").removeClass("on").next(".notice_hidden_list").removeClass("open");
        $(this).addClass("on").next(".notice_hidden_list").addClass("open");
    });

    //contents accordion
    $(".contents_select_box").on("click", function(){
        var selectOwn = $(this);

        $(".contents_select_box").removeClass("on");
        $(".contents_select_box .contents_select").removeClass("on");
        selectOwn.addClass("on");
        selectOwn.children(".contents_select").addClass("on");

        selectOwn.children(".contents_select").find("a").on("click", function(){
        
            var textData = $(this).text();
            
            selectOwn.removeClass("on");
            selectOwn.children(".contents_select").removeClass("on");
            selectOwn.children(".contents_select_text").text(textData);
            return false;
        });
    });

});

//checkbox 전체선택
function allCheck() {
    $('input[type="checkbox"]#allChk').click(function(){
        var all = $('input[type="checkbox"]#allChk').parents().find('input[type="checkbox"]');
        if(all.prop("checked")) {
            all.prop("checked",true);
        }else{
            all.prop("checked",false);
        }
    }); 
}

//달력 폼
//개발자 요청으로 인해 달력 폼 id값 1개로 통일하여 사용(퍼블 서버에서 탭 + 달력 폼 (여러개) 사용 시, id값 세분화 필요) 230208
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