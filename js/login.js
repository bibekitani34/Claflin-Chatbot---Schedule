var input = document.getElementById("pass");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        login();
    }
});

function login(){
	
	var email = $("#email").val();
	var pass = $("#pass").val();
	
	if(email.trim() != "" && pass.trim() != ""){
	
		$.post('exec/login.php', {email : email, pass : pass}, function(msg){
			if(msg == ""){
			    $("#msg").text("");
				location.href = "home";
			}else{
				$("#msg").html(msg);
				//alert(msg);
			}
		});
	}else{
		$("#msg").text("Please fill all fields");
		//alert("Please fill all fields");
	}
}

function schedule(){
    location.href = "new";
}