$(document).ready(function() 
{
    var imgLink;
    var curr_pic;
    var next_pic;

    //when left arrow clicked
    $('#leftarrow').on('click', function()
    {
        curr_pic = $('#curr_pic');
        next_pic = curr_pic.next();
        curr_pic.removeAttr('id');
        next_pic.attr('id', 'curr_pic')
    });

    //when right arrow clicked
    $('#rightarrow').on('click', function()
    {
        curr_pic = $('#curr_pic');

    });
})