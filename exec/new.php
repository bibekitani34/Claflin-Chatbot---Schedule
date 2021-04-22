<?php

session_start();

if(isset($_POST["fname"]) && isset($_POST["lname"]) && isset($_POST["pname"]) && isset($_POST["gender"]) && isset($_POST["dob"]) && isset($_POST["email"])  && isset($_POST["phone"])  && isset($_POST["country"])  && isset($_POST["state"])  && isset($_POST["city"])  && isset($_POST["zip"])){
    
    $fname = trim($_POST["fname"]);
    $lname = trim($_POST["lname"]);
    $pname = trim($_POST["pname"]);
    $gender = trim($_POST["gender"]);
    $dob = trim($_POST["dob"]);
    $email = trim($_POST["email"]);
    $phone = trim($_POST["phone"]);
    $country = trim($_POST["country"]);
    $state = trim($_POST["state"]);
    $city = trim($_POST["city"]);
    $zip = trim($_POST["zip"]);
    $address = trim($_POST["address"]);
    $id = "";
    
    require_once 'config.php';
    
    $chk = $con->prepare("SELECT COUNT(1) AS num FROM general WHERE general.fname = ? AND general.lname = ? AND general.dob = ?;");
    $chk->execute(array($fname, $lname, $dob));
    $khc = $chk->fetch();
    
    if($khc["num"] == 0){
        
        $ins1 = $con->prepare("INSERT INTO general(fname, lname, pname, gender, dob,  email, phone) VALUES(?, ?, ?, ?, ?, ?, ?);");
        if($ins1->execute(array($fname, $lname, $pname, $gender, $dob, $email, $phone))){
            
            $gid = $con->query("SELECT id FROM general ORDER BY id DESC LIMIT 1");
            $dig = $gid->fetch();
            $id = $dig["id"];
            
            $fpro = $con->prepare("SELECT id FROM provinces WHERE countries = ? AND name = ?;");
            $fpro->execute(array($country, $state));
            $prof = $fpro->fetch();
            $pro = $prof["id"];
            
            if($pro == null){
                $insb = $con->prepare("INSERT INTO provinces(countries, name) VALUES(?, ?);");
                $insb->execute(array($country, $state));
                
                $gpro = $con->query("SELECT id FROM provinces ORDER BY id DESC LIMIT 1");
                $orp = $gpro->fetch();
                $pro = $orp["id"];
            }
            
            $ins2 = $con->prepare("INSERT INTO location(prov, ct, zip, address) VALUES(?, ?, ?, ?);");
            if($ins2->execute(array($pro, $city, $zip, $address))){
                
                $gloc = $con->query("SELECT id FROM location ORDER BY id DESC LIMIT 1");
                $col = $gloc->fetch();
                $loc = $col["id"];
                
                $upd = $con->prepare("UPDATE general SET loc = ? WHERE id = ?;");
                if(!$upd->execute(array($loc, $id))){
                    die("Couldn't add person at this time");
                }else{
                    $ina = $con->prepare("INSERT INTO application(gid) VALUES(?)");
                    if($ina->execute(array($id))) echo $id;
                    else die("Couldn't finalize registration");
                }
            }else die("Error occured... Please try again later");
        }else die("Couldn't add new person... Please try again later");
        
    }else die("This person is already added");
    
    include 'recent.php';
    $con = null;
}else die("You don't send all the required fields!!!! Muji");

?>