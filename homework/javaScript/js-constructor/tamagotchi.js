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
    this.start();
};
getStatus(){
    let outputStatus = this.getFace(); // Puts face at top of status
    outputStatus += " | "+this.name+": ";
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
    } else if (this.health > 10 && this.rest > 10) {
        outputFace = "<(^_^)>";
    } else {
        outputFace = "<("+this.eyes+"_"+this.eyes+")>";
    }
    return outputFace;
};
cry(){
    this.food--;
    this.rest--;
    console.log("<(T~T)> | "+this.name+" is crying!!! \"Waahh!\" [Food -1] [Rest -1]");
    console.log(this.getStatus());
    this.checkCondition();
};
yawn(){
    this.food -= 2;
    this.health--;
    console.log("<(^o^<) | "+this.name+" is yawning... \"Sigh!\" [Food -1] [Rest -2]");
    console.log(this.getStatus());
    this.checkCondition();
};
puke(){
    this.food -= 2;
    this.health--;
    console.log("(>‾o‾)> | "+this.name+" is puking!!! \"Blehh!\" [Food -2] [health -1]");
    console.log(this.getStatus());
    this.checkCondition();
};
checkCondition(){
    if(this.health <= 0){
        this.stop();
    }
}
start(){
    console.log(".('-'). | "+this.name+" is hatching...");
    var self = this;
    this.hungerTimer = setInterval(function() {
        self.cry();
    }, 6000);
    this.yawnTimer = setInterval(function() {
        self.yawn();
    }, 10000);
    this.sickTimer = setInterval(function() {
        self.puke();
    }, 25000);
};
stop(){
    console.log(".[RIP]. | "+this.name+" closes its eyes...");
    clearInterval(this.hungerTimer);
    clearInterval(this.yawnTimer);
    clearInterval(this.sickTimer);
};
}