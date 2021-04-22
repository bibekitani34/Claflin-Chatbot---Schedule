<!DOCTYPE html>
<html>
    <head>
        <title>Login</title>
        <link href="css/style.css" type="text/css" rel="stylesheet"/>
        <link rel="shortcut icon" href="img/logo.png"/>
        <style>
            p{
                color:orange;
                position:relative;
                left:85px;
            }
        </style>
    </head>
    <body id="backs">
        <div id="ons">
            <div align="center">
                <img src="img/claflin.png" width="125px">
            </div>
            <h1 align="center">Schedule<br></h1>
            <p>A scheduling system at Claflin University</p>
            <br>
            <h2>Login</h2><hr>
            <div id="msg" class="msg"></div><br>
            <form>
                <input  class="col" id="email" type="email" placeholder="Enter Your E-mail">
                <input class="col" id="pass" type="password" placeholder="Enter Your Password">
            </form>
            <div style="height: 20px"></div>
            <div align="center"><div class="btn-out btn-hv" onClick="login();">Log In</button></div>
        </div>
    </body>
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript" src="js/script.js"></script>
    <script type="text/javascript" src="js/login.js"></script>
</html>