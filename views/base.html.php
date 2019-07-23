<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="Help you print web content">
        <meta name="author" content="Nicolas Renvoisé">

        <title>Print web content</title>

        <link href=/css/style.css" rel="stylesheet" />
        <link href="/css/web_printer.css" rel="stylesheet" />
    </head>
    
    <body>
        <?= $header ?? "" ?>
        <div id="base-content">
            <?= $content ?? "Error: no content" ?>
        </div>
    </body>
</html>