$(document).ready(function(){
    //ASSIGN ROLES
});

var arrimg = [];
var countimg = 0;
var sdid = "";
var months = '<option value="1">January</option><option value="2">February</option><option value="3">March</option><option value="4">April</option><option value="5">May</option><option value="6">June</option><option value="7">July</option><option value="8">August</option><option value="9">September</option><option value="10">October</option><option value="11">November</option><option value="12">December</option>';

const STYPE = '<option selected disabled>Select Type of School</option><option value="H">High School</option><option value="U">University</option>';

const RELATION = '<option selected disabled>Please Select a Relation</option><option value="0">Mother</option><option value="1">Father</option><option value="2">Guardian</option><option value="3">Brother</option><option value="4">Sister</option><option value="5">Son</option><option value="6">Daughter</option><option value="7">Other</option>';

const TITLE = '<option selected disabled>Please Select a Title</option><option value="0">Dr.</option><option value="1">Miss</option><option value="2">Mr.</option><option value="3">Mrs.</option><option value="4">Ms.</option><option value="5">R.</option><option value="6">Rev.</option>';

const EDUCATION = '<option selected disabled>Please Select Education Level</option><option value="0">Doctoral Degree (Ph.D., J.D., M.D., etc.)</option><option value="1">Master\'s Degree (M.A., M.S., etc.)</option><option value="2">Bachelor\'s Degree (B.A., B.S., etc.)</option><option value="3">Associate\'s Degree</option><option value="4">Some College (no degree)</option><option value="5">High School Graduate or Equivalent</option><option value="6">Some High School</option><option value="7">Other</option>';

function uP(event, id, tp, tup, dt){
    if (event.keyCode === 13 && confirm("Update "+tup+"?")) {
        var value = dt == 2 && (tp == "email" || tp == "phone") ? $("#cc"+tp).val() : $("#c"+tp).val();
        cng(id, tp, value, dt);
    }
}

function uA(event, column, txt){
    if(event.keyCode === 13 && confirm(txt)){
        cngA(column);
    }
}

function aData(column, txt){
    if(confirm(txt))
        cngA(column);
}

function cngA(column){
    var value = $("#ap"+column).val();
    $.post('exec/aedits', {id : main_id, column : column, value : value}, function(msg){
        if(msg == "Success"){
            location.reload();
        }else alert(msg);
    });
}

function cData(id, column, dt){
    var value = $("#c"+column).val();
    var msg = "";
    if(column == "dob") msg = "Update Date of Birth";
    else if(column == "gender") msg = "Change gender to "+value;
    else if(column == "prov") msg = "Update Province/State?";
    else if(column == "country") msg = "Update Country?";
    else if(column == "enro") msg = "Update Enrollment?";
    else if(column == "clas") msg = "Change Degree Program?";
    else if(column == "whn") msg = "Change Academic Season?";
    else if(column == "yr") msg = "Change Admitted Year?";
    if(confirm(msg)) cng(id, column, value, dt);
}

function cng(id, column, value, dt){
    var ext = dt == 1 ? "pedits.php" : "sedits.php";
    $.post('exec/'+ext, {id : id, column : column, value : value}, function(msg){
        if(msg == "Successful"){
            if(column == "fname" || column == "mname" || column == "lname" || column == "pname" || column == "dob" || column == "prov" || column == "country" || column == "stdid" || column == "clas" || column == "pic" || column == "whn" || column == "yr") location.reload();
            else {
                if((column == "email" || column == "phone") && dt == 2) $("#d"+column).text(value);
                else $("#"+column).text(value);
            }
        }else alert(msg);
    });
}

function adcourse(stid, course, dt){
    var msg = "";
    if($('#ncourse option:selected').prop('disabled') && dt == 2){
        alert("Please select a course");
    }else{
        if(dt == 2){
            course = $("#ncourse").val();
            msg = "Add this course to student?";
        }else if(dt == 1){
            msg = "Remove this course from student?";
        }
        if(confirm(msg)){
            $.post('exec/adcourse.php', {id : main_id, stid : stid, course : course, dt : dt}, function(msg){
                if(msg == "Successful"){
                    // if(dt == 2) $("#COU_"+course).hide(1000);
                    // else 
                    location.reload();
                }else alert(msg);
            });
        }
    }
}

/*ADMIT*/

function admit(){
    var stid = $("#nstid").val();
    var deg = $("#ndegree").val();
    var sea = $("#nseason").val();
    var yr = $("#nyear").val();
    if(stid.trim() == "") $("#admsg").text("Please provide Student ID");
    else if($('#ndegree option:selected').prop('disabled')) $("#admsg").text("Please provide Student's Degree Program");
    else if($('#nseason option:selected').prop('disabled')) $("#admsg").text("Please provide Season of Student's Admission");
    else if(yr.trim() == "") $("#admsg").text("Please provide Year of Student's Admission");
    else {
        $.post('exec/admit.php', {id : main_id, stid : stid, deg : deg, sea : sea, yr : yr}, function(msg){
            if(msg == "Successful") {
                alert("Successfully Admitted Student");
                location.reload();
            }else $("#admsg").text(msg);
        });
    }
}

