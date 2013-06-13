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
