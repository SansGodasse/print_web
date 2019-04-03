<?php
ob_start();
?>
<label class="not-printable" for="paste-area">Copier/coller ici avant d'imprimer</label><br>
<textarea class="not-printable" name="paste-area" id="paste-area" cols="30" rows="10"></textarea>

<button type="button" onclick="erase();">Effacer</button>

<div id="printable-area"></div>

<script src="/public/js/web_print.js"></script>

<script>
    function erase() {

        var printAreaElt = document.getElementById('printable-area');

        printAreaElt.innerHTML = '';
    }
</script>

<?php
$content = ob_get_clean();

require 'layout.php';