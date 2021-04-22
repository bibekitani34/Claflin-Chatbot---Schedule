function add(){
    var fname = $("#fname").val();
    var mname = $("#mname").val();
    var lname = $("#lname").val();
    var pname = $("#pname").val();
    var gender = $("#gender").val();
    var dob = $("#dob").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var country = $("#country").val();
    var state = $("#state").val();
    var city = $("#city").val();
    var zip = $("#zip").val();
    var address = $("#address").val();
    
    if(fname.trim() == "") {
        $("#nmsg").text("Please provide person's First name");
        $("html, body").animate({ scrollTop: 0 }, "slow");
    }else if(lname.trim() == ""){
        $("#nmsg").text("Please provide person's Last name");
        $("html, body").animate({ scrollTop: 0 }, "slow");
    }else if($('#gender option:selected').prop('disabled')){
        $("#nmsg").text("Please select person's gender");
        $("html, body").animate({ scrollTop: 0 }, "slow");
    }else if(dob == ""){
        $("#nmsg").text("Please provide person's Date of Birth");
        $("html, body").animate({ scrollTop: 0 }, "slow");
    }else if($('#country option:selected').prop('disabled')){
        $("#nmsg").text("Please select person's country");
        $("html, body").animate({ scrollTop: 0 }, "slow");
    }else if(state.trim() == ""){
        $("#nmsg").text("Please provide person's State/Province");
        $("html, body").animate({ scrollTop: 0 }, "slow");
    }else if(confirm("Add "+fname+"?")){
        $.post('exec/new.php', {fname : fname, lname : lname,  gender : gender, pname: pname, dob : dob, email : email, phone : phone, country: country, state: state, city: city, zip: zip, address: address }, function(msg){
            if(msg.length <= 10){
                if(confirm("Successfully Added. Assigned representative will contact you shortly!")) location.href = 'index';
                else location.href = 'index';
                
            }else{
                $("#nmsg").text(msg);
                $("html, body").animate({ scrollTop: 0 }, "slow");
            }
        });
    }
}

function fCoun(){
    var coun = $("#country").val();
    $.post('exec/fproad.php', {coun : coun}, function(msg){
        if(msg != ""){
            var jsonData = JSON.parse(msg);
            var states = [], cities = [];
            for(var i = 0; i < jsonData.states.length; i++){
                states.push(jsonData.states[i].name);
            }
            for(var i = 0; i < jsonData.cities.length; i++){
                cities.push(jsonData.cities[i].ct);
            }
            
            autocomplete(document.getElementById("state"), states);
            autocomplete(document.getElementById("city"), cities);
            
        }else{
            
        }
    });
}