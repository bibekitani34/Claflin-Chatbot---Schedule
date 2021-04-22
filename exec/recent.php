<?php

$checkRecent = $con->query("SELECT u_id FROM recent ORDER BY id DESC LIMIT 1;");
$fetchRecent = $checkRecent->fetch();

if($fetchRecent["u_id"] != $id){
    
    $remove = $con->prepare("DELETE FROM recent WHERE u_id = ?;");
    if($remove->execute(array($id))){
        $addRecent = $con->prepare("INSERT INTO recent(u_id) VALUES(?);");
        if(!$addRecent->execute(array($id))) echo 'Unable to update recent records';
    }else echo 'Unable to update recent records';
    
}

?>