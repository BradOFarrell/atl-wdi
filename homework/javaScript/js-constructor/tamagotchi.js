console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi {
    constructor(name){
        this.name = name;
        this.food = 10;
        this.rest = 10;
        this.health = 10;
    };
    updateStatus(){
        console.log(this.name+": [Food: "+this.food+" | Rest: "+this.rest+" | Health: "+this.health+"]")
    }
    cry(){
        this.food--;
        console.log("<(ó_ò)> Your "+this.name+" is crying!!! [Food -1]");
        this.updateStatus();
    };
}    

//create new Tamagotchis
let monster1 = new Tamagotchi("Tommy");
let monster2 = new Tamagotchi("Gotchy");

//create new Tamagotchis
console.log(monster1);
console.log(monster2);

//Invoke methods on the constructed objects:
monster1.cry();
monster2.cry();


//test out your Tamagotchies below via console.logs
