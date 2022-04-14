data1 =    $(".switcher-flag .dropdown-item:nth-of-type(1)").html()
           $(".switcher-flag .dropdown .btn").html(data1)
       $(".switcher-flag .dropdown-item").click(function(){
                                             
                                             var data = $(this).html()
       
            $(".switcher-flag .dropdown .btn").html(data)
            $(".switcher-flag .dropdown .btn").removeClass("color-sel")
           
                                             })
$('.main-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    dotsContainer: '#carousel-custom-dots',
    dots: true,
    navText: [ '<i class="icon-arrow-thin-left"></i>','<i class="icon-arrow-thin-right"></i>'],
})
$('.category-slider').owlCarousel({
    loop: false,
    margin: 20,
    nav: true,
    dots: false,
    navText: ['<i class="icon-next-1"></i>', '<i class="icon-next"></i>'],
    responsive: {
        0: {
            items: 1,
        },
        767: {
            items: 2,
        },
        992: {
            items: 3,
        }

    }
})
$('.form-carousel').owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    navText: ['<i class="icon-next-1"></i>', '<i class="icon-next"></i>'],
    dots: false,
    responsive: {
        0: {
            items: 1,
            stagePadding: 0,
        },
        420: {
            items: 2,
        },
        577: {
            items: 3,
        },
        767: {
            items: 4,
        },
        992: {
            items: 6,
            stagePadding: 25,
        }
    }
})
$('.product-slider').owlCarousel({
    loop: true,
    margin: 20,
    stagePadding: 10,
    nav: true,
    dots: false,
    navText: ['<i class="icon-next-1"></i>', '<i class="icon-next"></i>'],
    responsive: {
        0: {
            items: 1,
        },
        577: {
            items: 2,
        },
        768: {
            items: 3,
        },
        992:{
            items: 4,
        }
    }

})
$('.offer-slider').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    items: 1,
    navContainer: '#customNav',
    navText: ['<i class="icon-next-1"></i>', '<i class="icon-next"></i>'],

})
var sync1 = $('#sync1'),
    sync2 = $('#sync2'),
    duration = 300,
    thumbs = 4;

// Sync nav
sync1.on('click', '.owl-next', function () {
    sync2.trigger('next.owl.carousel')
});
sync1.on('click', '.owl-prev', function () {
    sync2.trigger('prev.owl.carousel')
});

$(document).ready(function() {

  var sync1 = $("#sync1");
  var sync2 = $("#sync2");
  var slidesPerPage = 3; //globaly define number of elements per page
  var syncedSecondary = true;

  sync1.owlCarousel({
    items : 1,
    smartSpeed: 1000, 
    nav: true,
    autoplay: false,
    dots: false,
    loop: true,
    rtl:true,
    navContainer: '#customnav',
    navText: ['<i class="icon-next-1"></i>', '<i class="icon-next"></i>'],
    responsiveRefreshRate : 200,
}).on('changed.owl.carousel', syncPosition);

  sync2
    .on('initialized.owl.carousel', function () {
      sync2.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
    items : slidesPerPage,
    dots: true,
    nav: true,
    loop:true,
    margin:15,
    stagePadding:20,
    smartSpeed: 1000,
    slideSpeed : 500,
    slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
    rtl:true,
    responsiveRefreshRate : 100
  }).on('changed.owl.carousel', syncPosition2);

  function syncPosition(el) {
    //if you set loop to false, you have to restore this next line
    //var current = el.item.index;
    
    //if you disable loop you have to comment this block
    var count = el.item.count-1;
    var current = Math.round(el.item.index - (el.item.count/2) - .5);
    
    if(current < 0) {
      current = count;
    }
    if(current > count) {
      current = 0;
    }
    
    //end block

    sync2
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = sync2.find('.owl-item.active').length - 1;
    var start = sync2.find('.owl-item.active').first().index();
    var end = sync2.find('.owl-item.active').last().index();
    
    if (current > end) {
      sync2.data('owl.carousel').to(current, 100, true);
    }
    if (current < start) {
      sync2.data('owl.carousel').to(current - onscreen, 100, true);
    }
  }
  
  function syncPosition2(el) {
    if(syncedSecondary) {
      var number = el.item.index;
      sync1.data('owl.carousel').to(number, 100, true);
    }
  }
  
  sync2.on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).index();
    sync1.data('owl.carousel').to(number, 300, true);
  });
});
$(document).ready(function(){
  $(".menu-mobile").click(function (e) {
            e.preventDefault();
            $("#mask").addClass('br-none');
            $("#menumobile").addClass("come-menumobile");
        });
        $("#mask").click(function () {
            $(this).removeClass('br-none');
            $("#menumobile").removeClass("come-menumobile");
            $(".sub-menu").removeClass("come-submenu");
        });
        $("#nomenumobile").click(function () {
            $("#mask").removeClass('br-none');
            $("#menumobile").removeClass("come-menumobile");
            $(".sub-menu").removeClass("come-submenu");
        });
        $("#menumobile .main-mm ul > .menu-item-has-children > a").append("<span class='childer'><i></i></span>");
        $("#menumobile .sub-menu").prepend("<div class='title-sub-head'><span class='sub-closer float-left'><i></i></span><strong class='float-right title-subcome'>بازگشت</strong></div>");
        $("#menumobile .sub-closer").click(function () {
            $(this).parent().parent().removeClass('come-submenu');
        });
        $("#menumobile .childer").click(function (e) {
            e.preventDefault();
            var textmenu = $(this).parent().text();
            $(this).parent().next().addClass('come-submenu');
            $(this).parent().next().find('.title-sub-head').find('.title-subcome').html(textmenu);
        });
});
