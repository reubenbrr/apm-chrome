function execute() {
	chrome.tabs.executeScript({
		file: '/resources/js/core.js'
	});
}

document.getElementById('load').addEventListener('click', execute);
