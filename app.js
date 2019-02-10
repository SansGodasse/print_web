
var textAreaElt = document.getElementById("print-area");
var htmlAreaElt = document.getElementById("html-area");

textAreaElt.addEventListener('paste', catchPaste);
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

	pasteContent = pasteContent.replace('<html>', '');
	pasteContent = pasteContent.replace('</html>', '');
	pasteContent = pasteContent.replace('<body>', '');
	pasteContent = pasteContent.replace('</body>', '');

	evt.target.textContent = pasteContent;
}