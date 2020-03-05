$(document).ready(function () { 
    const $menuButton = $("#menu-button");
    const $closeButton = $("#close-button");
    const smallScreen = window.matchMedia("(max-width: 700px)");

    // refresh on top
    $(this).scrollTop(0);

    //media queries
    if (matchMedia){
        smallScreen.addListener(shiftHeadline);
        shiftHeadline(smallScreen);
    };

    // manage headlines
    function shiftHeadline(smallScreen) {
        const $smallHeadline = $(".small-headline");
        const $bigHeadline = $(".big-headline");
        if (smallScreen.matches) {
            $smallHeadline.addClass("active");
            $bigHeadline.removeClass("active");
        }
        else {
            $smallHeadline.removeClass("active");
            $bigHeadline.addClass("active");
    }
    };

    // button listeners
    $menuButton.click(openMenu);
    $closeButton.click(closeMenu);

    // open & close menu
    function openMenu() {
        $("#menu").width("100%");
    };
    function closeMenu() {
        $("#menu").width("0");
    };

    // expand items
    $(".toggle").click(function(e) {
        e.preventDefault();

      if ($(this).next().hasClass("show")) {
          $(this).next().removeClass("show");
          $(this).next().slideUp(350);
      } else {
        $(this).parent().parent().find("li .inner").removeClass("show");
        $(this).parent().parent().find("li .inner").slideUp(350);
        $(this).next().toggleClass("show");
        $(this).next().slideToggle(350);
      }
  });

});