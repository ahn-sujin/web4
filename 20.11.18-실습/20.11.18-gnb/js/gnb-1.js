$(document).ready(function(){

    // 1. 브라우저 너비 구하기
    var win_w = $(window).width();  // 변수선언
    
    $(window).on('resize',function(){   // 이벤트 발생
        win_w = $(this).width();
        
        if(win_w>=1024){
            $('.sub').removeAttr('style');
//            $('.sub').hide();
        }
        
    });
    
        
    // 2. gnb 이벤트
    $('#gnb>li').on('mouseenter', function(){    
        if(win_w>=768){
            // pc버전
            $(this).children('.sub').stop(true,true).slideDown();                    
        }else{
            
            // 태블릿 이하
            $('#gnb>li>a').off('click');    // 클릭 이벤트 꺼주기 - 충돌방지
            $('#gnb>li>a').on('click', function(){  // 클릭 이벤트 발생
                $('.sub').stop().slideUp();         // 전체 .sub 닫기
                $(this).next('.sub').stop().slideToggle();  // 현재 클릭한 .sub만 toggle
            });
        }
    });
            
    $('#gnb>li').on('mouseleave', function(){
        if(win_w>=768){
            $(this).children('.sub').stop(true,true).slideUp();                
        }
    });
    
            
});

    //변수 : 값을 담아 놓는 메모리 공간
    // 변수 선언
    // var 변수명;  
    // var 변수명 = 값; - 선언 + 초기화 동시
    // 변수가 초기화 하지 않는 경우에는 undefined 값이 들어 있음.
    



// bool = boolean  = True/False   
// stop(true, false) - 기본값
//   옵션1 : boolClearQueue - 앞에 발생한 큐를 다 지운다
//   옵션2 : boolJumpToEnd - 마지막 상태로 정지
    