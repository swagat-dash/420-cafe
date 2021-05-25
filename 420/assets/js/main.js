(function ($) {
  "user strict";

  $(document).ready(function() {
    // preloader
  $(".preloader").delay(500).animate({
    "opacity" : "0"
  }, 500, function() {
    $(".preloader").css("display","none");
  });
  // nice-select
  $('select').niceSelect();
  background();
});

$(window).on('load', function() {
})

/*---------------====================
     11.WOW Active
  ================-------------------*/

  if ($('.wow').length) {
    var wow = new WOW({
      boxClass: 'wow',
      // animated element css class (default is wow)
      animateClass: 'animated',
      // animation css class (default is animated)
      offset: 0,
      // distance to the element when triggering the animation (default is 0)
      mobile: false,
      // trigger animations on mobile devices (default is true)
      live: true // act on asynchronously loaded content (default is true)

    });
    wow.init();
  }

//Create Background Image
function background() {
  var img = $('.bg_img');
  img.css('background-image', function () {
    var bg = ('url(' + $(this).data('background') + ')');
    return bg;
  });
}

setInterval(function(){ 
  $(".banner-group-shape").addClass("active")
}, 1000);

  var fixed_top = $(".header-section");
  $(window).on("scroll", function(){
      if( $(window).scrollTop() > 500){  
          fixed_top.addClass("animated fadeInDown header-fixed");
      }
      else{
          fixed_top.removeClass("animated fadeInDown header-fixed");
      }
  });

  /* ---------------------------------------------
            ## Draw Count Down
        --------------------------------------------- */
          
          var $offerCountdown5 = $(".draw-countdown");
          if ($offerCountdown5.length) {
              $offerCountdown5.each(function() {
                  var jc_year = parseInt( $(this).attr("data-year"));
                  if( !jc_year ) jc_year = 1;
                  var jc_month = parseInt( $(this).attr("data-month"));
                  if( !jc_month ) jc_month = 1;
                  var jc_day = parseInt( $(this).attr("data-day"));
                  if( !jc_day ) jc_day = 1;
                  var jc_hour = parseInt( $(this).attr("data-hour"));
                  if( !jc_hour ) jc_hour = 1;


                  $.syotimerLang.neng = {
                    second: ['sec','sec'],
                    minute: ['min', 'min'],
                    hour: ['hrs', 'hrs'],
                    day: ['days', 'days'],
                };

                  $offerCountdown5.syotimer({
                      lang: 'neng',
                      year: jc_year,
                      month: jc_month,
                      day: jc_day,
                      hour: jc_hour,
                      minute: 59
                  }); 
              }); 
          }

  /*---------------------------------------------------
                type text
        ----------------------------------------------------*/
        $(".text-typed").each(function () {
          var $this = $(this);
          $this.typed({
              strings: $this.attr('data-elements').split(','),
              typeSpeed: 100, // typing speed
              backDelay: 3000 // pause before backspacing
          });
      });

  // navbar-click
  $(".navbar li a").on("click", function () {
    var element = $(this).parent("li");
    if (element.hasClass("show")) {
      element.removeClass("show");
      element.find("li").removeClass("show");
    }
    else {
      element.addClass("show");
      element.siblings("li").removeClass("show");
      element.siblings("li").find("li").removeClass("show");
    }
  });

  //pricing-tab-switcher

  $('.pricing-tab-switcher').on('click', function () {
    $(this).toggleClass('active');

    $('.pricing-item-area').toggleClass('change-subs-duration');
});

  $('.popup-youtube').magnificPopup({
    type: 'video'
  });
  $('.image-popup').magnificPopup({
    type: 'image'
  });

  // scroll-to-top
  var ScrollTop = $(".scrollToTop");
  $(window).on('scroll', function () {
    if ($(this).scrollTop() < 500) {
        ScrollTop.removeClass("active");
    } else {
        ScrollTop.addClass("active");
    }
  });

  //Search
  $(document).on('click', '.search-bar, .skip', function() {
    $('.header-form').toggleClass('active');
  });
  $(document).on('click', '.ellipsis-bar', function() {
    $('.header-top-area').toggleClass('active');
    $('.overlay').addClass('active');
  })

  //Register
  $(document).on('click', '.table-bar, .close', function() {
    $('.table-form').toggleClass('active');
  });
  $(document).on('click', '.ellipsis-bar', function() {
    $('.header-top-area').toggleClass('active');
    $('.overlay').addClass('active');
  })

  //Login
  $(document).on('click', '.header-cart, .stop', function() {
    $('.cart-form').toggleClass('active');
  });
  $(document).on('click', '.ellipsis-bar', function() {
    $('.header-top-area').toggleClass('active');
    $('.overlay').addClass('active');
  })

  //Register
  $(document).on('click', '.info, .end', function() {
    $('.info-form').toggleClass('active');
  });
  $(document).on('click', '.ellipsis-bar', function() {
    $('.header-top-area').toggleClass('active');
    $('.overlay').addClass('active');
  })

  //Mobile Menu
  $(".mobile-nav-toggle").on('click', function () {
    $(this).toggleClass('active');
    $(".fixed-header").toggleClass('mobile-menu-active');
});

//menu bar
$('.food-icon').on('click', function () {
  $(this).toggleClass('active');
$('.cart-plus-minus').toggleClass('active wow');
})

//menu bar
$('.collapse-bar').on('click', function () {
  $(this).toggleClass('active');
$('.banner-right-area').toggleClass('active wow');
})

//menu bar
$('.responsive-bar').on('click', function () {
  $(this).toggleClass('active');
$('.responsive-area').toggleClass('active wow');
})

  //Overlay On Click Functions
  $(document).on('click', '.overlay', function () {
    $(this).removeClass('active');
    $('.header-bar').removeClass('active');
    $('.menu').removeClass('active');
    $('.header-top-area').removeClass('active');
  })

  $('.faq-wrapper .faq-title').on('click', function (e) {
    var element = $(this).parent('.faq-item');
    if (element.hasClass('open')) {
      element.removeClass('open');
      element.find('.faq-content').removeClass('open');
      element.find('.faq-content').slideUp(300, "swing");
    } else {
      element.addClass('open');
      element.children('.faq-content').slideDown(300, "swing");
      element.siblings('.faq-item').children('.faq-content').slideUp(300, "swing");
      element.siblings('.faq-item').removeClass('open');
      element.siblings('.faq-item').find('.faq-title').removeClass('open');
      element.siblings('.taq-item').find('.faq-content').slideUp(300, "swing");
    }
  });

  $('.faq-wrapper--style .faq-title').on('click', function (e) {
    var element = $(this).parent('.faq-item--style');
    if (element.hasClass('open')) {
      element.removeClass('open');
      element.find('.faq-content--style').removeClass('open');
      element.find('.faq-content--style').slideUp(300, "swing");
    } else {
      element.addClass('open');
      element.children('.faq-content--style').slideDown(300, "swing");
      element.siblings('.faq-item--style').children('.faq-content--style').slideUp(300, "swing");
      element.siblings('.faq-item--style').removeClass('open');
      element.siblings('.faq-item--style').find('.faq-title').removeClass('open');
      element.siblings('.taq-item--style').find('.faq-content--style').slideUp(300, "swing");
    }
  });

  $('.counter-number').counterUp({
    delay: 10,
    time: 5000,
    offset: 70,
    beginAt: 10,
    formatter: function (n) {
      return n.replace(/,/g, '.');
    }
  });

   /* ---------------------------------------------
            ## One Page Menu
        --------------------------------------------- */
          if ($('.navbar-toggle .list-group').length) {
              $('navbar-toggle .list-group').onePageNav({
                  currentClass: 'current',
                  changeHash: true,
                  scrollSpeed: 750,
                  scrollThreshold: 0.5
              });
          }

//Banner Slider
var swiper = new Swiper('.banner-slider', {
  pagination: {
      el: '.banner-pagination',
      clickable: true,
      renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
  },
  navigation: {
    nextEl: '.ruddra-next',
    prevEl: '.ruddra-prev',
  },
  // autoplay: {
  //     delay: 3000,
  //     speed: 2000,
  // },
  speed: 1000,
});

// slider
var swiper = new Swiper('.client-slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    speeds: 1000,
    delay: 4000,
  },
  speed: 1000,
  breakpoints: {
    991: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 1,
    },
  }
});