function delImg(column){
    var value = "";
    if(confirm("Are you sure you want to delete profile image?")){
        cng(main_id, column, value, 1);
    }
}

function expand(rid, title){
    $.post('exec/ffam.php', {rid : rid}, function(msg){
        var jsonData = JSON.parse(msg);
        var info = jsonData.info[0];
        var t = '<h2>'+title+' &nbsp;<img onClick="delRel(\''+rid+'\');" src="img/delete.png" align="middle" width="20px"></h2><table class="mre"><col width="20%"><col width="40%"><col width="40%"><tr><th>Type</th><th>Data</th><th>Update</th></tr><tr><td class="tp">Relation</td><td id="prel">'+info.rel+'</td><td><select id="cprel" onchange="parent(\''+rid+'\', \''+title+'\', \'rel\');">'+RELATION+'</select></td></tr><tr><td class="tp">Title</td><td id="ptitle">'+info.title+'</td><td><select id="cptitle" onchange="parent(\''+rid+'\', \''+title+'\', \'title\');">'+TITLE+'</select></td></tr><tr><td class="tp">First Name</td><td>'+info.fname+'</td><td><input id="cpfname" placeholder="Update First Name" onkeyup="uparent(event, \''+rid+'\', \''+title+'\', \'fname\');" type="text"></td></tr><tr><td class="tp">Middle Name</td><td>'+info.mname+'</td><td><input id="cpmname" onkeyup="uparent(event, \''+rid+'\', \''+title+'\', \'mname\');" placeholder="Update Middle Name" type="text"></td></tr><tr><td class="tp">Last Name</td><td>'+info.lname+'</td><td><input id="cplname" placeholder="Update Last Name" onkeyup="uparent(event, \''+rid+'\', \''+title+'\', \'lname\');" type="text"></td></tr><tr><td class="tp">Gender</td><td>'+info.gen+'</td><td><select id="cpgen" onchange="parent(\''+rid+'\', \''+title+'\', \'gen\');"><option selected disabled>';
        t += info.gen == 'Male' ? 'Male</option><option value="F">Female</option>' : 'Female</option><option value="M">Male</option>';
        t += '</select></td></tr><tr><td class="tp">Phone Number</td><td>'+info.phone+'</td><td><input placeholder="Update Phone Number" id="cpphone" onkeyup="uparent(event, \''+rid+'\', \''+title+'\', \'phone\');" type="phone"></td></tr><tr><td class="tp">E-mail</td><td>'+info.email+'</td><td><input id="cpemail" placeholder="E-mail Address" onkeyup="uparent(event, \''+rid+'\', \''+title+'\', \'email\');" type="email"></td></tr><tr><td class="tp">Highest Education</td><td>'+info.high+'</td><td><select id="cphigh" onchange="parent(\''+rid+'\', \''+title+'\', \'high\');">'+EDUCATION+'</select></td></tr>';
        if(info.alr == 'Y') t += '<tr><td>Location</td><td><b>Same As Student</b></td><td><select id="cpalr" onchange="parent(\''+rid+'\', \''+title+'\', \'alr\');"><option selected disabled>Same As Student</option><option value="N">Custom</option></select></td></tr></table>';
        else {
            var countries = $("#ccountry").html();
            t += '<tr><td>Location</td><td><b>Custom</b></td><td><select id="cpalr" onchange="parent(\''+rid+'\', \''+title+'\', \'alr\');"><option selected disabled>Custom</option><option value="Y">Same As Student</option></select></td></tr><tr><td class="tp">Address</td><td>'+info.address+'</td><td><input type="text" id="cpaddress" onkeyup="uparent(event, \''+rid+'\', \''+title+'\', \'address\');" placeholder="Update Address"></td></tr><tr><td class="tp">City/Town</td><td>'+info.ct+'</td><td><div class="autocomplete"><input id="cpct" onkeyup="uparent(event, \''+rid+'\', \''+title+'\', \'ct\');" placeholder="Update City/Town" type="text"></div></td></tr><tr><td class="tp">ZIP Code</td><td>'+info.zip+'</td><td><input id="cpzip" onkeyup="uparent(event, \''+rid+'\', \''+title+'\', \'zip\');" type="number"></td></tr><tr><td class="tp">State/Province</td><td>'+info.prov+'</td><td><select id="cpprov" onchange="parent(\''+rid+'\', \''+title+'\', \'prov\');">'+jsonData.states+'</select></td></tr><tr><td class="tp">Country</td><td>'+info.name+'</td><td><select id="cpcountry" onchange="parent(\''+rid+'\', \''+title+'\', \'country\');">'+countries+'</select></td></tr></table>';
        }
        
        $("#expand").html(t);
        autocomplete(document.getElementById("cpct"), jsonData.cities);
        $("html, body").animate({ scrollTop: $("#expand").offset().top }, "slow");
    });
}

