<?php
include("../res/x5engine.php");
$nameList = array("7jx","ynk","scx","8vx","hr7","ums","hzp","k3u","8tz","8hu");
$charList = array("5","7","8","2","H","7","7","2","K","U");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
