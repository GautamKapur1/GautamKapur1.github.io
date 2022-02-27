var memory = 0;
var totalAfterOperation = null;
var operationList = new Array("addition", "subtraction", "multiplication", "division");
var operation = "none";
var justClickedOperation = false;

function clearButton()
{
    document.getElementById("calcLabel").innerHTML = 0;
    memory = 0;
    totalAfterOperation = null;
    operation = "none";
    justClickedOperation = false;
}

function additionButton()
{
    var currVal;
    currVal = document.getElementById("calcLabel").innerHTML
    computeFunction(currVal, operation);

    if (totalAfterOperation != null)
    {
        currVal = document.getElementById("calcLabel").innerHTML
        computeFunction(currVal, operation);
        document.getElementById("calcLabel").innerHTML = totalAfterOperation;
    }

    memory = document.getElementById("calcLabel").innerHTML;
    operation = operationList[0];
    justClickedOperation = true;
}

function subtractionButton()
{
    var currVal;
    currVal = document.getElementById("calcLabel").innerHTML
    computeFunction(currVal, operation);

    if (totalAfterOperation != null)
    {
        currVal = document.getElementById("calcLabel").innerHTML
        computeFunction(currVal, operation);
        document.getElementById("calcLabel").innerHTML = totalAfterOperation;
    }

    memory = document.getElementById("calcLabel").innerHTML;
    operation = operationList[1];
    justClickedOperation = true;
}

function multiplicationButton()
{
    var currVal;
    currVal = document.getElementById("calcLabel").innerHTML
    computeFunction(currVal, operation);

    if (totalAfterOperation != null)
    {
        currVal = document.getElementById("calcLabel").innerHTML
        computeFunction(currVal, operation);
        document.getElementById("calcLabel").innerHTML = totalAfterOperation;
    }

    memory = document.getElementById("calcLabel").innerHTML;
    operation = operationList[2];
    justClickedOperation = true;
}

function divisionButton()
{
    var currVal;
    currVal = document.getElementById("calcLabel").innerHTML
    computeFunction(currVal, operation);

    if (totalAfterOperation != null)
    {
       currVal = document.getElementById("calcLabel").innerHTML
        computeFunction(currVal, operation);
        document.getElementById("calcLabel").innerHTML = totalAfterOperation;
    }

    memory = document.getElementById("calcLabel").innerHTML;
    operation = operationList[3];
    justClickedOperation = true;
}

function equalButton()
{
    var currVal = document.getElementById("calcLabel").innerHTML
    computeFunction(currVal, operation);

    if(totalAfterOperation != null)
    {
        document.getElementById("calcLabel").innerHTML = totalAfterOperation;
    } 
    totalAfterOperation = null;
    operation = "none";
    justClickedOperation = false;
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
    if (parseFloat(document.getElementById("calcLabel").innerHTML) == 0.0 || justClickedOperation)
    {
        document.getElementById("calcLabel").innerHTML = 0;
        justClickedOperation = false;
    }
    else 
    {   
        document.getElementById("calcLabel").innerHTML += 0;
    }
}

function oneButton()
{
    if (parseFloat(document.getElementById("calcLabel").innerHTML) == 0.0 || justClickedOperation)
    {
        document.getElementById("calcLabel").innerHTML = 1;
        justClickedOperation = false;
    }
    else 
    { 
        document.getElementById("calcLabel").innerHTML += 1;
    }
}

function twoButton()
{

    if (parseFloat(document.getElementById("calcLabel").innerHTML) == 0.0 || justClickedOperation)
    {
        document.getElementById("calcLabel").innerHTML = 2;
        justClickedOperation = false;
    }
    else 
    {  
        document.getElementById("calcLabel").innerHTML += 2;
    }
}

function threeButton()
{

    if (parseFloat(document.getElementById("calcLabel").innerHTML) == 0.0 || justClickedOperation)
    {
        document.getElementById("calcLabel").innerHTML = 3;
        justClickedOperation = false;
    }
    else 
    {
        document.getElementById("calcLabel").innerHTML += 3;
    }
}

function fourButton()
{

    if (parseFloat(document.getElementById("calcLabel").innerHTML) == 0.0 || justClickedOperation)
    {
        document.getElementById("calcLabel").innerHTML = 4;
        justClickedOperation = false;
    }
    else 
    {
        document.getElementById("calcLabel").innerHTML += 4;
    }
}

function fiveButton()
{

    if (parseFloat(document.getElementById("calcLabel").innerHTML) == 0.0 || justClickedOperation)
    {
        document.getElementById("calcLabel").innerHTML = 5;
        justClickedOperation = false;
    }
    else 
    {
        document.getElementById("calcLabel").innerHTML += 5;
    }
}

function sixButton()
{

    if (parseFloat(document.getElementById("calcLabel").innerHTML) == 0.0 || justClickedOperation)
    {
        document.getElementById("calcLabel").innerHTML = 6;
        justClickedOperation = false;
    }
    else 
    { 
        document.getElementById("calcLabel").innerHTML += 6;
    }
}

function sevenButton()
{

    if (parseFloat(document.getElementById("calcLabel").innerHTML) == 0.0 || justClickedOperation)
    {
        document.getElementById("calcLabel").innerHTML = 7;
        justClickedOperation = false;
    }
    else 
    {
        document.getElementById("calcLabel").innerHTML += 7;
    }
}

function eightButton()
{

    if (parseFloat(document.getElementById("calcLabel").innerHTML) == 0.0 || justClickedOperation)
    {
        document.getElementById("calcLabel").innerHTML = 8;
        justClickedOperation = false;
    }
    else 
    {
        document.getElementById("calcLabel").innerHTML += 8;
    }
}

function nineButton()
{

    if (parseFloat(document.getElementById("calcLabel").innerHTML) == 0.0 || justClickedOperation)
    {
        document.getElementById("calcLabel").innerHTML = 9;
        justClickedOperation = false;
    }
    else 
    {
        document.getElementById("calcLabel").innerHTML += 9;
    }
}
