$(document).ready(function () { 
    const $menuButton = $("#menu-icon");

    // open & close menu
    function openMenu() {
		$("#menu").slideDown(500);
		$(".menu-content").animate({opacity:1}, 600);
		$(".contact-info").animate({opacity:1}, 600);
    };
    function closeMenu() {
		$(".menu-content").animate({opacity: 0}, 300);
		$(".contact-info").animate({opacity: 0}, 300);
		$("#menu").slideUp(500)


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