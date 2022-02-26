function clearButton()
{
    document.getElementById("calcLabel").innerHTML = 0;
}

function absValueButton()
{
    var absValueNum = parseInt(document.getElementById("calcLabel").innerHTML) * -1;
    document.getElementById("calcLabel").innerHTML = absValueNum;
}

function percentButton()
{
    var percent = parseInt(document.getElementById("calcLabel").innerHTML) * .01;
    document.getElementById("calcLabel").innerHTML = percent;
}

function divisionButton()
{

}

function sevenButton()
{

    if (parseInt(document.getElementById("calcLabel").innerHTML) == 0)
    {
        document.getElementById("calcLabel").innerHTML = 7;
    }
    else 
    {
        
        document.getElementById("calcLabel").innerHTML += 7;
    }
}