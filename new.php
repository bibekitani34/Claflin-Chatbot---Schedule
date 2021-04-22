<?php

// session_start();

// if(!isset($_SESSION["user"])){
//     ob_start();
// 	header("Location: index");
// 	ob_end_flush();
// 	exit();
// }

require 'exec/misc.php';
require_once 'exec/config.php';

$zone = $_SESSION['time'];

?>
<!DOCTYPE html>
<html>
    <head>
        <title>Schedule</title>
        <link href="css/style.css" type="text/css" rel="stylesheet"/>
        <link rel="shortcut icon" href="img/logo.png"/>
        <style>
            
            .imp{
                font-weight:italic;
                font-size:10px;
            }
        </style>
    </head>
    <body>
        <div id="header">
            <h1>Schedule</h1>
            <img src="img/exit.png" onClick="location.replace('exec/logout');" width="50px" height="50px">
        </div>
        <nav> 
            <ul id="top">
                <li class="tops"><a href="home">Other participants</a></li>
                <li class="tops"><a>Responders</a>
                    <ul>
                       <li class="others"><a href="countries">Countries</a></li>
                       <!--<li class="others"><a href="courses">Majors and Minors</a></li>-->
                       <!--<li class="others"><a href="years">Academic Years</a></li>-->
                    </ul>
                </li>
                <li class="tops"><a>Departments</a>
                    <!--<ul>-->
                    <!--   <li class="others"><a href="ongoing">OnGoing</a></li>-->
                    <!--   <li class="others"><a href="documents">Files</a></li>-->
                    <!--</ul>-->
                </li>
                <li class="tops"><a href="new">Schedule</a></li>
            </ul>
        </nav>
        <div id="res">
            <div id="mid">
                <div id="f-side" class="flx">
                    <h3>Schedule | It's Quick and Easy</h3>
                    <div id="nmsg" class="msg"></div>
                    <form>
                        <table class="nwe">
                            <col width="30%">
                            <col width="65%">
                            <col width="5%">
                            <tr>
                                <td class="tp">First Name</td>
                                <td><input id="fname" type="text"></td>
                                <td>*</td>
                            </tr>
                            <!--<tr>-->
                            <!--    <td class="tp">Middle Name</td>-->
                            <!--    <td><input id="mname" type="text"></td>-->
                            <!--    <td></td>-->
                            <!--</tr>-->
                            <!--<tr>-->
                                <td class="tp">Last Name</td>
                                <td><input id="lname" type="text"></td>
                                <td>*</td>
                            </tr>
                            <tr>
                                <td class="tp">Email </td>
                                <td><input id="pname" type="text"></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td class="tp">Faculty</td>
                                <td><select id="gender">
                                    <option selected disabled>Select the faculty</option>
                                    <option value="F">School of Natural Science and Mathematics</option>
                                    <option value="L">Department of Biology</option>
                                    <option value="B">Admissions</option>
                                    <option value="I">Academic Affairs</option>
                                    <option value="S">School of Business</option>
                                     <option value="N">Athletics</option>
                                    <option value="H">Honors College</option>
                                    <option value="HR">Human Resources</option>
                                    <option value="C">Health Center</option>
                                    <option value="A">Library</option>

                                </select></td>
                                <td>*</td>
                            </tr>
                            <tr>
                                <td class="tp">Date & time you want to talk</td>
                                <td><input id="dob" type="text" placeholder ="yyyy-mm-dd hh:mm:ss">
                                <p class="imp">Please make sure you type in the mentioned format. (24 hours format)</p>
                                </td>
                                <td>*</td>
                            </tr>
                             <tr>
                                <td class="tp">Time you want to chat</td>
                                <td><input id="email" type="time"></td>
                                <td>*</td>
                            </tr>
                            <tr>
                                <td class="tp">Phone number</td>
                                <td><input id="phone" value="(+1) " type="text"></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td class="tp">Country</td>
                                <td><div class="autocomplete"><input id="country" type="text"></div></td>
                                <td></td>
                            </tr>
                           
                            <tr>
                                <td class="tp">State/Province</td>
                                <td><div class="autocomplete"><input id="state" type="text"></div></td>
                                <td>*</td>
                            </tr>
                            <tr>
                                <td class="tp">City/Town</td>
                                <td><div class="autocomplete"><input id="city" type="text"></div></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td class="tp">ZIP Code</td>
                                <td><input id="zip" type="text"></td>
                                <td></td>
                            </tr>
                            <tr>
                                
                            </tr>
                        </table>
                        <div align="center"><div class="btn-out btn-hv" onClick="add();">Schedule</div></div>
                    </form>
                </div>
                <div id="b-side" class="flx" align="center">
                    <!--<div id="b-in">-->
                    <!--    <p>For Claflin<br>-By Claflin</p>-->
                    <!--</div>-->
                    <!--<div>-->
                    <!--    <img src="img/claflin.png">-->
                    <!--    <h2>Schedule</h2>-->
                    <!--</div>-->
                </div>
            </div>
        </div>
    </body>
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript" src="js/script.js"></script>
    <script type="text/javascript" src="js/new.js"></script>
</html>