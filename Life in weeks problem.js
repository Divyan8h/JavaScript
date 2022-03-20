function lifeInWeek(age)
    {
        var days = (90-age)*365;
        var weeks = (90-age)*52;
        var months = (90-age)*12;
        console.log("You have " + " " + days + " " + "days" + "," + " " + weeks + " " + "weeks" + "," + "and" + " " + months + " " + "months left.")
    }

lifeInWeek(56);
