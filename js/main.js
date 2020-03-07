$(document).ready(function () { 
    const $menuButton = $("#menu-icon");

    // open & close menu
    function openMenu() {
		$("#menu").slideDown(400, function () {
			$(this).css("display", "flex")
		  });
		$(".menu-content").animate({opacity:1}, 300);
		$(".info-icons").animate({opacity:1}, 300);
    };
    function closeMenu() {
		$(".menu-content").animate({opacity: 0}, 300);
		$(".info-icons").animate({opacity: 0}, 300);
		$("#menu").slideUp(400)
	};
	
	// expand items
	$(".toggle").click(function(e) {
		e.preventDefault();


      if ($(this).next().hasClass("show")) {
          $(this).next().removeClass("show");
          $(this).next().slideUp(350);
	  } 
	  else {
        $(this).parent().parent().find("li .inner").removeClass("show");
        $(this).parent().parent().find("li .inner").slideUp(350);
        $(this).next().toggleClass("show");
        $(this).next().slideToggle(350);
	  }
  });
  
	// Event listeners
	$menuButton.click(openMenu);
	$menuButton.click(function(){
		if ($(this).hasClass("open"))
			closeMenu()
	}) ;
  
	$menuButton.click(function(){
		$(this).toggleClass('open');
	});
});