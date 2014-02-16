// Generated by CoffeeScript 1.7.1
(function() {
  $(document).ready(function() {
    $(".imgLiquidFill").imgLiquid({
      fill: true,
      horizontalAlign: "center",
      verticalAlign: "top"
    });
    $("div.openCaption").addClass("displayNone");
    $("article.postImage").hover(function() {
      return $(this).find("div.openCaption").stop(true, true).fadeIn();
    }, function() {
      return $(this).find("div.openCaption").stop(true, true).fadeOut();
    });
    if (!$.browser.webkit) {
      $('.tumblrSocialInfo').jScrollPane();
    }
    $("article.postImage > div.caption").addClass("displayNone");
    $.fn.clickToggle = function(func1, func2) {
      var funcs;
      funcs = [func1, func2];
      this.data('toggleclicked', 0);
      this.click(function() {
        var data, tc;
        data = $(this).data();
        tc = data.toggleclicked;
        $.proxy(funcs[tc], this)();
        return data.toggleclicked = (tc + 1) % 2;
      });
      return this;
    };
    return $("article.postImage").clickToggle(function() {
      $(this).find("div.caption").stop(true, true).fadeIn().removeClass("displayNone").css({
        "position": "absolute",
        "z-index": "9999",
        "width": "100%",
        "height": "100%"
      });
      $(this).attr("data-hidden", "true");
      if ($(this).data("hidden") === true) {
        return $(this).find("div.openCaption").css("display", "none");
      }
    }, function() {
      $(this).find("div.caption").stop(true, true).fadeOut().addClass("displayNone");
      $(this).attr("data-hidden", "true");
      $(this).find("div.openCaption").removeClass("displayNone");
      return $(this).find("div.openCaption").css("display", "block");
    });
  });

}).call(this);
