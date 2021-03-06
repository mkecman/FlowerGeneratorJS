<?php

?>
<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang=""> <!--<![endif]-->
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<title>Flower Generator</title>
		<meta name="description" content="">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="apple-touch-icon" href="apple-touch-icon.png">

		<link rel="stylesheet" href="css/normalize.min.css">
		<link rel="stylesheet" href="css/main.css">
		<link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">

		<script src="js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>
		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
		<script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.min.js"><\/script>')</script>
		<script src="js/jqueryphp/jquery.php.js" type="text/javascript"></script>
		<script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
		<script type="text/javascript" src="js/jqColorPicker.min.js"></script>
		<script type="text/javascript" src="js/tinycolor.js"></script>
		<script type="text/javascript" src="js/randomColor.js"></script>
		<script type="text/javascript" src="js/jquery.scrollbar.min.js"></script>
		
	</head>
	<body onresize="handleResize()">
		<!--[if lt IE 8]>
			<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
		<![endif]-->

	<div id="main-canvas">
		<canvas id="flower-canvas"></canvas>
	</div>
	<div id="toolbar">
		<label onclick="uiToggleToolbar();">TOOLBAR</label><br/>
		<label id="sizeLabel"></label>
		<label id="distanceLabel"></label>
		<label id="polygonsLabel"></label>
		<label id="sidesLabel"></label>
		<label id="wavesLabel"></label>
		<label id="rotationLabel"></label><br/>
		<div style="padding-top: 10px;">
			<label>Background Color:</label><input id="backgroundColorPicker" /></br>
			<div id="waveColors"></div>
		</div>
		<div onclick="uiToggleFill()"><input type="checkbox" id="fill" class="css-checkbox"> <label for="fill" class="css-label">Fill</label></div>
		<div onclick="uiToggleClear()"><input type="checkbox" id="clear" checked="checked" class="css-checkbox"> <label for="clear" class="css-label">Clear</label></div>
		<hr/>
		<div style="text-align: center;">
			<form id="flower-form" onsubmit="handleFormSubmit(); return false;">
				<input id="flower-name" name="name" placeholder="Name Your Flower" title="2 characters minimum" pattern=".{2,255}" value="" required oninput="handleNameChange()"></input>
				<input id="flower-author" name="author" placeholder="Your Name (Optional)" title="2 characters minimum" pattern=".{2,255}" value="" ></input>
				<button id="save-button">SAVE</button>
			</form>
		</div>
	</div>
	<div id="gallery">
		<div id="gallery-header">
			<label onclick="uiToggleGallery();">GALLERY</label>
			<select id="order-dropdown" title="Order By" onchange="handleOrderChange()">
				<option selected="selected" value="created_ts">Latest</option>
				<option value="views">Most Viewed</option>
				<option value="likes">Most Liked</option>
			</select>
		</div>
		<div id="gallery-thumbs" class="scrollbar-inner">
		<div id="gallery-wrapper" >
			
		</div>
		</div>
	</div>
			
<?php
$version = file_get_contents( "version" );

$jsInc = '<script src="js/Globals.js?v='. $version .'"></script>' .
		'<script src="js/FlowerDrawer.js?v='. $version .'"></script>' .
		'<script src="js/Element.js?v='. $version .'"></script>' .
		'<script src="js/ElementCircle.js?v='. $version .'"></script>' .
		'<script src="js/ElementPolygon.js?v='. $version .'"></script>' .
		'<script src="js/CanvasThumbnail.js?v='. $version .'"></script>' .
		'<script src="js/FlowerGallery.js?v='. $version .'"></script>' .
		'<script src="js/UI.js?v='. $version .'"></script>' .
		'<script src="js/main.js?v='. $version .'"></script>';

print $jsInc;

?>
		<!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
		<script>
			/*(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
			function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
			e=o.createElement(i);r=o.getElementsByTagName(i)[0];
			e.src='//www.google-analytics.com/analytics.js';
			r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
			ga('create','UA-XXXXX-X','auto');ga('send','pageview');
			*/
		</script>
	</body>
</html>
