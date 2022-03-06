let people = new Array("Gautam Kapur", "Michael Jackson", "Bill Murray", "Keanu Reeves");
let salaries = new Array(130000, 91000, 62000, 283000);

//loop through salary array and get average salary. display highest salary (and person) also
function displayResults()
{
    let totalSalary = 0;
    let avg = 0;

    for (i = 0; i < salaries.length; i++)
    {
        totalSalary += salaries[i];
    }

    avg = totalSalary / salaries.length;
}

function displaySalary()
{

}

function addSalary()
{

}