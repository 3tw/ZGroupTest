$(document).ready(function () {
	const $menuButton = $("#menu-icon");
	const $desktopMenuButton = $("#desktop-menu");
	const $desktopXButton = $("#desktop-x");
	const $breakPoint = window.matchMedia("(max-width: 920px)");
	const $smallScreen = window.matchMedia("(max-width: 450px)");
	
	// Mobile: open & close menu
	function openMenu() {
		$(".menu-content").show().animate({ opacity: 1 }, 300);
		$(".mobile-icons").show().animate({ opacity: 1 }, 300);
		$("#menu").slideDown(350, function () {
			$(this).css("display", "flex")
		});
	};
	function closeMenu() {
		$(".menu-content").animate({ opacity: 0 }, 250);
		$(".mobile-icons").animate({ opacity: 0 }, 250);
		setTimeout(function () {
			$("#menu").slideUp(350);
			$(".menu-content").hide();
			$(".mobile-icons").hide();
			$("#mobile-menu").parent().find("li .toggle").removeClass("active-menu");
			$("#mobile-menu").parent().find("ul.inner").removeClass("show").slideUp(350);
		}, 200)
	};
	
	// Desktop: open & close menu
	function openDesktopMenu() {
		$(".level-1.inner").slideDown(350);
		$(".level-1.inner").find("ul.inner").slideDown(350);
		$("#desktop-x").css("display", "inline-block");
	};
	function closeDesktopMenu() {
		$(".level-1.inner").slideUp(350);
		$("#desktop-x").css("display", "none");
	};
	
	// change image src
	function shiftImage(smallScreen) {
		if (smallScreen.matches) {
			$(".image-container img").attr("src", "./assets/images/main-m.jpg")
		} else {
			$(".image-container img").attr("src", "./assets/images/main-d.jpg")
		}
	};
	
	// remove style from HTML element
	function removeHtmlStyle(breakPoint) {
		// if (!breakPoint.matches) {
		// 	$("#menu, .menu-content, .mobile-icons, .level-1.inner").removeAttr("style");
		// }
		$("#menu, .menu-content, .mobile-icons, .level-1.inner, #desktop-x").removeAttr("style");

	}
	
	// Event listeners
	// Mobile
	$(".toggle").click(function (e) {
		e.preventDefault();
		if ($breakPoint.matches) {
			if ($(this).next().hasClass("show")) {
				$(this).next().removeClass("show").slideUp(350);
				$(this).removeClass("active-menu");
				if ($(this).next().hasClass("level-2")) {
					$(this).parent().parent().prev().addClass("active-menu");
				}
			}
			else if (!$(this).hasClass("final-link")) {
				$(this).parents().find("li .toggle").removeClass("active-menu");
				$(this).parent().parent().find("ul.inner").removeClass("show").slideUp(350);
				$(this).next().toggleClass("show").slideToggle(350);
				$(this).addClass("active-menu");
			}
		}
	});
	
	$menuButton.click(function () {
		if ($(this).hasClass("open")) {
			closeMenu()
		} else { 
			openMenu()
		};
		$(this).toggleClass("open");
	});
	
	//Desktop
	$desktopMenuButton.click(function() {
		if ($(this).hasClass("open")) {
			closeDesktopMenu();
		} else {
			openDesktopMenu();
		};
		$(this).toggleClass("open");
	});
	$desktopXButton.click(function() {
		closeDesktopMenu();
		$("#desktop-menu").toggleClass("open");
	})
	// Media queries
    if (matchMedia){
		// close menus
		$breakPoint.addListener(function() {
			if ($menuButton.hasClass("open")) {
				console.log(2)
				$("#mobile-menu").parent().find(".toggle").removeClass("active-menu");
				$("#mobile-menu").parent().find("ul.inner").removeClass("show");
				$menuButton.toggleClass("open");
			}
			else if ($desktopMenuButton.hasClass("open")) {
				$desktopMenuButton.toggleClass("open");
			}
			
		});
		// remove menu styles
		$breakPoint.addListener(removeHtmlStyle);
		removeHtmlStyle($breakPoint);
		// change image
		$smallScreen.addListener(shiftImage);
		shiftImage($smallScreen);
    };
});