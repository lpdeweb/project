

$(function () {
  $('#elevator').backTop();

  $(window).scroll(function () {
    if ($(this).scrollTop() >= 300) {
      $('.header-top').addClass('header-top__fixed');
    } else {
      $('.header-top').removeClass('header-top__fixed');
    }
  });

  $('.nav-more').hoverDisplay('.nav-more__hover');
  $('#plus').hoverDisplay('#plus_popup');


  // 注册登录
  var $register_btn = $('#header').find('.register');
  var $login_btn = $('#header').find('.login');
  var $user = $('#user');
  var $user_inner = $user.find('.user-inner');
  var $user_register = $user.find('.register');
  var $user_login = $user.find('.login');
  var $close_btn = $user.find('.close');
  var $switch_login = $user.find('.switch-login').find('a');
  var $switch_register = $user.find('.go-register').find('a');

  var user_h = 0;
  var register_h = $user_register.height();
  var login_h = $user_login.height();

  $register_btn.click(function () {
    $user.fadeIn();
    $user_register.css({height: register_h}).show();
    $user_login.css({height: 0}).hide();

    user_h = $user_inner.height();

    $user_inner.css({marginTop: -(user_h / 2)});

    return false;
  });

  $login_btn.click(function () {
    $user.fadeIn();
    $user_register.css({height: 0}).hide();
    $user_login.css({height: login_h}).show();

    user_h = $user_inner.height();

    $user_inner.css({marginTop: -(user_h / 2)});

    return false;
  });

  $close_btn.click(function () {
    $user.fadeOut();
  });

  $(document).click(function () {
    $user.fadeOut();
  });

  $user_inner.click(function () {
    return false;
  });

  $switch_login.click(function () {
    $user_register.animate({height: 0}, function () {
      $(this).hide();
    });

    $user_login.show().animate({height: login_h});
  });

  $switch_register.click(function () {
    $user_login.animate({height: 0}, function () {
      $(this).hide();
    });

    $user_register.show().animate({height: register_h});
  });
});



!(function ($, window, document, undefined) {

  $.fn.backTop = function () {
    var $elem = this;
    var $doc = $(document.body);
    var client_h = $(window).height();

    $elem.click(function () {
      $doc.animate({scrollTop: 0});
    });

    $(window).on('scroll', function () {
      if ($(this).scrollTop() >= client_h) {
        $elem.show();
      } else {
        $elem.hide();
      }
    });
  };

  $.fn.hoverDisplay = function (hoverElem) {
    var $oParent = this;
    var $disELem = $(hoverElem);
    var timer = null;

    $oParent.hover(function () {
      clearTimeout(timer);

      $disELem.show();
    }, function () {
      timer = setTimeout(function () {
        $disELem.hide();
      }, 600);
    });

    $disELem.hover(function () {
      clearTimeout(timer);

      $disELem.show();
    }, function () {
      timer = setTimeout(function () {
        $disELem.hide();
      }, 600);
    });
  };

})(window.jQuery, window, document);

// 图片起伏
  $('.onmose').mouseover(function() {
    this.style.marginTop='-10px';
    this.style.boxShadow='10px 10px 10px #666';
  });
  $('.onmose').mouseout(function(){
    this.style.marginTop='0';
    this.style.boxShadow='';
  });
  $(".chrome").click(function(){
    $(".chrome .inner").fadeToggle();
    // $(".chrome .arrow").toggleClass(
    //     function(){
    //       alert(1)
    //       $(".chrome .arrow").css("style","background: url(./images/cont/about_list_arrow.png) 0 0 no-repeat;")
    //     },function(){
    //       alert(2)
    //       $(".chrome .arrow").css("style","background: url(./images/cont/about_list_arrow.png) 0 -43px no-repeat;")
    //     }
  // )
  });
  $(".firfox").click(function(){
    $(".firfox .inner").fadeToggle();
  });
  $(".ie").click(function(){
    $(".ie .inner").fadeToggle();
  });
  $(".others").click(function(){
    $(".others .inner").fadeToggle();
  });
  $(document).ready(function () {
    //鼠标移入样式
    $(".title2").mouseover(function () {
      $(this).attr("style","background:#fafafa;");
    });
    //鼠标移开样式
    $(".title2").mouseout(function () {
      $(this).attr("style","background:#FFF;");
    });
  });
