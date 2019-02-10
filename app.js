
var textAreaElt = document.getElementById("print-area");
var htmlAreaElt = document.getElementById("html-area");

textAreaElt.addEventListener('paste', function (evt) {
	pasteContent = catchPaste(evt);
	pasteContent = stripContent(pasteContent);
	htmlAreaElt.innerHTML = pasteContent;
	textAreaElt.textContent = pasteContent;
});
// window.addEventListener('paste', catchPaste);

/**
 * Catch the paste data to keep html tags
 * 
 * @param  {[type]} evt [description]
 * @return {[type]}     [description]
 */
function catchPaste(evt) {

	// Prevent the default pasting event and stop bubbling
	evt.preventDefault();
	evt.stopPropagation();

	// Get the clipboard data
	let pasteContent = (evt.clipboardData || window.clipboardData).getData('text/html');

	return pasteContent;
}

/**
 * Remove html and body tags
 * 
 * @param  {[type]} pasteContent [description]
 * @return {[type]}              [description]
 */
function stripContent(pasteContent) {

	pasteContent = pasteContent.replace('<html>', '');
	pasteContent = pasteContent.replace('</html>', '');
	pasteContent = pasteContent.replace('<body>', '');
	pasteContent = pasteContent.replace('</body>', '');

	return pasteContent;
}