// slider
var swiper = new Swiper('.issue-wrapper', {
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: '.ruddra-next',
    prevEl: '.ruddra-prev',
  },
  // autoplay: {
  //   speeds: 2000,
  //   delay: 4000,
  // },
  speed: 2000,
  breakpoints: {
    991: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 1,
    },
  }
});

// slider
var swiper = new Swiper('.client-wrapper', {
  slidesPerView: 2,
  spaceBetween: 10,
  direction: 'vertical',
  autoplay: {
    speed: 2000,
    delay: 3000,
  },
  speed: 1000,
  breakpoints: {
    991: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 2,
    },
    575: {
      slidesPerView: 2,
    },
  }
});

var swiper = new Swiper('.team-slider', {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.ruddra-next',
    prevEl: '.ruddra-prev',
  },
  autoplay: {
    speeds: 1000,
    delay: 2000,
  },
  speed: 1000,
  breakpoints: {
    1199: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 2,
    },
    575: {
      slidesPerView: 1,
    },
  }
});

var swiper = new Swiper('.about-wrapper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    speeds: 1000,
    delay: 2000,
  },
  speed: 1000,
  breakpoints: {
    991: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 1,
    },
  }
});

var swiper = new Swiper('.brand-wrapper', {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    speeds: 1000,
    delay: 2000,
  },
  speed: 1000,
  breakpoints: {
    991: {
      slidesPerView: 3,
    },
    767: {
      slidesPerView: 2,
    },
    575: {
      slidesPerView: 2,
    },
  }
});

