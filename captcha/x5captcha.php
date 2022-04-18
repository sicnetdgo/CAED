<?php
include("../res/x5engine.php");
$nameList = array("d2j","hpy","dn2","hy2","f2n","y3j","76h","2fc","a5d","xf3");
$charList = array("S","N","F","5","6","F","G","Y","R","3");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
