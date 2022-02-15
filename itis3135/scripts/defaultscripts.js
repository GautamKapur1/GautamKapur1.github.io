function printDate()
{
    let today = new Date()
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDay();
    let date = today.getDate();
    let hours = today.getHours();
    let minutes = today.getMinutes();

    let monthList = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    let weekdayList = new Array("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday");

    let ampm = "am";
    if(hours >= 12)
    {
        hours = hours % 12;
        ampm = "pm";
    }

    dateString = "Today is " + hours + ":" + minutes + ampm + " on " + weekdayList[day] + ", " + date + " " + monthList[month] + ", " + year;

    document.getElementById("printDate").innerHTML = dateString;
}

function greeting()
{
    let name = document.getElementById("name").value;
    let feeling = document.getElementById("feeling").value;
    let message = "The Golden Kiwi welcomes you, " + name + "! We're glad you are doing " + feeling + "!";
    document.getElementById("greetingMessage").innerHTML = message;
}

function calcCost()
{
    let kiwiCost = document.getElementById("kiwiCost").value;
    let kiwiAmnt = document.getElementById("kiwiAmnt").value;
    let cost = kiwiCost * kiwiAmnt;
    let message = "The total cost is: $" + parseFloat(cost.toFixed(2));
    document.getElementById("calculateCost").innerHTML = message;
}

function calcTax()
{
    let kiwiTax = document.getElementById("kiwiTax").value;
    kiwiTax /= 100;
    let kiwiCost = document.getElementById("kiwiCost").value;
    let kiwiAmnt = document.getElementById("kiwiAmnt").value;
    let cost = kiwiCost * kiwiAmnt;
    cost = parseFloat(cost.toFixed(2));
    let costAfterTax = cost + (cost * kiwiTax);
    let message = "The total cost after tax is: $" + parseFloat(costAfterTax.toFixed(2));
    document.getElementById("calculateTax").innerHTML = message;
}

function randomFact()
{
    let factList = new Array(
        "Kiwis are fruits, but they are also a bird species!", 
        "California produces 98% of all kiwis grown in the United States!", 
        "China grows over 400 varieties of kiwis!"
        );

    let randNum = Math.floor(Math.random() * factList.length);   
    document.getElementById("randomFact").innerHTML = factList[randNum];
}

function addKiwis()
{
    let person1 = document.getElementById("addKiwiPerson1").value;
    let person2 = document.getElementById("addKiwiPerson2").value;
    let total = parseInt(person1) + parseInt(person2);
    let message = "Total amount of kiwis: " + total + " kiwis";
    document.getElementById("addKiwi").innerHTML = message;
}

function subtractKiwis()
{
    let person1 = document.getElementById("subKiwiPerson1").value;
    let person2 = document.getElementById("subKiwiPerson2").value;
    let total = parseInt(person1) - parseInt(person2);
    let message = "Bob now has " + total + " kiwis left :(";
    document.getElementById("subtractKiwi").innerHTML = message;
}