// slider
var swiper = new Swiper('.project-slider', {
  slidesPerView: 5,
  spaceBetween: 15,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    speeds: 1000,
    delay: 3000,
  },
  speed: 1000,
  breakpoints: {
    991: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 1,
    },
  }
});

var swiper = new Swiper('.food-slider', {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.ruddra-next',
    prevEl: '.ruddra-prev',
  },
  autoplay: {
    speeds: 1000,
    delay: 2000,
  },
  speed: 1000,
  breakpoints: {
    1199: {
      slidesPerView: 1,
    },
    991: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 1,
    },
    440: {
      slidesPerView: 1,
    },
  }
});
  
// init Isotope
var $grid = $('.grid').isotope({
  // options
  itemSelector: '.grid-item',
  // percentPosition: true,
    masonry: {
      columnWidth: '.grid-item'
    }
});
var $gallery = $(".grid").isotope({
      
});
// filter items on button click
$('.filter-btn-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
$('.filter-btn-group').on( 'click', 'button', function() {
$(this).addClass('active').siblings().removeClass('active');
});

//privacy left side menu
$('.privacy-sidebar li a').on('click', function (e) {
  var element = $(this).parent('li');
  if (element.hasClass('open')) {
    element.removeClass('open');
    element.find('li').removeClass('open');
    element.find('ul').slideUp(300, "swing");
  } else {
    element.addClass('open');
    element.children('ul').slideDown(300, "swing");
    element.siblings('li').children('ul').slideUp(300, "swing");
    element.siblings('li').removeClass('open');
    element.siblings('li').find('li').removeClass('open');
    element.siblings('li').find('ul').slideUp(300, "swing");
  }
})

//The Password Show
$('#show-pass-one').on('click', function() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
      x.type = "text";
  } else {
      x.type = "password";
  }
});

