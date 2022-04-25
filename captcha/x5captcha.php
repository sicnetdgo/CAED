<?php
include("../res/x5engine.php");
$nameList = array("vmp","m73","z2u","3ny","pnt","gw7","lek","nkr","z2k","wtp");
$charList = array("2","M","N","Y","K","H","4","F","F","K");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
