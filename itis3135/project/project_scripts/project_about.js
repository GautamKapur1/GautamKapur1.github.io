$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "project_scripts/people.json",
        beforeSend: function() {
            $("#team").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#team").html("");

            $.each(data,function(){
                $.each(this, function(key, value){
                    $("#team").append(
                        "<p><strong>Name</strong>: " + value.name + "</p>" + 
                        "<p><strong>Title</strong>: " + value.title + "</p>" + 
                        "<p><strong>Bio</strong>: " + value.bio + "</p><br />" 
                    )
                })
            })
            
        }
    });
});

