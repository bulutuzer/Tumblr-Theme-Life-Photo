$(document).ready ->
 $(".imgLiquidFill").imgLiquid fill : true, horizontalAlign : "center", verticalAlign : "top"
 
 $("div.openCaption").addClass("displayNone")

	$("article.postImage").hover \
 	 -> $(this).find("div.openCaption").stop(true, true).fadeIn(),
 	 -> $(this).find("div.openCaption").stop(true, true).fadeOut()
 
 if not $.browser.webkit
  $('.tumblrSocialInfo').jScrollPane()

 $("article.postImage > div.caption").addClass("displayNone")

 $.fn.clickToggle = 
  (func1, func2) -> 
  	funcs = [func1, func2]
  	this.data('toggleclicked', 0)
  	this.click ->
  		data = $(this).data()
  		tc = data.toggleclicked
  		$.proxy(funcs[tc], this)()
  		data.toggleclicked = (tc + 1) % 2
  	return this

	$("article.postImage").clickToggle \
 	 -> $(this).find("div.caption").stop(true, true).fadeIn().removeClass("displayNone").css({ "position": "absolute", "z-index" : "9999", "width" : "100%", "height" : "100%" }); \
 	 	$(this).attr("data-hidden", "true"); \
	  if $(this).data("hidden") is true
	    $(this).find("div.openCaption").css("display", "none")
	  ,
 	 -> $(this).find("div.caption").stop(true, true).fadeOut().addClass("displayNone"); \
 	 	$(this).attr("data-hidden", "true"); \
        $(this).find("div.openCaption").removeClass("displayNone"); \
        $(this).find("div.openCaption").css("display", "block")