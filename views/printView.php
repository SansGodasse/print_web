<?php
ob_start();
?>
<label class="not-printable" for="paste-area">Copier/coller ici avant d'imprimer</label><br>
<textarea class="not-printable" name="paste-area" id="paste-area" cols="30" rows="10"></textarea>

<div id="printable-area"></div>

<script src="js/web_print.js"></script>

<?php
$content = ob_get_clean();

require 'layout.php';