function parent(rid, title, column){
    var msg = "";
    var value = $("#cp"+column).val();
    switch(column){
        case "rel": msg = "Update Relation?";
            break;
        case "title": msg = "Update Title?";
            break;
        case "fname": msg = "Update Relative's First Name?";
            break;
        case "mname": msg = "Update Relative's Middle Name?";
            break;
        case "lname": msg = "Update Relative's Last Name?";
            break;
        case "gen": msg = "Update Relative's Gender?";
            break;
        case "email": msg = "Update Relative's E-mail?";
            break;
        case "phone": msg = "Update Relative's Phone Number?";
            break;
        case "high": msg = "Update Relative's Highest Education?";
            break;
        case "alr": msg = value == "Y" ? "Set location to same as student's?" : "Provide custom location for relative?";
            break;
        case "address": msg = "Update Relative's Address?";
            break;
        case "ct": msg = "Update Relative's City/Town?";
            break;
        case "zip": msg = "Update Relative's ZIP Code?";
            break;
        case "prov": msg = "Update Relative's State/Province?";
            break;
        case "country": msg = "Change Relative's Country?";
            break;
    }
    if(confirm(msg)) 
        $.post('exec/cngParent.php', {id : main_id, rid : rid, column : column, value : value}, function(msg){
            if(msg == "Successful"){
                expand(rid, title);
            }else alert(msg);
        });
}

function uparent(event, rid, title, column){
    if (event.keyCode === 13) {
        parent(rid, title, column);
    }
}

function uschool(event, sid, column){
    if (event.keyCode === 13) {
        school(sid, column);
    }
}

function newRelative(loc, id){
    $("html, body").animate({ scrollTop: $("#expand").offset().top }, "slow");
    var t = '<div id="whitish"><h2>New Relative</h2><div id="omsg" class="msg"></div><form><table class="mre"><col width="30%"><col width="65%"><col width="5%"><tr><td class="tp">Location</td><td><select id="npalr" ';
    t += loc == 'Y' ? 'onChange="newRelative(\'N\', \''+id+'\')"><option value="Y">Same As Student</option><option value="N">Custom' : 'onChange="newRelative(\'Y\', \''+id+'\')"><option value="N">Custom</option><option value="Y">Same As Student'
    t += '</option></select></td><td style="text-align:center">*</td></tr><tr><td class="tp">Relation</td><td><select id="nprel">'+RELATION+'</select></td><td style="text-align:center">*</td></tr><tr><td class="tp">Title</td><td><select id="nptitle">'+TITLE+'</select></td><td style="text-align:center">*</td></tr><tr><td class="tp">First Name</td><td><input id="npfname" type="text"></td><td style="text-align:center">*</td></tr><tr><td class="tp">Middle Name</td><td><input id="npmname" type="text"></td><td style="text-align:center"></td></tr><tr><td class="tp">Last Name</td><td><input id="nplname" type="text"></td><td style="text-align:center">*</td></tr><tr><td class="tp">Gender</td><td><select id="npgen"><option selected disabled>Please Select a Gender</option><option value="M">Male</option><option value="F">Female</option></select></td><td style="text-align:center">*</td></tr><tr><td class="tp">Phone Number</td><td><input id="npphone" type="text"></td><td></td></tr><tr><td class="tp">E-mail</td><td><input id="npemail" type="text"></td><td></td></tr><tr><td class="tp">Highest Education</td><td><select id="nphigh">'+EDUCATION+'</select></td><td style="text-align:center">*</td></tr>';
    if(loc == 'N'){
        var countries = $("#ccountry").html();
        var states = $("#cprov").html();
        t += '<tr><td class="tp">Country</td><td><select id="npcountry" onchange="getRC();">'+countries+'</select></td><td style="text-align:center">*</td></tr><tr><td class="tp">State/Province</td><td><div class="autocomplete"><input type="text" id="npstate"></div></td><td style="text-align:center">*</td></tr><tr><td class="tp">City/Town</td><td><div class="autocomplete"><input id="npct" type="text"></div></td><td></td></tr><tr><td class="tp">ZIP Code</td><td><input id="npzip" type="number"></td><td></td></tr><tr><td class="tp">Address</td><td><input type="text" id="npaddress"></td><td></td></tr>';
    }
    t += '</table><div align="center"><div class="btn-out btn-hv" onClick="addRel(\''+id+'\');">Add</div></div></form></div>'
    $("#expand").html(t);
    if(loc == 'N'){
        autocomplete(document.getElementById('npct'), cities);
        autocomplete(document.getElementById('npstate'), provinces);
    }
}

