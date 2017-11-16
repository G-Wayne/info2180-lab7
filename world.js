/* global $ */
$(document).ready(function(){

    $("#lookup").on('click', function(){

            search($("#country").val());

    });
});

function search(country){
    var link = "https://info2180-lab7-glawton.c9users.io/world.php?country=" + country;
    $.ajax(link,{
        method: 'GET',
    }).done(function(result){
        alert($(result).text());
        $("#result").html(result);
    }).fail(function(error){
        $("#result").html("An error has occurred !");
    });
}
