$(document).ready(function() {
	$("#nav_list li").click(function(){
        var title = $(this).children("a").attr("title");

        //use same ajax method as activity 13 to get info but replace team with main
        //also replace url with json_files/[title].json

        $.ajax({
            type: "get",
            url: "json_files/" + title + ".json",
            beforeSend: function() {
                $("main").html("Loading...");
            },
            timeout: 10000,
            error: function(xhr, status, error) {
                alert("Error: " + xhr.status + " - " + error);
            },
            dataType: "json",
            success: function(data) {
                $("main").html("");
    
                $.each(data,function(){
                    $.each(this, function(key, value){
                        $("main").append(
                            "<h1>" + value.title + "</h1>" + 
                            "<h2>" + value.month + "</h2>" + 
                            "<h3>" + value.speaker + "</h3>" +
                            "<img src = " + value.image + " alt = " + title + "_picture >" + 
                            "<p>" + value.text + "</p>" 
                        )
                    })
                })
                
            }
        });
    });
}); // end ready