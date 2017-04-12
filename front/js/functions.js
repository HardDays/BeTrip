/* Sticky nav*/
$(window).scroll(function(){
    'use strict';
    if ($(this).scrollTop() > 1){  
        $('header').addClass("sticky");
    }
    else{
        $('header').removeClass("sticky");
    }
});
$(window).scroll();

/* Accordion*/	
function toggleChevron(e) {
	'use strict';
    $(e.target)
        .prev('.panel-heading')
        .find("i.indicator")
        .toggleClass('icon_plus_alt2 icon_minus_alt2');
}
$('.panel-group').on('hidden.bs.collapse shown.bs.collapse', toggleChevron);

/* Video modal dialog + Parallax + Scroll */
$(function () {
'use strict';

/* Animation on scroll */
new WOW().init();

$('.video').magnificPopup({type:'iframe'});	/* video modal*/
$('.parallax_window_in').parallax({}); /* Parallax modal*/
$('.magnific-gallery').each(function() { /* Gallery images modal*/
    $(this).magnificPopup({
        delegate: 'a', 
        type: 'image',
        gallery:{enabled:true}
    });
}); 
 /* Top drodown prevent close*/
$('.dropdown-menu').on("click",function(e) {e.stopPropagation();}); 

/* Cat nav onclick active */		
var cat_nav = $("#cat_nav").find("li a");
cat_nav.on('click', function(){
	'use strict';
    cat_nav.removeClass('active');
    $(this).addClass('active');
});

/* Tooltip*/	
$('.tooltip-1').tooltip({html:true});

/* Box subscribe onclick active */	
var box_subscribe = $("#box_subscribe").find("ul li a");
box_subscribe.on('click', function(){
	'use strict';
    box_subscribe.removeClass('active');
    $(this).addClass('active');
});

/* Collapse filter close on mobile */	
var collapsefilters = $("#filters_col").find(".collapse");	
if( $(this).width() < 991 )
{
collapsefilters.removeClass('in');
collapsefilters.addClass('out');
}
else
{
collapsefilters.removeClass('out');
collapsefilters.addClass('in');
}

/* Hamburger icon*/
var toggles = document.querySelectorAll(".cmn-toggle-switch"); 
  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };
  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
    });
  };
});	

/* Quantity input incrementer */	
    $('.qtyplus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('name');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
            $('input[name='+fieldName+']').val(currentVal + 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(1);
        }
    });
    // This button will decrement the value till 0
    $(".qtyminus").click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('name');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            $('input[name='+fieldName+']').val(currentVal - 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });
	
/* Scroll to detail page form */	
   $('.box_info a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            var target = this.hash;
            var $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top -80
            }, 600, 'swing', function () {
                window.location.hash = target;
            });
        });