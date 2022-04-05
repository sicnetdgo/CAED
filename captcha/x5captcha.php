<?php
include("../res/x5engine.php");
$nameList = array("5u3","th7","v5e","zyj","5f8","arm","25v","nmm","cr6","ysy");
$charList = array("S","C","J","R","6","C","W","T","X","X");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
