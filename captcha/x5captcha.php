<?php
include("../res/x5engine.php");
$nameList = array("kly","wun","pk6","w3e","m4l","eah","rz8","zv2","56z","wyy");
$charList = array("W","4","U","R","8","6","2","3","4","3");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
