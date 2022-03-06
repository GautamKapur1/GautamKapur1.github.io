let people = new Array("Gautam Kapur", "Michael Jackson", "Bill Murray", "Keanu Reeves");
let salaries = new Array(130000, 91000, 62000, 283000);

//loop through salary array and get average salary. display highest salary (and person) also
function displayResults()
{
    let totalSalary = 0;
    let avg = 0;
    let highest = 0;
    let highestIndex = 0;

    //gets avg salary
    for (i = 0; i < salaries.length; i++)
    {
        totalSalary += salaries[i];
        if (salaries[i] > highest)
        {
            highest = salaries[i];
            highestIndex = i;
        }
    }
    avg = totalSalary / salaries.length;
    let message = "<h2>Results</h2><p>The average salary is: $" + avg + ". The person with the highest salary is "
     + people[highestIndex] + " with a salary of: $" + highest + ".</p>";
     
     document.getElementById("results").innerHTML = message;
}

function displaySalary()
{

}

function addSalary()
{

}