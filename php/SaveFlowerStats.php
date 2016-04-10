<?php
require_once "jQuery.php";
require_once "MySQLSimple.php";

$db = new MySQLSimple();

$db->query( 'UPDATE flowers SET '. $_POST["stat"] .' = '. $_POST["stat"] .' + 1 WHERE id = '. $_POST["id"] );

jQuery::addMessage( "", "statsSaved" );
jQuery::getResponse();

?>