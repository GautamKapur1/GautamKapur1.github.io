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