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

$myfile = fopen("../flowers/flower-". $_POST[ "name" ] .".png", "w") or die("Unable to open file!");
$data = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $_POST[ "image" ]));
fwrite( $myfile, $data );
fclose( $myfile );

jQuery::getResponse();

?>