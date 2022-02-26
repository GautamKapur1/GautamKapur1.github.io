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
    console.log(parseInt(document.getElementById("calcLabel")) == 0);
    if (parseInt(document.getElementById("calcLabel")) == 0)
    {
        document.getElementById("calcLabel").innerHTML = 7;
    }
    else 
    {
        
        document.getElementById("calcLabel").innerHTML += 7;
    }
}