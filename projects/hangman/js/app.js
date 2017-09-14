const GameLogic = {
    availableLetters: "QWERTYUIOPASDFGHJKLZXCVBNM",
    guessLetter: function(index){
        let selectedLetter = GameLogic.availableLetters[index];
        let output = "";
        output += GameLogic.availableLetters.slice(0,index);
        output += GameLogic.availableLetters.slice(index+1,GameLogic.availableLetters.length);
        GameLogic.availableLetters = output;
    }
}

const GameUI = {

}
    
$(function(){ // Main, waits for dom to load
    GameLogic.guessLetter(2);
    let tempLetters = GameLogic.availableLetters;
    for (let i = 0; i < tempLetters.length; i++){
        $('#buttonBox').append(tempLetters[i]);        
    }
});