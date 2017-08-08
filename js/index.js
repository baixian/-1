/**
 * Created by hama on 2017/7/31.
 */
$(function(){
    /*顶部的鼠标移入颜色变化*/
    //1.发生的目标元素 a
    //2.什么事件 mouseover,mouseout
    //3.改变链接颜色
    $('.top a').mouseover(function(event){
        $(this).css('color','#fff');
    }).mouseout(function(){
        $(this).css('color','#a4b094');
    })
    $('.shopCar').mouseover(function(){
        $(this).css({color:'#FF6700',background:'#fff'});
        $('.goods').stop(true,false).slideDown();
    }).mouseout(function(){
        $(this).css({color:'#a4b094',background:'#424242'});
        $('.goods').stop(true,false).slideUp();
    });
    var flag = true;
    /*表单的输入框移入效果*/
    $('.ser1').mouseover(function(){
       if(flag){
           $('.ser1 input').css('border','1px solid #000');
           $('.ser2').css('border','1px solid #000').css('borderLeft','none');
       }
    }).mouseout(function(){
       if(flag){
           $('.ser1 input').css('border','1px solid #ccc');
           $('.ser2').css('border','1px solid #ccc').css('borderLeft','none');
       }
    })
    /*热门搜索的移入效果*/
    $('.hot a').mouseover(function(){
        $(this).css({
            'color':'#fff',
            'background':'orangered'
        })
    }).mouseout(function(){
        $(this).css({
            'color':'#757575',
            'background':'#eee'
        })
    })
    /*按钮移入后的效果*/
    $('.ser2').mouseover(function(){
        if(flag){
            $('.ser1 input').css({
                'border':'1px solid #000',
                'border-right':'none'
            });
            $(this).css({
                'background':'orangered',
                'color':'#fff',
                'border':'none'
            })
        }
    }).mouseout(function(){
       if(flag){
           $('.ser1 input').css('border','1px solid #ccc');
           $(this).css({
               'background':'#fff',
               'color':'#000',
               'border':'1px solid #ccc',
               'border-left':'none'
           })
       }
    })
    /*表单获取焦点的时候*/
    $('.ser1 input').focus(function(){
        flag = false;
        $(this).css('border-color','orangered');
        $('.ser2').css('border-color','orangered');
        $('.keywordsList').show().css('border-color','orangered');
    }).blur(function(){
        flag = true;
        $(this).css('border-color','#ccc');
        $('.ser2').css('border-color','#ccc');
        $('.keywordsList').hide().css('border-color','#ccc');
    })
    /*导航效果开始*/
    $('.nav li').mouseover(function(){
        $(this).children('a').css('color','#FF6700');
        if($(this).index() < 7){
            $('.select').removeClass('hide');
            $('.select').slideDown().finish();
            $('.select').find('ul').addClass('hide');
            $('.select').find('ul').eq($(this).index()).removeClass('hide');
        }
    }).mouseout(function(){
        $(this).children('a').css('color','#000');
    })
    $('.nav').mouseout(function(){
        $('.select').slideUp();
    })
    $('.select').find('ul').mouseover(function(){
        $('.select').slideDown().finish() //停止当前动画和动画队列
    }).mouseout(function(){
        $('.select').slideUp()
    })
    /*轮播图的效果*/
    var num = 0;
    var timer;
    timer = setInterval(autoplay,5000)
    $('.round li').mouseover(function(){
        clearInterval(timer);
        num = $(this).index();
        displayImg();
    })
    $('.banner').mouseover(function(){
        clearInterval(timer);
    }).mouseout(function() {
        timer = setInterval(autoplay, 5000)
    });
    $('.direcL').click(function(){
        //上一张
        clearInterval(timer);
        num = num - 1;
        if(num < 0){
            num = 4;
        }
        displayImg();
    })
    $('.direcR').click(function(){
        //下一张
        clearInterval(timer);
        num = num + 1;
        if(num > 4){
            num = 0;
        }
        displayImg();
    })
    function displayImg(){
        $('.round li').eq(num).css('background','orange').siblings().css({
            'background':"#000",
            'opacity':'0.5'
        });
        $('.banner > img').eq(num).removeClass('hide').siblings('img').addClass('hide');
    }
    function autoplay (){
        num ++;
        if(num > 4){
            num = 0;
        }
        displayImg();
    }
    /*隐藏的导航*/
    $('.navL li').mouseover(function(){
        $(this).css('background','#ff6700');
        $('.navHide').removeClass('hide');
        $('.ulHide').addClass('hide');
        $('.ulHide').eq($(this).index()).removeClass('hide');
    }).mouseout(function(){
        $(this).css('background','transparent');
    })
    /*鼠标移出二级导航的范围后，让它消失*/
    $('.navL').mouseout(function(){
        $('.navHide').addClass('hide');
    })
    /*用户移入三级导航的时候，也要让它显示*/
    $('.ulHide').mouseover(function(){
        $('.navHide').removeClass('hide');
        $('.navL li').eq($(this).index()).css('background','#ff6700');
    }).mouseout(function(){
        $('.navHide').addClass('hide');
        $('.navL li').eq($(this).index()).css('background','transparent');
    });
    //小米明星到滚动
    setInterval(star,2000)
    function star() {
        if(flag == true){
            $('.starPro .scroll').css('left','-1226px');
            flag = false
        }else {$('.starPro .scroll').css('left','0');
            flag = true}
    }
    //左
    $('.starPro .next').click(function () {
        $(' .starPro .scroll').css('left','-1226px')
    })
    //右
    $('.starPro .prev').click(function () {
        $('.starPro .scroll').css('left','0')
    })
    //硬件阴影和热评产品阴影
    $('.product1 li').mouseover(function(){
        $(this).css({marginTop:'12px',boxShadow:'0 0 28px #aaa'});
    }).mouseout(function(){
        $(this).css({marginTop:'14px',boxShadow:'none'});
    });
    $('.productYJ li').add('.hotList > li').mouseover(function(){
        $(this).css({marginTop:'12px',boxShadow:'0 0 28px #aaa'});
    }).mouseout(function(){
        $(this).css({marginTop:'14px',boxShadow:'none'});
    });
    //右边li阴影
    $('.ProLi > li').mouseover(function () {
        shadow();
    }).mouseout(function () {
        shadow();
    })
    function shadow() {
        $('.ProLi>li').mouseover(function(){
            if($(this).index()!=7){
                $(this).css({marginTop:'12px','box-shadow':'0px 0px 28px #aaa'});
            }
        }).mouseout(function(){
            if($(this).index()!=7){
                $(this).css({marginTop:'14px','box-shadow':'none'});
            }
        });
    }
    //最后一个li特效和左边两个li
    $('.twoRow li').add('.productL >li').mouseover(function(){
        if($(this).index()==0){
            $(this).css({marginTop:'12px',boxShadow:'0 0 30px #aaa'});
            $(this).next().css('marginTop','16px');
        }
        else{
            $(this).css({marginTop:'12px',boxShadow:'0 0 30px #aaa'});
        }
    }).mouseout(function(){
        if($(this).index()==0){
            $(this).css({marginTop:'14px',boxShadow:'0 0 30px #aaa'});
            $(this).next().css('marginTop','14px');
        }
        else{
            $(this).css({marginTop:'14px',boxShadow:'none'});
        }
    });
    //评价特效
    $('.ProLi>li').mouseover(function(){
        $(this).find('.slideDiv').stop(true,false).slideDown('fast');
    }).mouseout(function(){
        $(this).find('.slideDiv').stop(true,false).slideUp('fast');
    });
    //三个tab切换
    function tab(listn) {
        $(listn).css({
            'color':'#ff6700',
            'border-bottom':'2px solid #ff6700'
        }).siblings().css({
            'color':'#000',
            'border-bottom':'none'
        })
    }
    $('.listn li').mouseover(function () {
        tab(this);
        $(this).parents('.list1226').children('.productR').children('.ProLi').eq($(this).index())
            .removeClass('hide').siblings('.ProLi').addClass('hide');
    })
    //为你推荐
    var n = 0;
    $('.recommend .next2').click(function () {
        ++n
        var stop = (n * 1226) + 'px'
        if(n < 4){
            $('.recommend .scroll2').css('left','-'+ stop)
        }else{
            n = 3
        }
        if(n==3){
            $(this).css('color','#dfdfe0')
        }
        $('.recommend .prev2').css('color','#b0b4bc')
    })
    $('.recommend .prev2').click(function () {
        n--
        var stop = (n * 1226) + 'px'
        if(n >= 0){
            $('.recommend .scroll2').css('left','-' + stop)
        }else{
            n = 0;
        }
        if(n==0){
            $(this).css('color','#dfdfe0')
        }
        $('.recommend .next2').css('color','#b0b4bc')
    })
    $('.scroll2 > li').mouseover(function () {
        $(this).css({marginTop:'12px'});
    }).mouseout(function () {
        $(this).css({marginTop:'14px'});
    })
    //查看全部特效
    $('.toAll').mouseover(function(){
        $(this).find('a').css('color','#FF6700');
        $(this).find('i').css('color','#FF6700');
    }).mouseout(function(){
        $(this).find('a').css('color','#424242');
        $(this).find('i').css('color','#B0B0B0');
    });
    //内容翻页
    var num2=[0,0,0,0]
    var index=0;
    $('.contList > li').mouseover(function() {
        index = $(this).index();
        $(this).find('.p2').css('opacity','1')
        $('.contList li').css({
            'box-shadow':'',
            'margin-top':'0'
        })
    }).mouseout(function() {
        $(this).find('.p2').css('opacity','0')
        $('.contList li').css({
            'box-shadow':'',
            'margin-top':'0'
        })
    })
    $('.contList > li .l2').click(function() {
        if(num2[index] > 0) {
            num2.splice(index,1,num2[index]-1);
            $('.contBox').eq(index).find('li').eq(num2[index]).show().siblings().hide();
            $('.round2').eq(index).find('p').eq(num2[index]).css({border:'2px solid #ff6700', background:'#fff'}).siblings().css({border:'2px solid #fff', background:'#b0b0b0'});
        }
    })
    $('.contList > li .r2').click(function() {
        if(num2[index] < 3) {
            num2.splice(index,1,num2[index]+1);
            console.log(num2)
            $('.contBox').eq(index).find('li').eq(num2[index]).show().siblings().hide();
            $('.round2').eq(index).find('p').eq(num2[index]).css({border:'2px solid #ff6700', background:'#fff'}).siblings().css({border:'2px solid #fff', background:'#b0b0b0'});
        }
    })
    //圆圈翻页
    $('.round2 p').click(function() {
        num2[index]=$(this).index();
        $('.contBox').eq(index).find('li').eq(num2[index]).show().siblings().hide();
        $('.round2').eq(index).find('p').eq(num2[index]).css({border:'2px solid #ff6700', background:'#fff'}).siblings().css({border:'2px solid #fff', background:'#b0b0b0'});
    }).mouseover(function() {
        if(num2[index] != $(this).index())
            $(this).css('background','#ff6700')
    }).mouseout(function() {
        if(num2[index] != $(this).index())
            $(this).css('background','#b0b0b0')
    })
    $('.goTo').mouseover(function() {
        $(this).css({'background': $(this).css('color'),'color':'#fff'})
    }).mouseout(function() {
        $(this).css({'background': '#fff','color': $(this).parent().css('color')})
    })
    //视频特效
    $('.videoList li').mouseover(function(){
        $(this).css({marginTop:'12px',boxShadow:'0 0 18px #aaa'});
    }).mouseout(function(){
        $(this).css({marginTop:'14px',boxShadow:'none'});
    });
    $('.videoList li>img').mouseover(function(){
        $(this).next('.icon-bofang').css('color','#ff6700');
    }).mouseout(function(){
        $(this).next('.icon-bofang').css('color','#fff');
    });
    $('.icon-bofang').mouseover(function(){
        $(this).css('color','#ff6700');
    })
})