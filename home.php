<?php

session_start();

if(!isset($_SESSION["user"])){
    ob_start();
	header("Location: login");
	ob_end_flush();
	exit();
}

require 'exec/misc.php';
require_once 'exec/config.php';

$zone = $_SESSION['time'];

?>
<!DOCTYPE html>
<html>
    <head>
        <title>Recent</title>
        <link href="css/style.css" type="text/css" rel="stylesheet"/>
        <link rel="shortcut icon" href="img/logo.png"/>
        <style>
            .addedl{
                color:green;
            }
            
            
        </style>
    </head>
    <body>
        <div id="header">
            <h1>Recent</h1>
            <img src="img/exit.png" onClick="location.replace('exec/logout');" width="50px" height="50px">
        </div>
        <nav> 
            <ul id="top">
                <li class="tops"><a href="home">Other Participants</a></li>
                <li class="tops"><a>Departments</a>
                    <ul>
                       <li class="others"><a href="countries"></a></li>
                       <!--<li class="others"><a href="courses">Mathematics</a></li>-->
                       <!--<li class="others"><a href="years">Social Studies</a></li>-->
                    </ul>
                </li>
                <li class="tops"><a>Department</a>
                <!--    <ul>-->
                <!--       <li class="others"><a href="ongoing">OnGoing</a></li>-->
                <!--       <li class="others"><a href="documents">Files</a></li>-->
                <!--    </ul>-->
                <!--</li>-->
                <li class="tops"><a href="new">Schedule (For inquirers)</a></li>
            </ul>
        </nav>
        <!--<div id="search-area">-->
        <!--    <input id="search" type="text" placeholder="Search here...">-->
        <!--    <span id="btn-search" onClick="search();">Find</span><span id="status"></span>-->
        <!--</div>-->
        <div id="res">
        <?php
        
        // $fall = $con->query("SELECT recent.u_id, general.pic, general.fname, general.lname, general.pname, general.gender, general.dob, general.email, general.phone, general.adate, general.atime, countries.code, location.ct, provinces.name AS prov, countries.name FROM recent INNER JOIN general ON recent.u_id = general.id INNER JOIN location ON location.id = general.loc INNER JOIN provinces ON provinces.id = location.prov INNER JOIN countries ON countries.id = provinces.countries GROUP BY recent.u_id ORDER BY recent.id DESC LIMIT 30;");
        
        $fall =  $con->query("SELECT pic, fname, lname, pname, gender, dob, email, phone FROM general;");
        
        $i = 0;
        while($r = $fall->fetch()){
            $its = true;
            $gen = $r["gender"] == 'M' ? 'Male' : 'Female';
            if($i == 0 || $i % 2 == 0){
   	    		$its = false;
   	    		if($i != 0){
       	    		echo '</div>';
   	    		}
   	    		echo '<div class="contain">';
   	    		//onClick="location.href= \'more1?id='.$r["u_id"].'&status=S\'
   	    	}else if($i != 0){
   	    	    echo "<div class='extra'></div>";
   	    	}
		    echo '<div class="f-div" >
		    <div>';
		    if($r["pic"] != "") echo '<img class="imgbox" src="img/profile/'.$r["pic"].'"';
		    else echo '<img class="imgbox" src="img/person.png"';
		    echo ' width="175px" height="175px"></div>
		    <div class="extra"></div>
		    <div>
		        <h3>';
		    if($r["mname"] == "" && $r["pname"] == "") echo $r["fname"].' '.$r["lname"];
		    else if($r["pname"] == "") echo $r["fname"].' '.$r["mname"].' '.$r["lname"];
		    else if($r["pname"] != "" && $r["mname"] == "") echo $r["fname"].' '.$r["lname"].' <span id="pref">('.$r["pname"].')</span>';
		    else echo $r["fname"].' '.$r["mname"].' '.$r["lname"].' <span id="pref">('.$r["pname"].')</span>';
		    echo '</h3>
		         <b>';
		   
				echo '</b></p>
				<h5 class="d-text"></h5>
		        ';
				 
        if($r["gender"] == 'B') echo 'Department of Admissions';
        else if($r["gender"] == 'F') echo 'School of Natural Science and Mathematics';
         else if($r["gender"] == 'S') echo 'School of Business';
         else if($r["gender"] == 'I') echo 'Academic Affairs';
          else if($r["gender"] == 'N') echo 'Athletics';
          else if($r["gender"] == 'T') echo 'General';
          else if($r["gender"] == 'L') echo 'Department of Biology';
          else if($r["gender"] == 'H') echo 'Honors College';
          else if($r["gender"] == 'HR') echo 'Human resources';
          else if($r["gender"] == 'C') echo 'Health Center';
          else if($r["gender"] == 'A') echo 'Library';
          
		   
				echo '</b>
			<h5 class="d-text">Available at:</h5
			<p class="mail">'.$r["email"].'</p>
			<h5 class="d-text">Date available:</h5>
			<h5 class="added">'.readDate($r["dob"]).'</h5>
		
			 ';
			  //<h5 class="d-text">Time remaining:</h5>
			 
			 echo '
			 <div class="data"></div>
			 
			 <input type="hidden" value="'.$r["dob"].'">';
				 
				 echo '<h5 class="d-text"></h5>
				<h5 class="addedl">'.$r["ct"].'</h5></div></div>';
			if($its == false && $i != 0){
   	    		$its = true;
   	    	}
			$i++;
        }
        ?>
        </div>
    </body>
    <script>
    function func() {
        var appBanners = document.getElementsByClassName('mail');
        var slides = document.getElementsByClassName("data");
        
        for (var i = 0; i < slides.length; i++) {
            let data = slides.item(i);
            let input = data.nextElementSibling;

            var dateValue = input.value;
     
            var date = Math.abs((new Date().getTime() / 1000).toFixed(0));
            var date2 = Math.abs((new Date(dateValue).getTime() / 1000).toFixed(0));
     
            var diff = date2 - date;
     
            var days = Math.floor(diff / 86400);
            var hours = Math.floor(diff / 3600) % 24;
            var minutes = Math.floor(diff / 60) % 60;
            var seconds = diff % 60;
     
            var daysStr = days;
            if (days < 10) {
                daysStr = "0" + days;
            }
      
            var hoursStr = hours;
            if (hours < 10) {
                hoursStr = "0" + hours;
            }
      
            var minutesStr = minutes;
            if (minutes < 10) {
                minutesStr = "0" + minutes;
            }
      
            var secondsStr = seconds;
            if (seconds < 10) {
                secondsStr = "0" + seconds;
            }
     
            if (days < 0 && hours < 0 && minutes < 0 && seconds < 0) {
                daysStr = "Schedule time past!";
                // hoursStr = "00";
                // minutesStr = "00";
                // secondsStr = "00";
        
                

                console.log("close");
                if (typeof interval !== "undefined") {
                    clearInterval(interval);
                }
                
                data.innerHTML = daysStr ;
                data.style.color = '#d00';
                

                
            } else{
 
            data.innerHTML = daysStr + " days , " + hoursStr +" hours and "+ minutesStr +   " minutes remaining";
            data.style.color = 'green';
            //data.innerHTML = daysStr + " days and " + hoursStr + ":" + minutesStr + ":" + secondsStr;

            }

           
        }
        
    }
 
    func();
    var interval = setInterval(func, 1000);
</script>
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript" src="js/script.js"></script>
    <script type="text/javascript" src="js/home.js"></script>
</html>