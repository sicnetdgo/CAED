<?php
include("../res/x5engine.php");
$nameList = array("thr","mu4","zfv","4sj","ply","lln","7zc","wjt","jps","fc7");
$charList = array("Y","T","R","3","W","6","R","5","U","A");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
