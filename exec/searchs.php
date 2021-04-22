<?php

session_start();
if(isset($_POST["word"]) && isset($_SESSION["user"])){
    
    $tp = strtolower(trim($_POST["word"]));
    
    $gn = "";
    if($tp == "male"){
        $gn = "M";
    }else if($tp == "female"){
        $gn = "F";
    }
    
	$word = "%".$tp."%";
	
	require_once 'config.php';
	require 'misc.php';
	
	$zone = $_SESSION["time"];
	
	$fetch = null;
	$genshs = "AND (general.fname LIKE ? OR general.lname LIKE ? OR general.email LIKE ? OR general.phone LIKE ?)";
	$tsel = "SELECT general.id, general.pic, general.fname, general.lname, general.email, general.phone";
	//$tsel = "SELECT general.id, general.pic, general.fname, general.lname, general.gender, general.dob, general.email, general.phone, general.loc, general.adate, general.atime, countries.code, location.ct, provinces.name AS prov, countries.name FROM general INNER JOIN location ON location.id = general.loc INNER JOIN provinces ON provinces.id = location.prov INNER JOIN countries ON countries.id = provinces.countries";
	
	if(!isset($_POST["custom"])){
        $fetch = $con->prepare($tsel." ".$genshs." ORDER BY general.fname, general.lname;");
    	$fetch->execute(array($word, $word, $word, $word, $gn, $word, $word, $word, $word, $word, $word, $word, $word));
	}else{
	    switch($_POST["custom"]){
	        case "country":
	            $fetch = $con->prepare($tsel." ".$genshs." AND countries.id = ? ORDER BY general.id DESC;");
            	$fetch->execute(array($word, $word, $word, $word, $gn, $word, $word, $word, $word, $word, $word, $word, $word, $_POST["country"]));
	            break;
	        case "course":
	            $fetch = $con->prepare($tsel." INNER JOIN enrolled ON enrolled.uid = general.id INNER JOIN stcourse ON stcourse.stid = enrolled.stdid INNER JOIN courses ON courses.id = stcourse.course ".$genshs." AND courses.id = ? ORDER BY stcourse.id DESC;");
            	$fetch->execute(array($word, $word, $word, $word, $gn, $word, $word, $word, $word, $word, $word, $word, $word, $_POST["course"]));
	            break;
	        case "years":
	            $tots = explode(".", $_POST["seayear"]);
	            $sea = $tots[0];
	            $yr = $tots[1];
	            $fetch = $con->prepare($tsel." ".$genshs." INNER JOIN enrolled ON enrolled.uid = general.id AND enrolled.whn = ? AND enrolled.yr = ? ORDER BY enrolled.id DESC;");
	            $fetch->execute(array($word, $word, $word, $word, $gn, $word, $word, $word, $word, $word, $word, $word, $word, $sea, $yr));
	            break;
	        case "file":
	            $name = $_POST["name"];
	            $type = $_POST["type"];
	            $fetch = $con->prepare($tsel." ".$genshs." INNER JOIN documents ON documents.gid = general.id AND documents.name = ? AND documents.type = ? ORDER BY documents.id DESC;");
	            $fetch->execute(array($word, $word, $word, $word, $gn, $word, $word, $word, $word, $word, $word, $word, $word, $name, $type));
	            break;
	        case "ongoing":
	            $fetch = $con->prepare($tsel." ".$genshs." INNER JOIN application ON application.gid = general.id AND application.whn = ? AND application.yr = ? AND (SELECT COUNT(1) FROM enrolled WHERE enrolled.uid = application.gid) = 0 ORDER BY application.id DESC;");
	            $fetch->execute(array($word, $word, $word, $word, $gn, $word, $word, $word, $word, $word, $word, $word, $word, $_POST["whn"], $_POST["yr"]));
	            break;
	    }
	}
	
	//CLASSIFICATION, ADD HIGH SCHOOL, UNIVERSITY, APPLICATION NUMBER, I-20 NUMBER, SEVIS NUMBER, PASSPORT NUMBER, SCHOLARSHIP 
	
	$tds = array();
	
	while($r = $fetch->fetch()){
	    $r[7] = readDate($r[7]);
	    $dt = convertZone($r[11]." ".$r[12], $zone);
	    $loc = $r[14].", ".$r[15].", ".$r[16];
		array_push($tds, array(
			"id"=>$r[0],
			"pic"=>$r[1],
			"fname"=>$r[2],
			"mname"=>$r[3],
			"lname"=>$r[4],
			"pname"=>$r[5],
			"gender"=>$r[6],
			"dob"=>$r[7],
			"email"=>$r[8],
			"phone"=>$r[9],
			"loc"=>$r[10],
			"code"=>$r[13],
			"loc"=>$loc,
			"dt"=>$dt
		));
	}
	
	echo json_encode(array("info"=>$tds));
	
	$con = null;
}

?>