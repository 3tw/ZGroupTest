$(document).ready(function () {
	const $menuButton = $("#menu-icon");
	const $desktopMenuButton = $("#desktop-menu")
	const $desktopXButton = $("#desktop-x")

	// Mobile: open & close menu
	function openMenu() {
		$(".menu-content").css("display", "block");
		$(".mobile-icons").css("display", "block");
		$("#menu").slideDown(350, function () {
			$(this).css("display", "flex")
		});
		$(".menu-content").animate({ opacity: 1 }, 300);
		$(".mobile-icons").animate({ opacity: 1 }, 300);
	};
	function closeMenu() {
		$(".menu-content").animate({ opacity: 0 }, 250);
		$(".mobile-icons").animate({ opacity: 0 }, 250);
		setTimeout(function () {
			$("#menu").slideUp(350);
			$(".menu-content").css("display", "none");
			$(".mobile-icons").css("display", "none");
		}, 200)

	};
	function closeDesktop() {
		if($("#desktop-menu").hasClass("open")) {
			closeDesktopMenu();
			$("#desktop-menu").toggleClass("open");
		}
	}

	// Mobile: expand items
	$(".toggle").click(function (e) {
		e.preventDefault();

		if ($(this).next().hasClass("show")) {
			$(this).removeClass("active-menu");
			$(this).next().removeClass("show");
			$(this).next().slideUp(350);
			if ($(this).next().hasClass("level-2")) {
				$(this).parent().parent().prev().addClass("active-menu");
			}
		}
		else if (!$(this).hasClass("final-link")) {
			$(this).parents().find("li .toggle").removeClass("active-menu");
			$(this).addClass("active-menu");
			$(this).parent().parent().find("li .inner").removeClass("show");
			$(this).parent().parent().find("li .inner").slideUp(350);
			$(this).next().toggleClass("show");
			$(this).next().slideToggle(350);

		}
	});

	// Desktop
	function openDesktopMenu() {
		$(".level-1.inner").slideDown(350);
		$("#desktop-x").css("display", "block");
	}
	function closeDesktopMenu() {
		$(".level-1.inner").slideUp(350);
		$("#desktop-x").css("display", "none");
	}
	function closeMobile() { 
		if($("#menu-icon").hasClass("open")) {
			closeMenu();
			$("#menu-icon").toggleClass("open");
		}
	}

	// Event listeners
	// Mobile
	$menuButton.click(function () {
		if ($(this).hasClass("open")) {
			closeMenu();
			closeDesktop();
		} else {
			openMenu();
		}
		$(this).toggleClass("open");
	});
	//Desktop
	$desktopMenuButton.click(function() {
		if ($(this).hasClass("open")) {
			closeDesktopMenu();
			closeMobile()
		} else {
			openDesktopMenu();
		}
		$(this).toggleClass("open");
	});
	$desktopXButton.click(function() {
		closeDesktopMenu();
		closeMobile()
	})
	
});