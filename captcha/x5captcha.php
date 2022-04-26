<?php
include("../res/x5engine.php");
$nameList = array("ha7","uwk","w8k","ga2","lfw","wy3","fmz","ta2","zza","52c");
$charList = array("H","6","Z","N","L","P","A","3","6","H");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
