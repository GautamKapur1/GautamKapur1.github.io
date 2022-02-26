function clearButton()
{
    document.getElementById("calcLabel").innerHTML = 0;
}

function absValueButton()
{

}

function percentButton()
{

}

function divisionButton()
{

}

function sevenButton()
{
    if (document.getElementById("calcLabel") == 0)
    {
        document.getElementById("calcLabel").innerHTML = 7;
    }
    else 
    {
        document.getElementById("calcLabel").innerHTML += 7;
    }
}