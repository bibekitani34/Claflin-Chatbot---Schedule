var year = "";
var when = "";
var custom = "ongoing";

function disGoing(whn, yr){
    var word = $("#search").val();
    when = whn;
    year = yr;
    $("#status").text("Fetching...");
    $.post('exec/searchs.php', {word : word, custom : custom, whn : when, yr : year}, function(msg){
        showResults(msg, 'A');
    });
}

function search(){
    var word = $("#search").val();
    $("#status").text("Searching...");
    $.post('exec/searchs.php', {word : word, custom : custom, whn : when, yr : year}, function(msg){
        showResults(msg, 'A');
    });
}