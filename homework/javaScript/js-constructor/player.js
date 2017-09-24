console.log('player file is loaded');

class Player {
  constructor(name){
    this.name = name;
    console.log("Hello, "+name+"!");
    console.log("Use any of the following commands:");
    console.log(" p.feed(mon); <-- Raises food stat");
    console.log(" p.heal(mon); <-- Raises health stat");
    console.log(" p.tuck(mon); <-- Raises rest stat");   
  }
  feed(tamagotchi){
    console.log("OmNomOm | "+this.name+ " feeds "+tamagotchi.name+" snacks. [food +2]");
    tamagotchi.food += 2;
    console.log(tamagotchi.getStatus());
  }
  heal(tamagotchi){
    console.log(" * <3 * | "+this.name+ " kisses "+tamagotchi.name+"'s wounds. [health +2]");
    tamagotchi.health += 2;
    console.log(tamagotchi.getStatus());
  }
  tuck(tamagotchi){
    console.log(".zZzZz. | "+this.name+ " tucks "+tamagotchi.name+" into bed. [rest +2]");
    tamagotchi.rest += 2;
    console.log(tamagotchi.getStatus());
  }
}

//create new Tamagotchis
let p = new Player("Brad")
let mon = new Tamagotchi("Tommy", "XL");
