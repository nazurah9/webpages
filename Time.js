function Greeting() {
    var date = new Date();
    var hours = date.getHours();
    var timeOfDay;
    if (hours < 12) {
        timeOfDay = "MORNING";
    } else if (hours < 17) {
        timeOfDay = "AFTERNOON";
    } else {
        timeOfDay = "EVENING";
    }

    document.getElementById("greetings").innerHTML = "It's " + date.toTimeString() + " right now so, GOOD " + timeOfDay + "!";
}