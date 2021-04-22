<?php

if(isset($_POST["email"]) && isset($_POST["pass"])){
    
    $email = $_POST["email"];
    $pass = $_POST["pass"];
    
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){
    
        require_once 'config.php';
        
        $check = $con->prepare("SELECT id FROM login WHERE email = ? AND pw = ?;");
        $check->execute(array($email, $pass));
        $ids = $check->fetch();
        
        if($ids["id"] == null){
            echo "Incorrect Login Credentials";
        }else{
            setcookie("id", $ids["id"], 0, "/");
			session_start();
			$_SESSION["user"] = "";
        }
        
    }else{
        echo "Email entered is invalid"; 
    }
}

?>