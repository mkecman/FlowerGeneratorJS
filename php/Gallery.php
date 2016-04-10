<?php
require_once "jQuery.php";
require_once "MySQLSimple.php";

$db = new MySQLSimple();

$flowers = $db->fetch_all_array( 'SELECT * FROM flowers ORDER BY '. $_POST[ "order" ] .' DESC LIMIT 100' );

jQuery::addMessage( json_encode( $flowers ), 'galleryData');
jQuery::getResponse();

?>