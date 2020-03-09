let preload = new Array();
	preload[0] = "./assets/images/main-m.jpg";
	preload[1] = "./assets/images/main-d.jpg";
	let loadedimages = new Array();
	for (let i = 0; i < preload.length; i++) {
		loadedimages[i] = new Image();
	loadedimages[i].src = preload[i];
}