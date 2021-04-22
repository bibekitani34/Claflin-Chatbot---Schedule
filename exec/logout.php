<?php

session_start();
unset($_SESSION["user"]);
// setcookie("info", "d", time()-1, "/");
ob_start();
header("Location: ../index");
ob_end_flush();
exit();

?>