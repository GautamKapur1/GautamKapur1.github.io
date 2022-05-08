function calcCost()
{
    var classesPerWeek = document.getElementById("classes_per_week");
    var classLength = document.getElementById("class_length");
    var displayCost = document.getElementById("cost");
    let count = 0;

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
    }
    else
    {
        if (classLength.value == 0 || classLength.value < 0.5 || classLength.value > 3)
        {
            displayCost.innerHTML += "<strong>Error</strong>: Please enter a valid class length (anywhere between 30 minutes and 3 hours).";
        }
    }
    
    if (classesPerWeek.value != 0 && classLength.value != 0) 
    {
        let hrsClassPerWeek = classesPerWeek.value * classLength.value;
        let cost = hrsClassPerWeek * 15;
        displayCost.innerHTML += "<strong>Total Cost: $" + cost.toFixed(2) + "</strong>";
        //15$ per hour of class
    }
}