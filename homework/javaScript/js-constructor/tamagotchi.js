console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi {
    constructor(name, type){
        this.name = name;
        this.eyes = name.toString().charAt(0).toUpperCase(); // Takes name to generate eyes        
        this.type = type; 
        this.food = 10;
        this.rest = 10;
        this.health = 10;
    };
    getStatus(){
        let outputStatus = this.getFace(); // Puts face at top of status
        outputStatus += " "+this.name+": ";
        outputStatus += "[Food: "+this.food+" ";
        outputStatus += "| Rest: "+this.rest+" ";
        outputStatus += "| Health: "+this.health+"] ";
        outputStatus += "Type: "+this.type+"";
        return outputStatus;
    };
    getFace(){
        let outputFace = "<(O_O)>"; // Default face, will change later
        if(this.health < 3){
            outputFace = "<(X_X)>";
        } else if (this.food < 3){
            outputFace = "\\(‾o‾)/";
        } else if (this.rest < 3){
            outputFace = "/(ó_ò)\\";
        } else if (this.health > 10 && this.food > 10 && this.rest > 10) {
            outputFace = "<(^_^)>";
        } else {
            outputFace = "<("+this.eyes+"_"+this.eyes+")>";
        }
        return outputFace;
    };
    cry(){
        this.food--;
        this.rest--;
        console.log("<(T~T)> "+this.name+" is crying!!! \"Waahh!\" [Food -1] [Rest -1]");
        console.log(this.getStatus());
    };
    puke(){
        this.food -= 2;
        this.health--;
        console.log("(>‾o‾)> "+this.name+" is puking!!! \"Blehh!\" [Food -2] [health -1]");
        console.log(this.getStatus());
    };
    yawn(){
        this.food -= 2;
        this.health--;
        console.log("<(^o^<) "+this.name+" is yawning... \"Sigh!\" [Food -1] [Rest -2]");
        console.log(this.getStatus());
    };
}    

//create new Tamagotchis
let monster1 = new Tamagotchi("Tommy", "XL");
let monster2 = new Tamagotchi("Gotchy", "XL");

//create new Tamagotchis
console.log(monster1);
console.log(monster2);

//Invoke methods on the constructed objects:
monster1.cry();
monster2.puke();


//test out your Tamagotchies below via console.logs
