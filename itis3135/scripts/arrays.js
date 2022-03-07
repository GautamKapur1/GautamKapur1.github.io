let people = new Array();
let salaries = new Array();

//loop through salary array and get average salary. display highest salary (and person) also
function displayResults()
{
    var totalSalary = 0;
    let avg = 0;
    let highest = 0;
    let highestIndex = 0;

    for (i = 0; i < salaries.length; i++)
    {
        totalSalary = +totalSalary + +parseFloat(salaries[i]).toFixed(2);
        if (+salaries[i] > +highest)
        {
            highest = salaries[i];
            highestIndex = i;
        }
    }
    avg = parseFloat(totalSalary / salaries.length).toFixed(2);
    
    let message = "<h3>Results</h3><p>The average salary is: $" + avg + ". The person with the highest salary is "
     + people[highestIndex] + " with a salary of: $" + highest + ".</p>";

     document.getElementById("results").innerHTML = message;
}

//display salaries as table format
function displaySalary()
{
    let startTable = "<h3>Salary Table</h3><table><tr><th>Name</th><th>Salary</th></tr>";
    let tableInfo = "";
    let endTable = "</table>";

    for (i = 0; i < salaries.length; i++)
    {
        tableInfo += "<tr><th>" + people[i] + "</th><th>$" + salaries[i] + "</th></tr>";
    }

    document.getElementById("results_table").innerHTML = startTable + tableInfo + endTable;
}

function addSalary()
{
    let person = document.getElementById("employeeList").value;
    let salary = parseFloat(document.getElementById("salaryamnt").value).toFixed(2);
    let arrContainsPerson = false;
    let personIndex = 0;

    console.log(isNaN(salary));

    if (true)
    {
        for (i = 0; i < people.length; i++)
        {
            if (people[i] == person) 
            {
                arrContainsPerson = true;
                personIndex = i;
            }
        }
        if (arrContainsPerson)
        {
            salaries[personIndex] = salary;
        }
        else
        {
            people.push(person);
            salaries.push(salary);
        }
        
        document.getElementById("addsalaryresult").innerHTML = person + 
        " has been added to the list with a salary of $" + salary;
    }
    else
    {
        document.getElementById("addsalaryresult").innerHTML = "Oops! Please enter a salary!";
    }
}