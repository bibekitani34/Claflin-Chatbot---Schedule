<?php

session_start();
if(isset($_GET['time'])){
    $_SESSION['time'] = $_GET['time'];
}
if(isset($_POST['s'])){
    echo (isset($_SESSION['time'])) ? 1 : 0;
}

?>