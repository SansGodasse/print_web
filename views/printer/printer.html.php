<?php
ob_start();
?>
<header id="printer-header">
    <h1>Web printer</h1>
</header>
<?php
$header = ob_get_clean();

ob_start();
?>

    <textarea class="not-printable" name="paste-area" id="paste-area" placeholder="Paste your HTML or Markdown content here first then print the page"></textarea>

    <div class="printer-commands">
        <button class="btn not-printable" type="button" onclick="webPrinter.erase();">Erase</button>
        <button class="btn not-printable" type="button" onclick="webPrinter.show();">Show</button>
        <button class="btn not-printable" type="button" id="convert-markdown-btn">Convert Markdown to HTML</button>
    </div>

    <div id="printer-preview"></div>

    <script src="/js/marked.js"></script>
    <script src="/js/PasteHandler.js"></script>
    <script src="/js/WebPrinter.js"></script>
    <script>


        let printerPreviewElement = document.getElementById('printer-preview'),
            pasteAreaElement = document.getElementById("paste-area"),
            webPrinter = new WebPrinter(
                printerPreviewElement,
                pasteAreaElement,
                document.getElementById("convert-markdown-btn")
            ),
            pasteHandler = new PasteHandler(
                printerPreviewElement,
                pasteAreaElement
            );
    </script>

<?php
$content = ob_get_clean();