<?php
include("../res/x5engine.php");
$nameList = array("t28","hkr","p7v","dwv","gck","npr","fdg","u8h","tv2","64l");
$charList = array("C","X","X","S","7","S","5","P","P","P");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
