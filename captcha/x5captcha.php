<?php
include("../res/x5engine.php");
$nameList = array("wek","xlm","awx","nfp","re6","ygu","66n","2p7","vy5","f8c");
$charList = array("G","7","M","X","K","W","S","7","R","2");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