function getRC(){
    var country = $("#npcountry").val();
    $.post('exec/getRC.php', {country : country}, function(msg){
        var jsonData = JSON.parse(msg);
        autocomplete(document.getElementById('npct'), jsonData.cities);
        autocomplete(document.getElementById('npstate'), jsonData.states);
    });
}

function addRel(id){
    
    var rel = $("#nprel").val();
    var title = $("#nptitle").val();
    var fname = $("#npfname").val();
    var mname = $("#npmname").val();
    var lname = $("#nplname").val();
    var gen = $("#npgen").val();
    var phone = $("#npphone").val();
    var email = $("#npemail").val();
    var high = $("#nphigh").val();
    var alr = $("#npalr").val();
    var country = $('#npcountry').length ? $("#npcountry").val() : '';
    var state = $('#npstate').length ? $("#npstate").val() : '';
    var city = $('#npct').length ? $("#npct").val() : '';
    var zip = $('#npzip').length ? $("#npzip").val() : '';
    var address = $('#npaddress').length ? $("#npaddress").val() : '';
    
    if($('#nprel option:selected').prop('disabled')){
        $("#omsg").text("Please Select Relation");
        $("html, body").animate({ scrollTop: $("#expand").offset().top }, "slow");
    }else if($('#nptitle option:selected').prop('disabled')){
        $("#omsg").text("Please Select Relative's Title");
        $("html, body").animate({ scrollTop: $("#expand").offset().top }, "slow");
    }else if(fname.trim() == ""){
        $("#omsg").text("Please Provide Relative's First Name");
        $("html, body").animate({ scrollTop: $("#expand").offset().top }, "slow");
    }else if(lname.trim() == ""){
        $("#omsg").text("Please Provide Relative's Last Name");
        $("html, body").animate({ scrollTop: $("#expand").offset().top }, "slow");
    }else if($('#npgen option:selected').prop('disabled')){
        $("#omsg").text("Please Select Relative's Gender");
        $("html, body").animate({ scrollTop: $("#expand").offset().top }, "slow");
    }else if($('#nphigh option:selected').prop('disabled')){
        $("#omsg").text("Please Select Relative's Highest Education");
        $("html, body").animate({ scrollTop: $("#expand").offset().top }, "slow");
    }else if($('#npstate').length && state.trim() == ""){
        $("#omsg").text("Please Provide Relative's State/Province");
        $("html, body").animate({ scrollTop: $("#expand").offset().top }, "slow");
    }else if(confirm("Add "+fname+" as relative?")){
        $.post('exec/newrel.php', {id : id, rel : rel, title : title, fname : fname, mname : mname, lname : lname, gen : gen, phone : phone, email : email, high : high, alr : alr, country : country, state : state, city : city, zip : zip, address : address}, function(msg){
            if(msg == "Successful"){
                alert("Successfully Added Relative");
                location.reload();
            }else{
                $("#omsg").text(msg);
                $("html, body").animate({ scrollTop: $("#expand").offset().top }, "slow");
            }
        });
    }
}

function delRel(rid){
    if(confirm("Delete this Relative?"))
        $.post('exec/delRel.php', {id : main_id, rid : rid}, function(msg){
            alert(msg);
            if(msg == "Successfully deleted relative"){
                $("#REL_"+rid).hide(1000);
                $("#expand").html('');
            }
        });
}

function newDocument(){
    $("html, body").animate({ scrollTop: $("#expand").offset().top }, "slow");
    var t = '<div id="whitish"><h2>New File</h2><div id="omsg" class="msg"></div><div id="dmainbar" class="mainbar"><div id="fileBar" class="innerbar" style="width:0%">0%</div></div><table class="mre"><col width="30%"><col width="65%"><col width="5%"><tr><td class="tp">Name</td><td><input id="nfname" type="text"></td><td style="text-align:center">*</td></tr><tr id="upld"><td class="tp">Upload</td><td><form onsubmit="subForm(event)" id="uFile" method="POST" action="exec/udoc.php"><input type="file" name="document" id="document" onchange="$(\'#uFile\').submit();"></form></td><td></td></tr><tr><td class="tp">Notes</td><td><textarea style="resize: none;" id="nfextra" placeholder="Your Message Here..." maxlength="500"></textarea></td><td></td></tr></table><div align="center"><div class="btn-out btn-hv" onClick="addDoc();">Add</div></div></div>';
    $("#expand").html(t);
}

