
let pasteAreaElt = document.getElementById("paste-area");

pasteAreaElt.addEventListener('keyup', fillPrintableArea);

pasteAreaElt.addEventListener('paste', handlePaste);

/**
 * Main function to handle paste content
 */
function handlePaste(evt) {

	var stringsToRemove = [
		'\n',
		'\n',
		'<!--StartFragment-->',
		'<!--EndFragment-->',
		'<html>',
		'</html>',
		'<body>',
		'</body>'
	];
	var pasteAreaElt = document.getElementById("paste-area"),
		pasteAreaContent = pasteAreaElt.value,
		pasteContent = catchPaste(evt);

	pasteContent = stripContent(pasteContent, stringsToRemove);

	var caretPosition = this.selectionStart;

	pasteAreaElt.value = pasteAreaContent.insert(caretPosition, pasteContent);

	/**
	 * Catch the paste data to keep html tags
	 */
	function catchPaste(evt) {

		// Prevent the default pasting event and stop bubbling
		evt.preventDefault();
		evt.stopPropagation();

		// Get the clipboard data
		var content = (evt.clipboardData || window.clipboardData).getData('text/html');
		if (!content) {
			content = (evt.clipboardData || window.clipboardData).getData('text/plain');
		}
		return content;
	}

	/**
	 * Remove strings from the paste content
	 */
	function stripContent(pasteContent, stringsToRemove) {

		for (var i = 0, size = stringsToRemove.length; i < size; i++) {
			pasteContent = pasteContent.replace(stringsToRemove[i], '');
		}

		return pasteContent;
	}
};

/**
 * Fill the printable area with the paste area content
 *
 */
function fillPrintableArea(evt) {

	var printableAreaElt = document.getElementById("printable-area");
	printableAreaElt.innerHTML = evt.target.value;
};

/**
 * Insert a string in a string
 */
String.prototype.insert = function (index, stringToInsert) {
	
	var firstPart = this.substring(0, index);
	var lastPart = this.substring(index, this.length);
	return firstPart + stringToInsert + lastPart;
};