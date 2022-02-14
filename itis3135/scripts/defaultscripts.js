function printDate()
{
    var today = new Date()
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var day = today.getDay();
    var date = today.getDate();
    var hours = today.getHours();
    var minutes = today.getMinutes();

    var monthList = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    var weekdayList = new Array("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday");

    var ampm = "am";
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
    calcCost(cost);
    document.getElementById("calculateCost").innerHTML = message;
}

function calcTax(cost)
{
    let kiwiTax = document.getElementById("kiwiTax").value;
    kiwiTax /= 100;
    let costAfterTax = cost - (cost * kiwiTax);
    let message = "The total cost after tax is: $" + parseFloat(costAfterTax.toFixed(2));
    document.getElementById("calculateTax").innerHTML = message;
}

function testBug()
{
    alert("test");
}