function subForm(e){
    e.preventDefault();
    if($("#document").val() && confirm("Add File?")){
        var formData = new FormData($("#uFile")[0]);
        if($("#ftext").length){
            formData.append('id', main_id);
            formData.append('did', sdid);
        }
        $("#dmainbar").show();
        $.ajax({
            url: "exec/udoc.php",
            type: "POST",
            data: formData,
            xhr: function() {
                var xhr = new window.XMLHttpRequest();
                xhr.upload.addEventListener("progress", function(evt) {
                    if (evt.lengthComputable) {
                        var percentComplete = Math.round(evt.loaded / evt.total * 10000) / 100;
                        $("#fileBar").width(percentComplete+"%");
                        $("#fileBar").text(percentComplete+' %');
                    }
                }, false);
                return xhr;
            },
            success: function (msg) {
                if(msg.includes(".")){
                    arrimg[countimg] = msg;
                    countimg++;
                    var lastIndex = msg.lastIndexOf('.');
                    var t = '<tr id="uDOC_'+countimg+'"><td class="tp">'+msg.substring(lastIndex + 1).toUpperCase()+'</td><td><a target="_blank" href="docs/'+msg+'">'+msg.substring(0, lastIndex)+'</a></td><td><div class="dl b-except b-form" onClick="delDocBef(\''+countimg+'\', \''+msg+'\')">Remove</div></td></tr>';
                    $("#upld").before(t);
                }else {
                    alert(msg);
                }
                $("#dmainbar").hide(1000);
            },
            cache: false,
            contentType: false,
            processData: false
        });
    }
}

function addDoc(){
    var name = $("#nfname").val();
    var extra = $("#nfextra").val();
    var docs = JSON.stringify(arrimg);
    if(name.trim() == ""){
        $("html, body").animate({ scrollTop: $("#expand").offset().top }, "slow");
        $("#omsg").text("Please give a name for the file");
    }else
        if(confirm("Add "+name+"?"))
            $.post('exec/addFile.php', {id : main_id, type : type, name : name, docs : docs, extra : extra}, function(msg){
                if(msg == "Success") location.reload();
                else{
                    $("html, body").animate({ scrollTop: $("#expand").offset().top }, "slow");
                    $("#omsg").text(msg);
                }
            });
}

function delDocBef(num, name){
    if(confirm("Remove "+name+"?"))
        $.post('exec/delDoc.php', {name : name}, function(msg){
            if(msg == "Success"){
                arrimg.splice(num, 1);
                $("#uDOC_"+num).hide(1000);
            }else $("#omsg").text(msg);
        });
}

function delDocAft(did, name){
    if(confirm("Remove "+name))
        $.post('exec/delDoc.php', {name : name, id : main_id, did : did}, function(msg){
            if(msg == "Success") $("#oDOC_"+did).hide(1000);
            else alert(msg);
        });
}

function delDoc(){
    if(confirm("Are you sure you want to delete this file?"))
        $.post('exec/delFile.php', {id : main_id, did : sdid}, function(msg){
            if(msg == "Success"){
                $("#expand").html('');
                $("#DOC_"+sdid).hide(1000);
            }else alert(msg);
        });
}

function updateFile(did, column){
    var value = $("#uf"+column).val();
    var msg = "";
    switch(column){
        case "name": msg = "Update File Name with "+value;
            break;
        case "notes": msg = "Update Notes?";
            break;
    }
    if(confirm(msg))
        $.post('exec/upFile.php', {id : main_id, did : did, column : column, value : value}, function(msg){
            if(msg == "Success"){
                alert("Successfully Updated");
                if(column == "name") $("#ftext").text(value);
            }else alert(msg);
        });
}

function expandFile(did){
    sdid = did;
    $.post('exec/fdoc.php', {did : did}, function(msg){
        var jsonData = JSON.parse(msg);
        var docs = jsonData.docs;
        var t = '<h2><span id="ftext">'+docs[0]+'</span> &nbsp;<img onClick="delDoc();" src="img/delete.png" align="middle" width="20px"></h2><div id="omsg" class="msg"></div><div id="dmainbar" class="mainbar"><div id="fileBar" class="innerbar" style="width:0%">0%</div></div><table class="mre"><col width="20%"><col width="60%"><col width="20%"><tr><td class="tp">Name</td><td><input id="ufname" type="text" value="'+docs[0]+'"></td><td><div class="al b-except b-form" onClick="updateFile(\''+did+'\', \'name\');">Update</div></td></tr>';
        for(var i = 0; i < jsonData.dets.length; i++){
            var idid = jsonData.dets[i]["id"];
            var name = jsonData.dets[i]["name"];
            var lastIndex = name.lastIndexOf('.');
            t += '<tr id="oDOC_'+idid+'"><td class="tp">'+name.substring(lastIndex + 1).toUpperCase()+'</td><td><a target="_blank" href="docs/'+name+'">'+name.substring(0, lastIndex)+'</a></td><td><div onClick="delDocAft(\''+idid+'\', \''+name+'\');" class="dl b-except b-form">Remove</div></td></tr>';
        }
        t += '<tr id="upld"><td class="tp">Upload</td><td><form onsubmit="subForm(event)" id="uFile" method="POST" action="exec/udoc.php"><input type="file" name="document" id="document" onchange="$(\'#uFile\').submit();"></form></td><td></td></tr><tr><td class="tp">Notes</td><td><textarea style="resize: none;" id="ufnotes" placeholder="Your Message Here..." maxlength="500">'+docs[1]+'</textarea></td><td><div onClick="updateFile(\''+did+'\', \'notes\');" class="al b-except b-form">Update</div></td></tr></table>';
        $("#expand").html(t);
        $("html, body").animate({ scrollTop: $("#expand").offset().top }, "slow");
    });
}

