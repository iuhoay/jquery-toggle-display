/*
 *
 * jQuery toggle display v 0.1
 * https://github.com/iuhoay/jquery-toggle-display
 *
 * Copyright 2013 iuhoay
 * released under the MIT license
 *
 */
;(function($) {

  $.fn.toggle_display = function() {
    return $(this).each(function(i, el) {
      $(el).on("click", $.proxy(function() {
        $($(this).data("toggle")).toggle();
        return false;
      }, this));
    });
  }

  $(function() {
    $(".toggle_display").toggle_display();
  });

})(jQuery);
