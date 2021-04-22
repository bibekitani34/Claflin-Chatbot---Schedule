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
                left:15px;
            }
            #admin {
                margin-top:10px;
                background-color:maroon;
            }
        </style>
    </head>
    <body id="backs">
        <div id="ons">
            <div align="center">
                <img src="img/claflin.png" width="125px">
            </div>
            <h1 align="center">Schedule<br></h1>
            <p>Do you want to schedule an online appointment? Please click the button below to continue</p>
            <br>
            <h2>Happy scheduling!</h2><hr>
            <div id="msg" class="msg"></div><br>
            <div style="height: 20px"></div>
            <div align="center"><div class="btn-out btn-hv" onclick="location.href='new';"">Go ahead &#8594;</div>
            <div class="btn-out btn-hv" id="admin" onclick="location.href='login';"">Admin? &#8594;</div>
        </div>
    </body>
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript" src="js/script.js"></script>
    <script type="text/javascript" src="js/login.js"></script>
</html>