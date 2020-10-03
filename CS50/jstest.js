    /* Blinking text */
    function blink(){
        let body = document.querySelector('#blink');
        if (body.style.visibility === 'hidden')
        {
            body.style.visibility = "visible";
        }
        else
        {
            body.style.visibility = "hidden";
        }
    }
    window.setInterval(blink, 500);

    /* Change tet size */
    document.querySelector('select').onchange = function() {
        document.querySelector('#select').style.fontSize = this.value;
    }

    /* Greet in alert box */
    function greet()
    {
        let name = document.querySelector("#name").value;
        if (name === "")
        {
            alert("Hello, world!");
        }
        else
        {
            alert("Hello, " + name + "!");
        }
    }

    /* Greet in HTML */
    function greet2()
    {
        let name = document.querySelector("#name2").value;
        if (name === "")
        {
            alert("Hello, world!");
        }
        document.querySelector("#result").innerHTML = "Hello, " + name + "!";
    }

    /* Counter */
    let counter = 0;
    function increment()
    {
        counter++;
        document.querySelector("#incrementer").innerHTML = counter;
    }

    // Change colors of heading - This is an anonemous function - no name
    document.querySelector("#red").onclick = function(){
        document.getElementById("button").style.color = "red";
    }
    document.querySelector("#green").onclick = function(){
        document.getElementById("button").style.color = "green";
    }
    document.querySelector("#blue").onclick = function(){
        document.getElementById("button").style.color = "blue";
    }

    /* Geolocation */
    navigator.geolocation.getCurrentPosition(function (position) {
            document.write(position.coords.latitude + ', ' + position.coords.longitude);
        });
