<?php
include("../res/x5engine.php");
$nameList = array("56n","fw4","czc","ra8","ham","mgt","pzt","hxw","f76","u8c");
$charList = array("7","3","Z","V","F","T","F","T","J","T");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
