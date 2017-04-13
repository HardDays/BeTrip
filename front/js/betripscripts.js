+function ($) {
  'use strict';
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] > 2)) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3')
  }
}(jQuery);

function buildRoute() {
    from = $("#departure").val();
    to = $("#destination").val();
    range = $("#range").val();
    
    if (range == "") {
    	range = "0";
    }

    categories = [range, $("#arch_type").prop('checked'), $("#park_type").prop('checked'), $("#water_type").prop('checked'), 
    				$("#art_type").prop('checked'), $("#mountains_type").prop('checked')];
    alert(categories);
}