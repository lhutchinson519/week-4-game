$(document).ready(function() {
    // all custom jQuery will go here

  //function randomtop(){
    //generate a number between 120 and 18
    var randomnum = Math.floor(Math.random() * 120) + 18;  
    	console.log("number to reach:" + randomnum);
      $("#number-to-guess").text(randomnum)
  //}
//

  //function randomGem(){
    var blank_arr = []

    // for loop, looping through 4 times, generate a random number and add to array 
    for (var i = 0; i < 4; i++){

     //generate crystal values from 1- 12
        var crystalnum = Math.floor(Math.random() * 12) + 1;  
          console.log("gem points:" + crystalnum);
          blank_arr.push(crystalnum)
          $("#crystals");
      }


    var gemSources = ["ruby.jpg", "diamond.png", "sapphire-003.jpg", "opal.jpg"]
  // Next we create a for loop to create crystals for every numberOption.
  for (var i = 0; i < blank_arr.length; i++) {
      // console.log(crystalnum);        

        // For each iteration, we will create an imageCrystal
        var imageCrystal = $("<img>");

        // First each crystal will be given the class ".crystal-image".
        // This will allow the CSS to take effect.
        imageCrystal.addClass("crystal-image");

        // Each imageCrystal will be given a src link to the crystal image
        imageCrystal.attr("src", "assets/images/" + gemSources[i]);//"assets/images/diamond.png") ;

        // Each imageCrystal will be given a data attribute called data-crystalValue.
        // This data attribute will be set equal to the array value.
        imageCrystal.attr("data-crystalvalue", blank_arr[i]);

        // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
        $("#crystals").append(imageCrystal);
        
    } 
  //}

      //the users total score which will change when each button is clicked
    var counter = 0;
      console.log("user score:" + counter);
      $("#totalscore").text(counter);

    //counting wins and losses
    var wins = 0;
    $("#wins").text(wins);
    var losses = 0;
    $("#losses").text(losses);

       $(".crystal-image").on("click", function() {
    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    
            var crystalValue = ($(this).attr("data-crystalvalue"));
            crystalValue = parseInt(crystalValue);
            // We then add the crystalValue to the user's "counter" which is a global variable.
            // Every click, from every crystal adds to the global counter.
            counter += crystalValue;
            console.log(crystalValue);
            console.log(counter);
            $("#totalscore").text(counter);

            if (counter === randomnum) {
              alert("You win!");
              wins++;
              $("#wins").text(wins);
            }

            else if (counter >= randomnum) {
              alert("You lose!!");
              losses++;
              $("#losses").text(losses);
              counter = 0;
              $("#totalscore").text(counter);

              //set new top num
              randomnum = Math.floor(Math.random() * 120) + 18;  
              console.log("number to reach:" + randomnum);
              $("#number-to-guess").text(randomnum)

              //update gems

                   blank_arr = []

                // for loop, looping through 4 times, generate a random number and add to array 
                for (var i = 0; i < 4; i++){

                 //generate crystal values from 1- 12
                    var crystalnum = Math.floor(Math.random() * 12) + 1;  
                      console.log("gem points:" + crystalnum);
                      blank_arr.push(crystalnum)
                      $("#crystals");
                  }


                 gemSources = ["ruby.jpg", "diamond.png", "sapphire-003.jpg", "opal.jpg"]
              // Next we create a for loop to create crystals for every numberOption.
              for (var i = 0; i < blank_arr.length; i++) {
                  // console.log(crystalnum);        

                    // For each iteration, we will create an imageCrystal
                    $("<img>").addClass("crystal-image")
                              .attr("src", "assets/images/" + gemSources[i])//"assets/images/diamond.png") ;
                              .attr("data-crystalvalue", blank_arr[i]);

                    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
                    $("#crystals").append(imageCrystal);
                    
                } 
            }

  });


});