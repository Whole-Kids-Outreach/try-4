<?php

	$language = $_GET["languagebtn"];
	
		echo "These results were found: <br>";
		echo "<br>";
		
		/*

	$db = new PDO("mysql:dbname=world; host=localhost", "root" );
	$rows=$db->query("
		SELECT languages.country_code, countries.code, countries.name, languages.language
		FROM languages, countries
		WHERE languages.country_code=countries.code AND languages.language='$language'");
	foreach ($rows as $row) {
		print $row["name"] . "<br>";
	}
	
	*/
	
	$db = new PDO("mysql:dbname=wko; host=localhost", "root" );
	$rows=$db->query("
		SELECT * FROM pages");
	foreach ($rows as $row) {
	?> <p class="psearch"> <a href="<?=$row["name"]?>.html"><?=$row["name"]?></a></li> </p> <?php
	//	print $row["name"] . "<br>";
	}
		
?>
