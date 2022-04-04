<?php
include("../res/x5engine.php");
$nameList = array("ey5","get","avn","kwc","a8x","3c7","zsj","yye","h87","4rz");
$charList = array("8","X","3","3","2","T","H","A","2","P");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