function addSch(){
    var name = $("#npname").val();
    var typ = $("#nptype").val();
    var country = $("#npcountry").val();
    var state = $("#npstate").val();
    var ct = $("#npct").val();
    var address = $("#npaddress").val();
    var zip = $("#npzip").val();
    var frmonth = $("#frmonth").val();
    var fryear = $("#fryear").val();
    var tomonth = $("#tomonth").val();
    var toyear = $("#toyear").val();
    if(name.trim() == ""){
        $("html, body").animate({ scrollTop: $("#expand").offset().top }, "slow");
        $("#omsg").text("Please provide school's name");
    }else if($('#nptype option:selected').prop('disabled')){
        $("html, body").animate({ scrollTop: $("#expand").offset().top }, "slow");
        $("#omsg").text("Please select type of school");
    }else if(state.trim() == ""){
        $("html, body").animate({ scrollTop: $("#expand").offset().top }, "slow");
        $("#omsg").text("Please provide the State/Province school is in");
    }else if($('#fryear option:selected').prop('disabled')){
        $("html, body").animate({ scrollTop: $("#expand").offset().top }, "slow");
        $("#omsg").text("Please provide the year of attendance");
    }else if($('#toyear option:selected').prop('disabled')){
        $("html, body").animate({ scrollTop: $("#expand").offset().top }, "slow");
        $("#omsg").text("Please provide the year of exit");
    }else{
        if(confirm("Add school to student?"))
            $.post('exec/addSch.php', {id : main_id, name : name, type : typ, country : country, state : state, ct : ct, zip : zip, address : address, frmonth : frmonth, fryear : fryear, tomonth : tomonth, toyear : toyear}, function(msg){
                if(msg == "Success") location.reload();
                else alert(msg);
            });
    }
}

function newSchool(){
    var countries = $("#ccountry").html();
    var states = $("#cprov").html();
    var years = $("#apyr").html();
    $("html, body").animate({ scrollTop: $("#expand").offset().top }, "slow");
    var t = '<div id="whitish"><h2>New School</h2><div id="omsg" class="msg"></div><table class="mre"><col width="30%"><col width="65%"><col width="5%"><tr><td class="tp">Name</td><td><input id="npname" type="text"></td><td style="text-align:center">*</td></tr><tr><td class="tp">Type</td><td><select id="nptype">'+STYPE+'</select></td><td style="text-align:center">*</td></tr><tr><td class="tp">Country</td><td><select id="npcountry" onchange="getRC();">'+countries+'</select></td><td style="text-align:center">*</td></tr><tr><td class="tp">State/Province</td><td><div class="autocomplete"><input type="text" id="npstate"></div></td><td style="text-align:center">*</td></tr><tr><td class="tp">City/Town</td><td><div class="autocomplete"><input id="npct" type="text"></div></td><td></td></tr><tr><td class="tp">ZIP Code</td><td><input id="npzip" type="number"></td><td></td></tr><tr><td class="tp">Address</td><td><input type="text" id="npaddress"></td><td></td></tr><tr><td class="tp">From</td><td><div class="splits"><select class="flx" id="frmonth">'+months+'</select><select class="flx" id="fryear">'+years+'</select></div></td><td style="text-align:center">*</td></tr><tr><td class="tp">To</td><td><div class="splits"><select class="flx" id="tomonth">'+months+'</select><select class="flx" id="toyear">'+years+'</select></div></td><td style="text-align:center">*</td></tr></table><div align="center"><div class="btn-out btn-hv" onClick="addSch();">Add</div></div></div>';
    $("#expand").html(t);
    autocomplete(document.getElementById('npct'), cities);
    autocomplete(document.getElementById('npstate'), provinces);
}

