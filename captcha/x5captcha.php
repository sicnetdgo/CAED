<?php
include("../res/x5engine.php");
$nameList = array("z2c","ww3","ksp","ldc","v77","ew4","zfc","gg8","cey","krs");
$charList = array("5","U","V","L","R","C","R","C","C","V");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
