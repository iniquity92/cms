<?php 
    echo "<!DOCTYPE html>";
?>

<html>
    <head>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <link href='static/jqm/jquery.mobile-1.4.5.css' rel='stylesheet' type='text/css' />
    </head>
    <body> 
        <div data-role='page'>
            <div data-role='header'>
                <h1>Title</h1>
            </div>        
            <div id='pg1' role='main' class='ui-content'> 
		        <div class='ui-grid-b'>
                    <div class='ui-block-a' id='navigation'></div>
                    <div class='ui-block-b' id='maincontent'>
                                     
                    </div>
                    <div class='ui-block-c' id='blank'></div>
		        </div>
            </div>
            <div data-role='footer'>Footer</div>
        </div>
        <script src='static/jquery.js'></script>
        <script src='statec/jqm/jquery.mobile-1.4.5.js'></script>
	<script src='static/create-dom.js'></script>
	<script src='static/navigation.js'></script>
	<script src='static/index.js'></script>
	    
    </body>
</html>
