$(document).ready(function () { 
    const $menuButton = $("#menu-icon");

    // open & close menu
    function openMenu() {
		$("#menu").slideDown(350, function () {
			$(this).css("display", "flex")
		  });
		$(".menu-content").animate({opacity:1}, 300);
		$(".info-icons").animate({opacity:1}, 300);
    };
    function closeMenu() {
		$(".menu-content").animate({opacity: 0}, 300);
		$(".info-icons").animate({opacity: 0}, 300);
		$("#menu").slideUp(300)
	};
	
	// expand items
	$(".toggle").click(function(e) {
		e.preventDefault();

		if ($(this).next().hasClass("show")) {
			$(this).next().removeClass("show");
			$(this).removeClass("active-menu");
			$(this).next().slideUp(350);
		} 
		else if (!$(this).hasClass("final-link")) {
			$(this).parent().parent().find("li .inner").removeClass("show");
			$(this).parent().parent().find("li .inner").slideUp(350);
			$(this).parents().find("li .toggle").removeClass("active-menu");
			$(this).addClass("active-menu");	
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