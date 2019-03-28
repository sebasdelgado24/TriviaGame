
//  Timed Form
    //  Set our number counter to 60 seconds.
    var number = 60;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;

    //  When the Done button gets clicked, run the Done function.
    $("#done").on("click", done);

    //  When the start button gets clicked, execute the run function.
    $("#start").on("click", run);

    //  The run function sets an interval
    //  that runs the decrement function once a second.
    //  *****BUG FIX******** 
    //  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.

    function run() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $("#show-number").html("<h2>" + "Time Remaining" + " " + number + " "+ "Seconds"+ "</h2>");


      //  Once number hits zero...
      if (number === 0) {

        //  ...run the done function.
        done();

        //  Alert the user that time is up.
        alert("Time Up!");
      }
    }

    //  The done function
    function done() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }

    //  Execute the run function; if we leave the following code it will start before clicking on the start button.
    //run();