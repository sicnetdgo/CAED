<?php
include("../res/x5engine.php");
$nameList = array("nxc","crv","lsj","5ky","ml5","g3t","p8x","py7","wx2","mj4");
$charList = array("C","7","V","X","V","T","D","5","L","Z");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
