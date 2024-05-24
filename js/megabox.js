window.onload = function(){
    // 히트 오름차순 큰 => 작
    function fnHitAsc(item){
        item.sort(function(a,b){            
            return a.hit - b.hit;
        })
    }
    // 히트 내림차순 작 => 큰
    function fnHitDesc(item){
        item.sort(function(a,b){            
            return b.hit - a.hit;
        })
    }
        // 리뷰 오름차순 큰 => 작
        function fnReviewAsc(item){
            item.sort(function(a,b){            
                return a.review - b.review;
            })
        }
        // 리뷰 내림차순 작 => 큰
        function fnReviewDesc(item){
            item.sort(function(a,b){            
                return b.review - a.review;
            })
        }


    function fnAlert(msg){
        alert(msg);
    }
    function objClose(item){
        item.hide();
    }
    $('.btn-close-ad').click(function(){
        objClose($('.ad01'));
    })
    if($.cookie('cokPop')=='none'){
        objClose($('#main-popup'));
    }else{
        $('#main-popup').show();
    }
    $('#btn-popup-close').click(function(){
        if($('#chk-pop').is(':checked')){
            $.cookie('cokPop','none',{expires:1});
        } 
        objClose($('#main-popup'));
    });

    $('.btn-header').click(function(e){
        $('.sub-nav').hide();
        $('.dis-none').not($(this).next()).hide();
        $(this).next().toggle();
        $('.dt-nav .main-nav').removeClass('active');
        e.preventDefault();
    }) 

    $('.btn-login').click(function(){
        $('#login-form').show();            
        $('.dis-none').hide();
        $('body').addClass('lock');
    })

    $('#btn-login-close').click(function(){
        $('#login-form').hide();
        $('body').removeClass('lock');
    })

    $('.main-nav>li').mouseenter(function(){            
        $('.main-nav>li').not($(this)).children('.sub-nav').css({
            display:'none',
        });
        $(this).children('.sub-nav').css({
            display:'flex',
        })
        let idx = $('.main-nav>li').index($(this));
        if(idx!=4){
            $('.dt-nav .main-nav').addClass('active');
        }else{
            $('.dt-nav .main-nav').removeClass('active');
        }
    })
    $('.header').mouseleave(function(){
        $('.sub-nav').hide();
        $('.dt-nav .main-nav').removeClass('active');
    })
    
    $('#btn-set').click(function(){
        alert('로그인이 필요한 서비스입니다.');
        $('.m-nav').hide();
        location.href='./index.html';
    })
    $('#btn-m-nav-close').click(function(){            
        $('.m-nav').hide();
        $('body').removeClass('lock');
    })
    $('.btn-nav').click(function(){            
        $('.m-nav').show();
        $('body').addClass('lock');            
    })
    $('#btn-m-login').click(function(e){
        $('.logon-form').show();
        $('.m-nav').hide();
        $('body').addClass('lock');
        e.preventDefault();
    })
    $('#btn-all').click(function(){
        if($(this).text()=='전체메뉴 보기'){
            $('.m-nav-list02').css({
                display:'grid',
            })
            $(this).text('전체메뉴 닫기');
        }else{
            $('.m-nav-list02').css({
                display:'none',
            })
            $(this).text('전체메뉴 보기');
        }
    })
    
    let ww=$(window).width();
    if(ww<=359){
        fnAlert('지원하지 않는 기기입니다.');
    }
    $(window).resize(function(){
        ww=$(window).width();
        if(ww>=1100){
            $('.m-nav').hide();
        }           
    })
    $(document).keydown(function(e){
        if(e.keyCode==27){
            $('body').removeClass('lock');
            $('.logon-form').hide();
        }
    })

    $('.bnb li:last-child').click(function(e){
        let myConfirm = confirm('로그인후 사용가능한 기능입니다. 로그인 하시겠습니까?');
        if(myConfirm){
            $('.logon-form').show();
            $('body').addClass('lock');
        }
        e.preventDefault();
    })
}