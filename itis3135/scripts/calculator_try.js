var memory = 0;
var totalAfterOperation = null;
var operationList = new Array("addition", "subtraction", "multiplication", "division");
var operation = "none";

function clearButton()
{
    document.getElementById("calcLabel").innerHTML = 0;
    memory = 0;
    totalAfterOperation = null;
    operation = "none";
}

function additionButton()
{   
    if (totalAfterOperation != null)
    {
        document.getElementById("calcLabel").innerHTML = totalAfterOperation;
    }
    memory = document.getElementById("calcLabel").innerHTML;
    operation = operationList[0];
}

function subtractionButton()
{
    if (totalAfterOperation != null)
    {
        document.getElementById("calcLabel").innerHTML = totalAfterOperation;
    }
    memory = document.getElementById("calcLabel").innerHTML;
    operation = operationList[1];
}

function multiplicationButton()
{
    if (totalAfterOperation != null)
    {
        document.getElementById("calcLabel").innerHTML = totalAfterOperation;
    }
    memory = document.getElementById("calcLabel").innerHTML;
    operation = operationList[2];
}

function divisionButton()
{
    if (totalAfterOperation != null)
    {
        document.getElementById("calcLabel").innerHTML = totalAfterOperation;
    }
    memory = document.getElementById("calcLabel").innerHTML;
    operation = operationList[3];
}

function equalButton()
{
    if(totalAfterOperation != null)
    {
        document.getElementById("calcLabel").innerHTML = totalAfterOperation;
    }  
}

function computeFunction(value, operationType)
{
    if (operationType == "addition")
    {
        totalAfterOperation = parseFloat(memory) + parseFloat(value);
    }
    else if (operationType == "subtraction")
    {
        totalAfterOperation = parseFloat(memory) - parseFloat(value);
    }
    else if (operationType == "multiplication")
    {
        totalAfterOperation = parseFloat(memory) * parseFloat(value);
    }
    else if (operationType == "division")
    {
        totalAfterOperation = parseFloat(memory) / parseFloat(value);
    }
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

function decimalButton()
{
    var value = document.getElementById("calcLabel").innerHTML;
    if (!value.includes("."))
    {
        var decimal = value + ".";
        document.getElementById("calcLabel").innerHTML = decimal;
    }
}

function zeroButton()
{
    if (parseFloat(document.getElementById("calcLabel").innerHTML) == 0.0 || operation != "none")
    {
        document.getElementById("calcLabel").innerHTML = 0;
        computeFunction(0, operation)
    }
    else 
    {
        
        document.getElementById("calcLabel").innerHTML += 0;
    }
}

function oneButton()
{
    if (parseFloat(document.getElementById("calcLabel").innerHTML) == 0.0 || operation != "none")
    {
        document.getElementById("calcLabel").innerHTML = 1;
        computeFunction(1, operation)
    }
    else 
    {
        
        document.getElementById("calcLabel").innerHTML += 1;
    }
}

function twoButton()
{

    if (parseFloat(document.getElementById("calcLabel").innerHTML) == 0.0 || operation != "none")
    {
        document.getElementById("calcLabel").innerHTML = 2;
        computeFunction(2, operation)
    }
    else 
    {
        
        document.getElementById("calcLabel").innerHTML += 2;
    }
}

function threeButton()
{

    if (parseFloat(document.getElementById("calcLabel").innerHTML) == 0.0 || operation != "none")
    {
        document.getElementById("calcLabel").innerHTML = 3;
        computeFunction(3, operation)
    }
    else 
    {
        
        document.getElementById("calcLabel").innerHTML += 3;
    }
}

function fourButton()
{

    if (parseFloat(document.getElementById("calcLabel").innerHTML) == 0.0 || operation != "none")
    {
        document.getElementById("calcLabel").innerHTML = 4;
        computeFunction(4, operation)
    }
    else 
    {
        
        document.getElementById("calcLabel").innerHTML += 4;
    }
}

function fiveButton()
{

    if (parseFloat(document.getElementById("calcLabel").innerHTML) == 0.0 || operation != "none")
    {
        document.getElementById("calcLabel").innerHTML = 5;
        computeFunction(5, operation)
    }
    else 
    {
        
        document.getElementById("calcLabel").innerHTML += 5;
    }
}

function sixButton()
{

    if (parseFloat(document.getElementById("calcLabel").innerHTML) == 0.0 || operation != "none")
    {
        document.getElementById("calcLabel").innerHTML = 6;
        computeFunction(6, operation)
    }
    else 
    {
        
        document.getElementById("calcLabel").innerHTML += 6;
    }
}

function sevenButton()
{

    if (parseFloat(document.getElementById("calcLabel").innerHTML) == 0.0 || operation != "none")
    {
        document.getElementById("calcLabel").innerHTML = 7;
        computeFunction(7, operation)
    }
    else 
    {
        
        document.getElementById("calcLabel").innerHTML += 7;
    }
}

function eightButton()
{

    if (parseFloat(document.getElementById("calcLabel").innerHTML) == 0.0 || operation != "none")
    {
        document.getElementById("calcLabel").innerHTML = 8;
        computeFunction(8, operation)
    }
    else 
    {
        
        document.getElementById("calcLabel").innerHTML += 8;
    }
}

function nineButton()
{

    if (parseFloat(document.getElementById("calcLabel").innerHTML) == 0.0 || operation != "none")
    {
        document.getElementById("calcLabel").innerHTML = 9;
        computeFunction(9, operation)
    }
    else 
    {
        
        document.getElementById("calcLabel").innerHTML += 9;
    }
}
