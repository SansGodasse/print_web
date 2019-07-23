function PasteHandler(printerPreviewElement, pasteAreaElement) {

	let pasteHandler = {

		pasteAreaElement: null,
		printerPreviewElement: null,

		init: function (printerPreviewElement, pasteAreaElement) {

			/**
			 * Insert a string in a string
			 */
			String.prototype.insert = function (index, stringToInsert) {

				let firstPart = this.substring(0, index);
				let lastPart = this.substring(index, this.length);

				return firstPart + stringToInsert + lastPart;
			};

			pasteHandler.printerPreviewElement = printerPreviewElement;

			pasteHandler.pasteAreaElement = pasteAreaElement;
			pasteHandler.pasteAreaElement.addEventListener('keyup', pasteHandler.refreshPrinterPreview);
			pasteHandler.pasteAreaElement.addEventListener('paste', pasteHandler.handlePaste);
		},


		/**
		 * Main function to handle pasted content
		 */
		handlePaste: function (evt) {

			let stringsToRemove = [
					'\n',
					'\n',
					'<!--StartFragment-->',
					'<!--EndFragment-->',
					'<html>',
					'</html>',
					'<body>',
					'</body>'
				],
				pasteAreaElt = document.getElementById("paste-area"),
				pasteAreaContent = pasteAreaElt.value,
				pasteContent = catchPaste(evt);

			pasteContent = stripContent(pasteContent, stringsToRemove);

			let caretPosition = this.selectionStart;

			pasteAreaElt.value = pasteAreaContent.insert(caretPosition, pasteContent);

			/**
			 * Catch the paste data to keep html tags
			 */
			function catchPaste(evt) {

				// Prevent the default pasting event and stop bubbling
				evt.preventDefault();
				evt.stopPropagation();

				// Get the clipboard data
				let content = (evt.clipboardData || window.clipboardData).getData('text/html');

				if (!content) {
					content = (evt.clipboardData || window.clipboardData).getData('text/plain');
				}

				return content;
			}

			/**
			 * Remove strings from the paste content
			 */
			function stripContent(pasteContent, stringsToRemove) {

				for (let i = 0, size = stringsToRemove.length; i < size; i++) {
					pasteContent = pasteContent.replace(stringsToRemove[i], '');
				}

				return pasteContent;
			}
		},

		/**
		 * Fill the printer preview element with the paste area content
		 *
		 */
		refreshPrinterPreview: function () {

			pasteHandler.printerPreviewElement.innerHTML = pasteHandler.pasteAreaElement.value;
		}
	};

	pasteHandler.init(printerPreviewElement, pasteAreaElement);

	return pasteHandler;
}
