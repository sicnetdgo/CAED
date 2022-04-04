<?php
include("../res/x5engine.php");
$nameList = array("dv3","crs","2hp","adg","zdm","zuz","hr5","sh6","lag","f5a");
$charList = array("G","Y","H","D","L","L","7","F","6","E");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