function expandSchool(sid){
    var countries = $("#ccountry").html();
    var years = $("#apyr").html();
    $.post('exec/fsch.php', {sid : sid}, function(msg){
        var jsonData = JSON.parse(msg);
        var info = jsonData.info[0];
        var t = '<h2>'+info.name+' &nbsp;<img onClick="delSch(\''+sid+'\');" src="img/delete.png" align="middle" width="20px"></h2><table class="mre"><col width="20%"><col width="40%"><col width="40%"><tr><th>Type</th><th>Data</th><th>Update</th></tr><tr><td class="tp">Name</td><td id="prel">'+info.name+'</td><td><input id="cpcname" type="text" onkeyup="uschool(event, \''+sid+'\', \'name\');"></td></tr><tr><td class="tp">Type</td><td id="ptitle">'+info.type+'</td><td><select id="cptype" onchange="school(\''+sid+'\', \'type\');">'+STYPE+'</select></td></tr><tr><td class="tp">From</td><td>'+info.frmonth+', '+info.fryear+'</td><td><div class="splits"><select class="flx" id="cpfrmonth" onchange="school(\''+sid+'\', \'frmonth\');">'+months+'</select><select class="flx" id="cpfryear" onchange="school(\''+sid+'\', \'fryear\');">'+years+'</select></div></td></tr><tr><td class="tp">To</td><td>'+info.tomonth+', '+info.toyear+'</td><td><div class="splits"><select class="flx" id="cptomonth" onchange="school(\''+sid+'\', \'tomonth\');">'+months+'</select><select class="flx" id="cptoyear" onchange="school(\''+sid+'\', \'toyear\');">'+years+'</select></div></td></tr><tr><td class="tp">Address</td><td>'+info.address+'</td><td><input type="text" id="cpaddress" placeholder="Update Address" onkeyup="uschool(event, \''+sid+'\', \'address\');"></td></tr><tr><td class="tp">City/Town</td><td>'+info.ct+'</td><td><div class="autocomplete"><input id="cpct" placeholder="Update City/Town" onkeyup="uschool(event, \''+sid+'\', \'ct\');" type="text"></div></td></tr><tr><td class="tp">ZIP Code</td><td>'+info.zip+'</td><td><input id="cpzip" onkeyup="uschool(event, \''+sid+'\', \'zip\');" type="number"></td></tr><tr><td class="tp">State/Province</td><td>'+info.prov+'</td><td><select id="cpprov" onchange="school(\''+sid+'\', \'prov\');">'+jsonData.states+'</select></td></tr><tr><td class="tp">Country</td><td>'+info.country+'</td><td><select id="cpcountry" onchange="school(\''+sid+'\', \'country\');">'+countries+'</select></td></tr></table>';
        
        $("#expand").html(t);
        autocomplete(document.getElementById("cpct"), jsonData.cities);
        $("html, body").animate({ scrollTop: $("#expand").offset().top }, "slow");
    });
}

function delSch(sid){
    if(confirm("Are you sure you want to delete this school?"))
        $.post('exec/delSch.php', {id : main_id, sid : sid}, function(msg){
            if(msg == "Success") {
                $("#SCH_"+sid).hide(1000);
                $("#expand").html('');
            }else alert(msg);
        });
}

function school(sid, column){
    var msg = "";
    var value = column == 'name' ? $("#cpc"+column).val() : $("#cp"+column).val();
    switch(column){
        case "name": msg = "Change name of school to "+value+"?";
            break;
        case "type": msg = "Change type of school?";
            break;
        case "frmonth": msg = "Update Starting Month?";
            break;
        case "fryear": msg = "Update Starting Year?";
            break;
        case "tomonth": msg = "Update Exit Month?";
            break;
        case "toyear": msg = "Update Exit Year?";
            break;
        case "address": msg = "Update School's Address?";
            break;
        case "ct": msg = "Update School's City/Town?";
            break;
        case "zip": msg = "Update School's ZIP Code?";
            break;
        case "prov": msg = "Update School's State/Province?";
            break;
        case "country": msg = "Change School's Country?";
            break;
    }
    if(confirm(msg)) 
        $.post('exec/cngSch.php', {id : main_id, sid : sid, column : column, value : value}, function(msg){
            if(msg == "Success"){
                expandSchool(sid);
            }else alert(msg);
        });
}

function newRep(){
    $("html, body").animate({ scrollTop: $("#expand").offset().top }, "slow");
    var t = '<div id="whitish"><h2>New Rep</h2><div id="omsg" class="msg"></div><table class="mre"><col width="30%"><col width="65%"><col width="5%"><tr><td class="tp">Role</td><td><select id="nrrole"><option selected disabled>Please Select Role</option><option value="C">Counselor</option><option value="T">Teacher</option><option value="O">Other</option></select></td><td style="text-align:center">*</td></tr><tr><td class="tp">Title</td><td><select id="nrtitle">'+TITLE+'</select></td><td style="text-align:center">*</td></tr><tr><td class="tp">First Name</td><td><input id="nrfname" type="text"></td><td style="text-align:center">*</td></tr><tr><td class="tp">Middle Name</td><td><input id="nrmname" type="text"></td><td style="text-align:center"></td></tr><tr><td class="tp">Last Name</td><td><input id="nrlname" type="text"></td><td style="text-align:center">*</td></tr><tr><td class="tp">Gender</td><td><select id="nrgen"><option selected disabled>Please Select a Gender</option><option value="M">Male</option><option value="F">Female</option></select></td><td style="text-align:center">*</td></tr><tr><td class="tp">Phone Number</td><td><input id="nrphone" type="text"></td><td></td></tr><tr><td class="tp">E-mail</td><td><input id="nremail" type="text"></td><td></td></tr></table><div align="center"><div class="btn-out btn-hv" onClick="addRep();">Add</div></div></div>';
    $("#expand").html(t);
}

