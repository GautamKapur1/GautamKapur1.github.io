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

function randomInsult()
{
    let insultList = new Array(
        "Want to know one difference between a kiwi and your mother? Kiwis don't belong in the streets.", 
        "Want to know one similarity between a kiwi and your grandmother? Both look like a disembodied testicle.",
        "Kiwis are so sweet and tasty. Everybody loves them. No wonder nobody ever calls you a kiwi."
        );

    let randNum = Math.floor(Math.random() * insultList.length);   
    document.getElementById("randomInsult").innerHTML = insultList[randNum];
}