$('#show-pass-two').on('click', function() {
  var x = document.getElementById("myInputTwo");
  if (x.type === "password") {
      x.type = "text";
  } else {
      x.type = "password";
  }
});

$('#show-pass-three').on('click', function() {
  var x = document.getElementById("myInputThree");
  if (x.type === "password") {
      x.type = "text";
  } else {
      x.type = "password";
  }
});

//Form Slider
$('.account-control-button').on('click', function() {
  $('.account-area').toggleClass('change-form');
})

// progress bar
$(".progressbar").each(function(){
  $(this).find(".bar").animate({
    "width": $(this).attr("data-perc")
  },8000);
  $(this).find(".label").animate({
    "left": $(this).attr("data-perc")
  },8000);
});


//Odometer
if($(".counter-item").length) {
  $(".counter-item").each(function () {
    $(this).isInViewport(function (status) {
      if (status === "entered") {
        for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
          var el = document.querySelectorAll('.odometer')[i];
          el.innerHTML = el.getAttribute("data-odometer-final");
        }
      }
    });
  });
}

//Odometer
if($(".counter-item-two").length) {
  $(".counter-item-two").each(function () {
    $(this).isInViewport(function (status) {
      if (status === "entered") {
        for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
          var el = document.querySelectorAll('.odometer')[i];
          el.innerHTML = el.getAttribute("data-odometer-final1");
        }
      }
    });
  });
}

// faq Tab
var tabWrapper = $('.food-tab-area'),
tabMnu = tabWrapper.find('.tab-menu li'),
tabContent = tabWrapper.find('.tab-cont > .tab-item');
tabContent.not(':nth-child(1)').fadeOut(350);
tabMnu.each(function (i) {
$(this).attr('data-tab', 'tab' + i);
});
tabContent.each(function (i) {
$(this).attr('data-tab', 'tab' + i);
});
tabMnu.on('click', function () {
var tabData = $(this).data('tab');
tabWrapper.find(tabContent).fadeOut(350);
tabWrapper.find(tabContent).filter('[data-tab=' + tabData + ']').fadeIn(350);
});
$('.tab-menu > li').on('click', function () {
var before = $('.tab-menu li.active');
before.removeClass('active');
$(this).addClass('active');
});

//Isotope Masonary
// function galleryMasonary(){
//   $('.portfolio-wrapper').isotope({
//     itemSelector: '.portfolio-item',
//     masonry: {
//       columnWidth: 0,
//     }
//   });
// }

$('.remove-cart').on('click', function (e) {
  e.preventDefault();
  $(this).parent().parent().hide(300);
});
$('#cart-button').on('click', function (e) {
  e.preventDefault();
  $('.cart-sidebar-area').addClass('active');
  $('.body-overlay').addClass('active');
});
$('#body-overlay').on('click', function (e) {
  e.preventDefault();
  $('.cart-sidebar-area').removeClass('active');
  $('.body-overlay').removeClass('active');
});
$('.side-sidebar-close-btn').on('click', function (e) {
e.preventDefault();
$('.cart-sidebar-area').removeClass('active');
$('.body-overlay').removeClass('active');
});

$(".search-bar a").on('click', function(){
  $('.header-top-search-area').toggleClass('active');
});

// ------ cursor js ---------- //
var $circleCursor = $('.cursor');

function moveCursor(e) {
    var t = e.clientX + "px",
        n = e.clientY + "px";

    TweenMax.to($circleCursor, .2, {
        left: t,
        top: n,
        ease: 'Power1.easeOut'
    });
}
$(window).on('mousemove', moveCursor);

// simple zoom
function zoomCursor(e) {
    TweenMax.to($circleCursor, .1, {
        scale: 3,
        ease: 'Power1.easeOut'
    });
    $($circleCursor).removeClass('cursor-close');
}
$('a, .zoom-cursor').on('mouseenter', zoomCursor);

