<?php
include("../res/x5engine.php");
$nameList = array("wdz","rsr","4lm","e7p","7sz","hv6","7e6","fgn","w4z","vcr");
$charList = array("U","J","Z","Y","H","C","W","J","W","7");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
