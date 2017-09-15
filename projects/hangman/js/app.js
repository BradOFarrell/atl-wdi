const GameLogic = {
    possibleAnswers:["Boardwalk_Empire","Breaking_Bad","Downton_Abbey","Homeland","The_Newsroom","The_Good_Wife","Mad_Men","Veep","Thirty_Rock","Parks_and_Recreation","Girls","The_Handmaidens_Tale","The_Big_Bang_Theory","New_Girl","Sesame_Street","Smash","Modern_Family","Sherlock","Seinfeld","Glee","The_OC","The_Simpsons","Family_Guy","King_of_the_Hill","The_Office","Buffy","Community","The_Good_Place","Scrubs","Iron_Chef"],
    correctAnswer: "",
    currentGuess: "",
    mistakes: 0,
    availableLetters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    guessLetter: function(guessIndex){
        let selectedLetter = GameLogic.availableLetters[guessIndex];
        let remainingLetters = "";
        let isGuessWrong = true; // Changed to false when a correct guess is made 

        // Choose letter, remove it from available remaining letters list
        remainingLetters += GameLogic.availableLetters.slice(0,guessIndex);
        remainingLetters += GameLogic.availableLetters.slice(guessIndex+1,GameLogic.availableLetters.length);
        GameLogic.availableLetters = remainingLetters;

        // Compare guess to answer, reveal if found
        for(let i = 0; i < GameLogic.correctAnswer.length; i++){
            console.log(GameLogic.correctAnswer[i].toUpperCase() +" "+ selectedLetter.toUpperCase())
            if(GameLogic.correctAnswer[i].toUpperCase() == selectedLetter.toUpperCase()){
                let newGuessText = "";
                // Update the current guess string to include correct letter
                newGuessText += GameLogic.currentGuess.slice(0,i);
                newGuessText += GameLogic.correctAnswer[i]; 
                newGuessText += GameLogic.currentGuess.slice(i+1,GameLogic.currentGuess.length);
                GameLogic.currentGuess = newGuessText

                GameUI.renderClue();
                isGuessWrong = false;
            } 
        }

        // Incriment mistake counter, check for loss
        if(isGuessWrong){
            GameLogic.mistakes++;            
        }

        // Check for loss and win conditions
        if(GameLogic.mistakes > 5){
            alert("You lose!");
            location.reload();
        } else if(GameLogic.currentGuess == GameLogic.correctAnswer){
            alert("You win!");
            location.reload();            
        } else {
            GameUI.renderAll();            
        }
    },
    startGame: function() {
        let randomAnswerIndex = Math.floor(Math.random() * GameLogic.possibleAnswers.length);
        let obscuredAnswer = ""

        // Choose correct answer randomly
        GameLogic.correctAnswer = GameLogic.possibleAnswers[randomAnswerIndex];

        // Create initial clue based on answer
        for(let i = 0; i < GameLogic.correctAnswer.length; i++){
            if(GameLogic.correctAnswer[i] != "_"){
                obscuredAnswer += "?";
            } else {
                obscuredAnswer += "_";
            }
        }
        GameLogic.currentGuess = obscuredAnswer;
    }
}

const GameUI = {
    renderHangman: function(){
        $('#hangmanGraphic').attr("src","images/dunk"+GameLogic.mistakes+".png");    
    },
    renderClue: function(){
        let tempLetters = GameLogic.currentGuess;        
        let outputHTML = "'' ";
        for (let i = 0; i < tempLetters.length; i++){
            outputHTML += tempLetters[i]+" ";
        }
        $('#clueBox').html(outputHTML+"''");      
    },
    renderButtons: function(){
        let tempLetters = GameLogic.availableLetters;        
        let outputHTML = "";
        for (let i = 0; i < tempLetters.length; i++){
            outputHTML += "<button type='button' classyle='btn' "
            outputHTML += "onClick='GameLogic.guessLetter("+i+")'>";
            outputHTML += tempLetters[i]+"</button>";
        }
        $('#buttonBox').html(outputHTML);      
    },
    renderAll: function(){
        GameUI.renderClue();
        GameUI.renderButtons();
        GameUI.renderHangman();
    }
}
    
$(function(){ // Main, waits for dom to load
//    GameLogic.guessLetter(2);
    GameLogic.startGame();
    GameUI.renderAll();
});