<?php
include("../res/x5engine.php");
$nameList = array("2za","az3","hrr","6gy","skp","va5","sph","h3t","rz5","7hc");
$charList = array("7","L","H","7","C","6","M","E","V","4");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