// close
function closeCursor(e) {
    TweenMax.to($circleCursor, .1, {
        scale: 3,
        ease: 'Power1.easeOut'
    });
    $($circleCursor).addClass('cursor-close');
}
$('.trigger-close').on('mouseenter', closeCursor);

// default
function defaultCursor(e) {
    TweenLite.to($circleCursor, .1, {
        scale: 1,
        ease: 'Power1.easeOut'
    });
    $($circleCursor).removeClass('cursor-close');
}

//privacy left side menu
$('.terms-sidebar li a').on('click', function (e) {
  var element = $(this).parent('li');
  if (element.hasClass('open')) {
    element.removeClass('open');
    element.find('li').removeClass('open');
    element.find('ul').slideUp(300, "swing");
  } else {
    element.addClass('open');
    element.children('ul').slideDown(300, "swing");
    element.siblings('li').children('ul').slideUp(300, "swing");
    element.siblings('li').removeClass('open');
    element.siblings('li').find('li').removeClass('open');
    element.siblings('li').find('ul').slideUp(300, "swing");
  }
})

/* ---------------------------------------------
		    ## Sidebar Script
		--------------------------------------------- */
      var w = $(window).width();
      var MarginTop = (w > 1199) ? 80 : 0;
      if ($('.team-sidebar').length) {
          $('.team-sidebar').theiaStickySidebar({
              'containerSelector': '.team-details-section',
              'additionalMarginTop': MarginTop,
              'minWidth': 992,
          });
      }

      var w = $(window).width();
      var MarginTop = (w > 1199) ? 80 : 0;
      if ($('.food-sidebar-item').length) {
          $('.food-sidebar-item').theiaStickySidebar({
              'containerSelector': '.food-section',
              'additionalMarginTop': MarginTop,
              'minWidth': 992,
          });
      }

      var w = $(window).width();
      var MarginTop = (w > 1199) ? 80 : 0;
      if ($('.food-sidebar-two').length) {
          $('.food-sidebar-two').theiaStickySidebar({
              'containerSelector': '.food-details-section',
              'additionalMarginTop': MarginTop,
              'minWidth': 992,
          });
      }

$('a, .zoom-cursor, .trigger-close, .trigger-plus').on('mouseleave', defaultCursor);

/* ---------------------------------------------
            ## Count Down
        --------------------------------------------- */
          if ($('.countdown').length) {
              $('.countdown').syotimer({
                  year: 2020,
                  month: 3,
                  day: 9,
                  hour: 20,
                  minute: 30
              }); 
          }
$(window).on('load', function() {
  galleryMasonaryTwo();
})

function galleryMasonaryTwo(){
  // filter functions
  var $grid = $(".grid");
  var filterFns = {};
  $grid.isotope({
      itemSelector: '.grid-item',
      masonry: {
        columnWidth: 0,
      }
  });

  // shop cart + - start here
  $(function () {
    var CartPlusMinus = $('.cart-plus-minus');
    CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
    CartPlusMinus.append('<div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function () {
      var $button = $(this);
      var oldValue = $button.parent().find("input").val();
      if ($button.text() === "+") {
        var newVal = parseFloat(oldValue) + 1;
      } else {
        // Don't allow decrementing below zero
        if (oldValue > 0) {
          var newVal = parseFloat(oldValue) - 1;
        } else {
          newVal = 1;
        }
      }
      $button.parent().find("input").val(newVal);
    });
});

  // color version change
  $('.template-version button').on('click', function(){
    $('.template-version').toggleClass('open');
  });

  // bind filter button click
  $('ul.filter').on('click', 'li', function () {
    var filterValue = $(this).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[filterValue] || filterValue;
    $grid.isotope({
      filter: filterValue
    });
  });
  // change is-checked class on buttons
  $('ul.filter').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'li', function () {
      $buttonGroup.find('.active').removeClass('active');
      $(this).addClass('active');
    });
  });
  }

})(jQuery);        