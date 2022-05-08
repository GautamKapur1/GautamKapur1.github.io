function calcCost()
{
    var classesPerWeek = document.getElementById("classes_per_week");
    var classLength = document.getElementById("class_length");
    var displayCost = document.getElementById("cost");
    var personAge = document.getElementById("person_age");
    var option = personAge.options[personAge.selectedIndex];

    var costPerHrOfClass = 0;
    var count = 0;
    
    displayCost.innerHTML = "";

    if (classesPerWeek.value == 0 || classesPerWeek.value < 1 || classesPerWeek.value > 7 || classesPerWeek.value % 1 != 0) 
    {
        displayCost.innerHTML += "<strong>Error</strong>: Please enter a valid number of classes per week anywhere between 1 and 7 (Whole Numbers Only!) ";
        count++;
    }
    if (count > 0)
    {
        if (classLength.value == 0 || classLength.value < 0.5 || classLength.value > 3)
        {
            displayCost.innerHTML += "<p><strong>Error</strong>: Please enter a valid class length (anywhere between 30 minutes and 3 hours).</p>";
        }
        if (option.value == 0) 
        {
            displayCost.innerHTML += "<p><strong>Error</strong>: Please select the swimmer's age range.</p>";
        }
    }
    else
    {
        if (classLength.value == 0 || classLength.value < 0.5 || classLength.value > 3)
        {
            displayCost.innerHTML += "<strong>Error</strong>: Please enter a valid class length (anywhere between 30 minutes and 3 hours).";
        }
        if (option.value == 0) 
        {
            displayCost.innerHTML += "<strong>Error</strong>: Please select the swimmer's age range.";
        }

    }
    
    if (classesPerWeek.value != 0 && classLength.value != 0 && option.value != 0) 
    {
        //$7.49 per hour of class for child
        //$12.49 per hour of class for young adult
        //$14.99 per hour of class for adult

        if (option.value == "child") 
        {
            costPerHrOfClass = 7.49;
        }
        else if (option.value == "young_adult")
        {
            costPerHrOfClass = 12.49;
        }
        else if (option.value == "adult")
        {
            costPerHrOfClass = 14.99;
        }

        var hrsClassPerWeek = classesPerWeek.value * classLength.value;
        var cost = hrsClassPerWeek * costPerHrOfClass;
        displayCost.innerHTML += "The cost for 1 hour of class is $" + costPerHrOfClass.toFixed(2) + 
        "<p><strong>Total Cost: $" + cost.toFixed(2) + "</strong></p>";

    }
}