/* global $ */
$(document).ready(function(){

    $("#lookup").on('click', function(){
        if($("#check").is(":checked")){
           searchAll();
        }
        else if ($("#country").val() != ""){
            search($("#country").val());
        }
        else{
            $("#result").html("Invalid Input ! Please enter a valid country");
        }


    });
});

function search(country){
    var url = "https://info2180-lab7-glawton.c9users.io/world.php?country=" + country;
    $.ajax(url,{
        method: 'GET',
    }).done(function(result){
        alert($(result).text());
        $("#result").html(result);
    }).fail(function(error){
        $("#result").html("An error has occurred !");
    });
}

function searchAll(){
    var url = "https://info2180-lab7-glawton.c9users.io/world.php?all=true";
     $.ajax(url,{
        method: 'GET',
    }).done(function(result){
        //alert($(result).text());
        $("#result").html(result);
    }).fail(function(error){
        $("#result").html("An error has occurred !");
    });
}
