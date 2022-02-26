function clearButton()
{
    document.getElementById("calcLabel").innerHTML = 0;
}

function absValueButton()
{
    var absValueNum = parseFloat(document.getElementById("calcLabel").innerHTML) * -1;
    document.getElementById("calcLabel").innerHTML = absValueNum;
}

function percentButton()
{
    var percent = parseFloat(document.getElementById("calcLabel").innerHTML) * .01;
    document.getElementById("calcLabel").innerHTML = percent;
}

function divisionButton()
{

}

function zeroButton()
{

    if (parseFloat(document.getElementById("calcLabel").innerHTML) == 0.0)
    {
        document.getElementById("calcLabel").innerHTML = 0;
    }
    else 
    {
        
        document.getElementById("calcLabel").innerHTML += 0;
    }
}

function oneButton()
{

    if (parseFloat(document.getElementById("calcLabel").innerHTML) == 0.0)
    {
        document.getElementById("calcLabel").innerHTML = 1;
    }
    else 
    {
        
        document.getElementById("calcLabel").innerHTML += 1;
    }
}

function twoButton()
{

    if (parseFloat(document.getElementById("calcLabel").innerHTML) == 0.0)
    {
        document.getElementById("calcLabel").innerHTML = 2;
    }
    else 
    {
        
        document.getElementById("calcLabel").innerHTML += 2;
    }
}

function threeButton()
{

    if (parseFloat(document.getElementById("calcLabel").innerHTML) == 0.0)
    {
        document.getElementById("calcLabel").innerHTML = 3;
    }
    else 
    {
        
        document.getElementById("calcLabel").innerHTML += 3;
    }
}

function fourButton()
{

    if (parseFloat(document.getElementById("calcLabel").innerHTML) == 0.0)
    {
        document.getElementById("calcLabel").innerHTML = 4;
    }
    else 
    {
        
        document.getElementById("calcLabel").innerHTML += 4;
    }
}

function fiveButton()
{

    if (parseFloat(document.getElementById("calcLabel").innerHTML) == 0.0)
    {
        document.getElementById("calcLabel").innerHTML = 5;
    }
    else 
    {
        
        document.getElementById("calcLabel").innerHTML += 5;
    }
}

function sixButton()
{

    if (parseFloat(document.getElementById("calcLabel").innerHTML) == 0.0)
    {
        document.getElementById("calcLabel").innerHTML = 6;
    }
    else 
    {
        
        document.getElementById("calcLabel").innerHTML += 6;
    }
}

function sevenButton()
{

    if (parseFloat(document.getElementById("calcLabel").innerHTML) == 0.0)
    {
        document.getElementById("calcLabel").innerHTML = 7;
    }
    else 
    {
        
        document.getElementById("calcLabel").innerHTML += 7;
    }
}

function eightButton()
{

    if (parseFloat(document.getElementById("calcLabel").innerHTML) == 0.0)
    {
        document.getElementById("calcLabel").innerHTML = 8;
    }
    else 
    {
        
        document.getElementById("calcLabel").innerHTML += 8;
    }
}

function nineButton()
{

    if (parseFloat(document.getElementById("calcLabel").innerHTML) == 0.0)
    {
        document.getElementById("calcLabel").innerHTML = 9;
    }
    else 
    {
        
        document.getElementById("calcLabel").innerHTML += 9;
    }
}
