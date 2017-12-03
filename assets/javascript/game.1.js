// Global Variable
//-------------------------------------

var blueCrystal = 0;
var redCrystal = 0;
var greenCrystal = 0;
var yellowCrystal = 0;

var currentScore = 0;
var targetScore = 0;

var winCount = 0;
var lossCount = 0;


// Functions
//--------------------------------------
var startGame = function(){

// Reset the current score
currentScore = 0;

// Set a new Target Score between 19-120
targetScoreRandom = Math.floor(Math.random() * (120 - 19 + 1) + 19);
console.log(targetScoreRandom);

// Set different vaules for each of the crystals between 1-12
blueCrystal = Math.floor(Math.random() * (12 - 1 + 1) + 1);
console.log("Blue " + blueCrystal);

greenCrystal = Math.floor(Math.random() * (12 - 1 + 1) + 1);
console.log( "Green " + greenCrystal);

redCrystal = Math.floor(Math.random() * (12 - 1 + 1) + 1);
console.log("Red " + redCrystal);

yellowCrystal = Math.floor(Math.random() * (12 - 1 + 1) + 1);
console.log("Yellow " + yellowCrystal);



// Change the HTML to reflect all of these changes
$("#targetScore").html(targetScoreRandom);


// Testing & Debugging
console.log("-------------------------");
console.log("Blue " + blueCrystal +  " | Green " + greenCrystal + " | Red " + redCrystal + " | Yellow " + yellowCrystal);
console.log("-------------------------");

var valueArray = [blueCrystal, greenCrystal, redCrystal, yellowCrystal];

// Respond to crystal clicks
var addValues = function(valueArray){

    for(i = 0; i < valueArray.length; i++){
        
    }
    currentScore += valueArray;

    // Changes HTML to reflect your score
    $("#yourScore").html(currentScore);

    checkWin();
    startGame();

}

    // Check if user Won, Lost, & Reset the game
    var checkWin = function() {
        
        // Check if current score is larger then target score
        if(currentScore > targetScoreRandom){
            alert("Sorry you have lost the game!!");
            
            // Increase Loss Count
            lossCount++

            // Changes WinCount in HTML
            $("#losses").html(lossCount);

            // Restart the game
            startGame();
        }

        else if(currentScore == targetScoreRandom){
            alert("You have won the game!!!");
            winCount++

            // Changes WinCount in HTML
            $("#wins").html(winCount);

            // Restart the game
            startGame();
            
        }
    }

// Main Process
//--------------------------------------
$("#blue").click(function(){
    addValues(valueArray[0]);
    // console.log("Blue Click " + blueCrystal);
});

$("#green").click(function(){
    addValues(valueArray[1]);
    // console.log("Green Click " + greenCrystal);
});

$("#red").click(function(){
    addValues(valueArray[2]);
    // console.log("Red Click "+ redCrystal);
});

$("#yellow").click(function(){
    addValues(valueArray[3]);
    // console.log("Yellow Click " + yellowCrystal);

    
});
};
startGame();
