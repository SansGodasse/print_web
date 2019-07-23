function WebPrinter(
    printerPreviewElement,
    pasteAreaElement,
    convertMarkdownButtonElement
) {

    let webPrinter = {
        printerPreviewElement: null,

        init: function (
            printerPreviewElement,
            pasteAreaElement,
            convertMarkdownButtonElement
        ) {

            webPrinter.printerPreviewElement = printerPreviewElement;
            webPrinter.pasteAreaElement = pasteAreaElement;

            convertMarkdownButtonElement.addEventListener("click", webPrinter.convertMarkdown);
            webPrinter.pasteAreaElement.addEventListener("keyup", webPrinter.show);
        },

        erase: function () {

            webPrinter.printerPreviewElement.innerHTML = '';
        },

        show: function () {

            webPrinter.printerPreviewElement.innerHTML = webPrinter.pasteAreaElement.value;
        },

        convertMarkdown: function () {

            webPrinter.printerPreviewElement.innerHTML = marked(webPrinter.printerPreviewElement.textContent)
        }
    };

    webPrinter.init(
        printerPreviewElement,
        pasteAreaElement,
        convertMarkdownButtonElement
    );

    return webPrinter;
}
