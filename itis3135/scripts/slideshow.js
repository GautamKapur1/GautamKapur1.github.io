$(document).ready(function() 
{
    var curr_pic;
    var next_pic;

    //left arrow click
    $('#leftarrow').on('click', function()
    {
        curr_pic = $('#current_pic');
        next_pic = curr_pic.next();

        if (next_pic.length > 0) 
        {
            curr_pic.removeAttr('id');
            next_pic.attr('id', 'current_pic');
        }
    });

    //right arrow click
    $('#rightarrow').on('click', function()
    {
        curr_pic = $('#current_pic');
        next_pic = curr_pic.prev();
        if (next_pic.length > 0) 
        {
            curr_pic.removeAttr('id');
            next_pic.attr('id', 'current_pic')
        }
    });
})