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

    document.write("<h3>Today is " + hours + ":" + minutes + ampm + " on " + weekdayList[day] + ", " + date + " " + monthList[month] + ", " + year + "</h3>");
}