function addRep(){
    var role = $("#nrrole").val();
    var title = $("#nrtitle").val();
    var fname = $("#nrfname").val();
    var mname = $("#nrmname").val();
    var lname = $("#nrlname").val();
    var gen = $('#nrgen').val();
    var phone = $("#nrphone").val();
    var email = $("#nremail").val();
    if($('#nrrole option:selected').prop('disabled')){
        $("html, body").animate({ scrollTop: $("#expand").offset().top }, "slow");
        $("#omsg").text("Please select Role");
    }else if($('#nrtitle option:selected').prop('disabled')){
        $("html, body").animate({ scrollTop: $("#expand").offset().top }, "slow");
        $("#omsg").text("Please select Title");
    }else if(fname.trim() == ""){
        $("html, body").animate({ scrollTop: $("#expand").offset().top }, "slow");
        $("#omsg").text("Please provide First Name");
    }else if(lname.trim() == ""){
        $("html, body").animate({ scrollTop: $("#expand").offset().top }, "slow");
        $("#omsg").text("Please provide Last Name");
    }else if($('#nrgen option:selected').prop('disabled')){
        $("html, body").animate({ scrollTop: $("#expand").offset().top }, "slow");
        $("#omsg").text("Please select Gender");
    }else{
        if(confirm("Add this representative?"))
            $.post('exec/addRep.php', {id : main_id, role : role, title : title, fname : fname, mname : mname, lname : lname, gen : gen, phone : phone, email : email}, function(msg){
                alert(msg);
                if(msg.includes("Success")) location.reload();
            });
    }
}

function expandRep(rid){
    $.post('exec/frep.php', {rid : rid}, function(msg){
        var jsonData = JSON.parse(msg);
        var info = jsonData.info[0];
        var t = '<h2>'+info.name+' &nbsp;<img onClick="delRep(\''+rid+'\');" src="img/delete.png" align="middle" width="20px"></h2><table class="mre"><col width="20%"><col width="40%"><col width="40%"><tr><th>Type</th><th>Data</th><th>Update</th></tr><tr><td class="tp">Role</td><td id="errole">'+info.role+'</td><td><select id="rerole" onchange="rep(\''+rid+'\', \'role\');"><option selected disabled>Please Select Role</option><option value="C">Counselor</option><option value="T">Teacher</option><option value="O">Other</option></select></td></tr><tr><td class="tp">Title</td><td id="ertitle">'+info.title+'</td><td><select id="retitle" onchange="rep(\''+rid+'\', \'title\');">'+TITLE+'</select></td></tr><tr><td class="tp">First Name</td><td id="erfname">'+info.fname+'</td><td><input id="refname" placeholder="Update First Name" onkeyup="urep(event, \''+rid+'\', \'fname\');" type="text"></td></tr><tr><td class="tp">Middle Name</td><td id="ermname">'+info.mname+'</td><td><input id="remname" placeholder="Update Middle Name" onkeyup="urep(event, \''+rid+'\', \'mname\');" type="text"></td></tr><tr><td class="tp">Last Name</td><td id="erlname">'+info.lname+'</td><td><input id="relname" placeholder="Update Last Name" onkeyup="urep(event, \''+rid+'\', \'lname\');" type="text"></td></tr><tr><td class="tp">Phone Number</td><td id="erphone">'+info.phone+'</td><td><input id="rephone" placeholder="Update Phone Number" onkeyup="urep(event, \''+rid+'\', \'phone\');" type="text"></td></tr><tr><td class="tp">E-mail</td><td id="eremail">'+info.email+'</td><td><input id="reemail" placeholder="Update E-mail" onkeyup="urep(event, \''+rid+'\', \'email\');" type="text"></td></tr></table>';
        
        $("#expand").html(t);
        $("html, body").animate({ scrollTop: $("#expand").offset().top }, "slow");
    });
}

function urep(event, rid, column){
    if (event.keyCode === 13) {
        rep(rid, column);
    }
}

function rep(rid, column){
    var value = $("#re"+column).val();
    if(confirm("Update Representative's Info?")){
        $.post('exec/cngRep.php', {id : main_id, rid : rid, column : column, value : value}, function(msg){
            if(msg == "Success"){
                if(column == "title" || column == "fname" || column == "mname" || column == "lname" || column == "role"){
                    expandRep(rid);
                }else $("#er"+column).text(value);
            }else $("#omsg").text(msg);
        });
    }
}

function delRep(rid){
    if(confirm("Are you sure you want to delete this rep?"))
        $.post('exec/delRep.php', {id : main_id, rid : rid}, function(msg){
            alert(msg);
            if(msg.includes("Success")){
                $("#expand").html('');
                $("#REP_"+rid).hide(1000);
            }
        });
}