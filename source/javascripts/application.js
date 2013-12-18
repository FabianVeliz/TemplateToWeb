(function($) {
  window.ttw = {}
  ttw.behaviors = {}

  $(document).on('ready', function() {
    $.each(ttw.behaviors, function() {
      this.init();
    })
  })
})(jQuery)
