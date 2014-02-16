
function resumeGame() {
	gameInProgress = true;
	hideElement(pauseScreen_doc);
}

function backToMenu() {
	game.clearScene();
	game = null;
	showElementAndHideNav(menu_doc);
}

function hideAllNav() {
	for (var i = 0; i < nav_items.length; i++) {
		hideElement(nav_items[i]);
	}
}

function hideElement(element) {
	element.style.display = "none";
}

function showElement(element) {
	element.style.display = "";
}

function showElementAndHideNav(element) {
	hideAllNav();
	showElement(element);
}