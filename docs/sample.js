$(function(){
  $(window).on('load',function(){
      $('.loader').delay(300).fadeOut(300);
      $('.loader-bg').delay(400).fadeOut(500);
  });
  setTimeout(function(){
      $('.loader-bg').fadeOut(300);
  },5000);
});

$(function(){
	$(window).scroll(function (){
		$('.js-fade').each(function(){
			var pos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > pos - windowHeight + 100){
				$(this).addClass('scroll');
			}
		});
	});
});

// スマホ・タブレットサイズ時のみ表示されるメニューの開閉ボタンを変数に格納。
const spMenuBtn = $("#spMenuBtn");

// メニューや開閉ボタンをラップしている要素を変数に格納。
const headerInner = $("#headerInner");

// 開閉ボタンをクリックすると発火。
spMenuBtn.click(function() {
  // ラップ要素にactiveというクラスを付与する。
  headerInner.toggleClass("active");
});

$(function() {
  $('.question').click(function() {
    $(this).toggleClass('open');
    $(this).next().slideToggle();
    $('.question').not($(this)).next().slideUp();
    $('.question').not($(this)).removeClass('open');
  })
});

$(function () {
  　　$('#slick_slider').slick();
  });

  const modal = $("#js-modal");
const overlay = $("#js-overlay");
const close = $("#js-close");
const open = $("#js-open");

open.on('click', function () { //ボタンをクリックしたら
  modal.addClass("open"); // modalクラスにopenクラス付与
  overlay.addClass("open"); // overlayクラスにopenクラス付与
});

close.on('click', function () { //×ボタンをクリックしたら
  modal.removeClass("open"); // modalクラスからopenクラスを外す
  overlay.removeClass("open"); // overlayクラスからopenクラスを外す
});

$('.tab') .on ('click',function(){
  $('.tab,.panel').removeClass ('active');
  $(this).addClass('active');
  var index=$('.tab').index(this);
  $('.panel').eq(index).addClass('active');
})

$(function () {
  const pageTop = $("#page-top");
  pageTop.hide(); 
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) { 
      pageTop.fadeIn(); 
    } else {
      pageTop.fadeOut(); 
    }
  });
  pageTop.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0, 
      },
      500 
    );
    return false;
  });
});




