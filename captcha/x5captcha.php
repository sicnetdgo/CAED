<?php
include("../res/x5engine.php");
$nameList = array("em8","sr8","d3z","7aj","krt","zlx","f4f","vdc","xvf","6um");
$charList = array("8","Z","F","T","A","J","E","W","4","P");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
