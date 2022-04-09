function alertUser()
{
    var guess = prompt("The Golden Kiwi would like you to enter a number between 1-10 and the name of the polygon will be printed!");
    validateNum(guess);
}

function validateNum(_guess)
{
    if(isNaN(_guess)){
        alert("Sorry! That was not a number between 1-10! Please try again!");
        alertUser();
    }
    else
    {
        number = Math.abs(number);
        number = Math.round(_guess);
        if(number > 10 || number < 1)
        {
            alert("Sorry! That was not a number between 1-10! Please try again!");
            alertUser();
        }
        else
        {
            getShape(number);
        }
    }
}

function getShape(sides)
{
    var polygonList = new Array(
        "Henagon", 
        "Digon", 
        "Triangle", 
        "Quadrilateral", 
        "Pentagon", 
        "Hexagon", 
        "Heptagon", 
        "Octagon",
        "Nonagon",
        "Decagon",  
    );
    
    var message = "A polygon with " + sides + " sides is called a " + polygonList[sides - 1] + ".";

    document.getElementById("polygonName").innerHTML = message;
}