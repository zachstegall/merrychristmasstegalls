function startCountdown() {
    // Set the date we're counting down to
    var countDownDate = new Date("Dec 25, 2017 00:00:00").getTime();

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Exit early if past time
    if (distance <= 0) {
        clear();
        return false;
    }

    // Update the count down every 1 second
    var x = setInterval(function() {
        now = new Date().getTime();
        distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        // If the count down is finished, write some text
        if (distance <= 0) {
            clearInterval(x);

            clear();
            stopSnow();
        }
    }, 1000);
    return true;
}

function clear() {
    var countdown = document.getElementById("countdown");
    while (countdown.firstChild) {
        countdown.removeChild(countdown.firstChild);
    }

    var header = document.createElement('h1');
    header.innerHTML = "Merry Christmas Stegalls";
    header.className = "text-light";
    countdown.appendChild(header);

    document.getElementById("poemTitle").innerHTML = "It's Here!";

    var gifts = document.createElement('a');
    gifts.role = "button";
    gifts.innerHTML = "Open gifts";
    gifts.className = "btn btn-outline-light greeting";
    gifts.href = "gifts.html";

    var giftsWrapper = document.createElement('div');
    giftsWrapper.className = "row justify-content-center mb-3";
    giftsWrapper.appendChild(gifts);

    var content = document.getElementById('content');
    content.insertBefore(giftsWrapper, content.childNodes[2])
}

function stopSnow() {
    var snowContainer = document.querySelector('.snowContainer');
    var canvas = snowContainer.getElementsByTagName('canvas')[0];
    snowContainer.removeChild(canvas);
}
