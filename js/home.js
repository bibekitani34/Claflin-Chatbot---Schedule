var input = document.getElementById("search");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        search();
    }
});

function search(){
    var word = $("#search").val();
	$("#status").text("Searching...");
	$.post('exec/searchs.php', {word : word}, function(msg){
		var jsonData = JSON.parse(msg);
		if(jsonData.info.length == 0){
			$("#status").html("Could not find any matching record");
		}else{
			$("#status").text("Found: "+jsonData.info.length);
			var t = "";
			for (var i = 0; i < jsonData.info.length; i++) {
			    var r = jsonData.info[i];
			    var its = true;
			    var gen = r.gender == "I" ? "Available" : "Unavailable";
			    if(i == 0 || i % 2 == 0){
       	    		its = false;
       	    		if(i != 0){
           	    		t+= '</div>';
       	    		}
       	    		t+= '<div class="contain">';
       	    	}else if(i != 0){
       	    	    t+= "<div class='extra'></div>";
       	    	}
       	    	
			    t += "<div class='f-div' onClick='location.href = \"more?id="+r.id+"&status=S\"'><div><img class='imgbox' src='img/";
    		    if(r.pic != "") t += "profile/"+r.pic+"'";
    		    else t += "person.png'";
    		    t += " width='175px' height='175px'></div><div class='extra'></div><div><h3>";
			    if(r.mname == "" && r.pname == "") t += r.fname+" "+r.lname;
       	    	else if(r.pname == "") t += r.fname+" "+r.mname+" "+r.lname;
       	    	else if(r.pname != "" && r.mname == "") t += r.fname+" "+r.lname+" <span id='pref'>("+r.pname+")</span>";
       	    	else t += r.fname+" "+r.mname+" "+r.lname+" <span id='pref'>("+r.pname+")</span>";
       	    	t += "</h3><p class='gen'>"+r.phone+" - <b>"+gen+"</b></p><h5 class='d-text'></h5><p class='mail'>"+r.email+"</h5><h5 class='addedl'>"+r.loc+"</h5></div></div>";
			    if(its == false && i != 0){
       	    		its = true;
       	    	}
			}
// 			t+= '</div>';
			$("#res").html(t);
		}
	});
}
