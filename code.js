function countdowntimer(){
    //countdowntimer will go from 50 to 0 by 5s
    console.log("countdowntimer() started");
    var currTime = 50;
    document.getElementById("countDis").innerHTML = currTime + " sec";

    //45 sec display
    setTimeout(function(){
        currTime = currTime -5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 5000);

    //40 sec display
    setTimeout(function(){
        currTime = currTime -5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 10000);

    //35 sec display
    setTimeout(function(){
        currTime = currTime -5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 15000);

    //30 sec display
    setTimeout(function(){
        currTime = currTime -5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 20000);

    //25 sec display
    setTimeout(function(){
        currTime = currTime -5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 25000);

    //20 sec display
    setTimeout(function(){
        currTime = currTime -5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 30000);

    //15 sec display
    setTimeout(function(){
        currTime = currTime -5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 35000);

    //10 sec display
    setTimeout(function(){
        currTime = currTime -5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 40000);

    //5 sec display
    setTimeout(function(){
        currTime = currTime -5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 45000);

    //0 sec display
    setTimeout(function(){
        currTime = currTime -5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = "Blastoff!!!";
    }, 50000);
}

//btrCountdownTimer() created to fulfill assignment Assignment: Efficiency at Mission Control
function btrCountdownTimer(){
    console.log("btrCountdownTimer() started")
    var currTime = 50;

    for (var i = 0; i < 11; i = i + 1){
        setTimeout(function(){
            //what we do each iteration
            console.log(currTime);
            document.getElementById("countDis").innerHTML = currTime;
            if (currTime == 0){
                document.getElementById("countDis").innerHTML = "Blastoff!!!";
            }
            currTime = currTime -5;
        }, i * 5000)
    }
}
function chgBtrCountdownTimer(){
    console.log("chgBtrCountdownTimer() started");
    var currTime = 50;
    var ogCurrTime = currTime;

    for (var i = 0; i < 11; i = i + 1){
        setTimeout(function(){
            //what we do each iteration
            console.log(currTime);
            if (currTime == 0){
                //when we finish counting down
                document.getElementById("countDis").innerHTML = "Blastoff!!!";
            } else if (currTime < 0.5 * ogCurrTime){
                //less than 1/2 left
                document.getElementById("countDis").innerHTML = "Warning Less than 1/2 way to launch, time left = " + currTime + " seconds";
            } else {
                //at the beginning
                document.getElementById("countDis").innerHTML = currTime + " seconds";
            }
            currTime = currTime -5;
        }, i * 5000)
    }
}

    //a block of resuable code written to perform a specific task
    function playCraps(){
    //troubleshooting playCraps() has started
    console.log("playCraps() started");
    
    //a variable stores the data value that can be changed later on
    var die1 = 0;
    var die2 = 0;

    //Math.ciel rounds up; Math.random returns a pseudo-random # that is greater than or eqaul to 0 and less than 1, can scale to desired range
    die1 = Math.ceil(6 * Math.random());
    die2 = Math.ceil(6 * Math.random());

    //outputs a message to the console
    console.log(die1);
    console.log(die2);
    
    //returns an element object that represents an HTML element
    document.getElementById("die1Res").innerHTML = "The result for die1 is: " + die1;
    document.getElementById("die2Res").innerHTML = "The result for die2 is: " + die2;

    //check if craps (7 or 11)
    var sum = die1 + die2;
    //If..then statement
    if(sum == 7 || sum == 11){
        console.log("You lose!!!")
        document.getElementById("gameRes").innerHTML = "You did not find victory. Please play again and WIN!";
    }

    //check for win (even doubles)
    //used to specify a new condition if the first condition is false
    else if(die1 % 2 == 0 && die1 == die2){
        console.log("You win!!!")
        document.getElementById("gameRes").innerHTML = "You won!!!";
    }

    //check for tie
    //perform action based on condition
    else{
        console.log("You did not win or lose.")
        document.getElementById("gameRes").innerHTML = "You did not win or lose. Please play again and WIN!";
    }
}

function startFun(){
    console.log("startFun() started");
    //disable start button
    document.getElementById("startButton").disabled = true;

    //enable (disbale!) stop button
    document.getElementById("stopButton").disabled = false;

    document.getElementById("dataTable").rows["seconds"].innerHTML = "reading data"

    //run updateDisplay()
    index = 0;
    timer = setInterval(updateDisplay, time_interval);
}

function stopFun(){
    console.log("stopFun() started");
    //disable stop button
    document.getElementById("stopButton").disabled = true;

    //enable (disbale!) start button
    document.getElementById("startButton").disabled = false;

    clearInterval(timer);
}

//making function for the sound itself
function playStation(){
    //writes to the console, makes sure it is running okay
    console.log("playStation() started");
    //defines the object to be implemented with
    mySound = new sound("us-lab-background.mp3");
    //calls object and calls play function
    mySound.play();
}

//making function for the parameters of the sound, which is the source file
function sound(srcFile){
    //whatever object you are calling up is going to modify whatever properties with the currently loaded version of the object
    this.sound = document.createElement("audio");
    //whatever you put in into the parentheses, it is going to use this file as the source
    this.sound.src = srcFile;
    //set the audio so it is ready to go
    this.sound.setAttribute("preload", "audio");
    //there are no controls on the screen
    this.sound.setAttribute("controls", "none");
    //all it will do is play a sound, there will be no display
    this.sound.style.display = "none";
    //the appendChild locks the parameters from above
    document.body.appendChild(this.sound);
    //this is referring to the object, which is play
    this.play = function(){
        //play function is one function in the class
        this.sound.play();
    }
}

function playBowie(){
    console.log("playBowie() started");
    mySound2 = new sound("David-Bowie-Space-Oddity.mp3");
    mySound2.play();
}