let people = new Array("Gautam Kapur", "Michael Jackson", "Bill Murray", "Keanu Reeves");
let salaries = new Array(130000, 91000, 62000, 283000);

//loop through salary array and get average salary. display highest salary (and person) also
function displayResults()
{
    let totalSalary = 0;
    let avg = 0;
    let highest = 0;
    let highestIndex = 0;

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
    let message = "<h3>Results</h3><p>The average salary is: $" + avg + ". The person with the highest salary is "
     + people[highestIndex] + " with a salary of: $" + highest + ".</p>";

     document.getElementById("results").innerHTML = message;
}

//display salaries as table format
function displaySalary()
{
    let startTable = "<h3>Salary</h3><table><tr><th>Name</th><th>Salary</th></tr>";
    let tableInfo = "";
    let endTable = "</table>";

    for (i = 0; i < salaries.length; i++)
    {
        tableInfo += "<tr><th>" + people[i] + "</th><th>" + salaries[i] + "</th></tr>";
    }

    document.getElementById("results_table").innerHTML = startTable + tableInfo + endTable;
}

function addSalary()
{

}