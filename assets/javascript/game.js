$(document).ready(function() {

    var targetNumber;
    var wins = 0;
    var losses = 0;
    var totalScore = 0;
    var crystal1 = 0; 
    var crystal2 = 0; 
    var crystal3 = 0; 
    var crystal4 = 0; 

// Have the computer generate a random number, and write it where it says target score
    function generator(){
        targetNumber = Math.floor(Math.random()*101) + 19;
        $("#targetNumber").text(targetNumber);

// Generate the values for the crystals
        crystal1 = Math.ceil(Math.random() * 12);

        crystal2 = Math.ceil(Math.random() * 12);

        crystal3 = Math.ceil(Math.random() * 12);

        crystal4 = Math.ceil(Math.random() * 12);
        };

    generator();

    // Let's check the scores and set outcomes when the game is won or lost
    function scoreChecker(){
       if (totalScore === targetNumber){
            wins++;
            generator();
            totalScore = 0;
            $("#score").text(totalScore);
            $("#wins").text(wins);

        } else if (totalScore > targetNumber){
            losses++;
            generator();
            totalScore = 0;
            $("#score").text(totalScore);
            $("#losses").text(losses);
        }; 
    };

// Click the crystals to have the number assigned to them added to your score
    $("#crystal1").on("click", function(){
        totalScore = totalScore + crystal1;
        $("#score").text(totalScore);
        scoreChecker(); 
    });

    $("#crystal2").on("click", function(){
        totalScore = totalScore + crystal2;
        $("#score").text(totalScore);
        scoreChecker();
    });

    $("#crystal3").on("click", function(){
        totalScore = totalScore + crystal3;
        $("#score").text(totalScore);
        scoreChecker();
    });

    $("#crystal4").on("click", function(){
        totalScore = totalScore + crystal4;
        $("#score").text(totalScore);
        scoreChecker();
        });
    });




