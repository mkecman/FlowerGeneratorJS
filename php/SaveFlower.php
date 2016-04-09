<?php
require_once "jQuery.php";
require_once "MySQLSimple.php";

$db = new MySQLSimple
( 
	"127.0.0.1", 
	"root", 
	"", 
	"flower" 
);

$values = array
(
	'name' => $_POST[ "name" ],
	'email' => $_POST[ "email" ],
	'json' => $_POST[ "json" ]
);
$db->query_insert( "flowers", $values );
$latestID = $db->fetch_one_value("SELECT MAX(id) FROM flowers");

$image = fopen("../flowers/flower-". $latestID .".png", "w") or die("Unable to open file!");
$data = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $_POST[ "image" ]));
fwrite( $image, $data );
fclose( $image );

$thumb = fopen("../flowers/thumbs/flower-". $latestID .".png", "w") or die("Unable to open file!");
$data = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $_POST[ "thumb" ]));
fwrite( $thumb, $data );
fclose( $thumb );

jQuery::getResponse();

?>