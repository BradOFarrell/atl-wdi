console.log('player file is loaded');

class Player {
  constructor(name){
    this.name = name;
  }
  feed(tamagotchi){
    console.log("OmNomOm | "+player.name+ " feeds "+tamagotchi.name+" snacks. [food +2]");
    tamagotchi.food += 2;
    console.log(tamagotchi.getStatus());
  }
  heal(tamagotchi){
    console.log(" * <3 * | "+player.name+ " kisses "+tamagotchi.name+"'s wounds. [health +2]");
    tamagotchi.health += 2;
    console.log(tamagotchi.getStatus());
  }
  tuck(tamagotchi){
    console.log(".zZzZz. | "+player.name+ " tucks "+tamagotchi.name+" into bed. [rest +2]");
    tamagotchi.rest += 2;
    console.log(tamagotchi.getStatus());
  }
}

//create new Tamagotchis
let monster1 = new Tamagotchi("Tommy", "XL");
let monster2 = new Tamagotchi("Gotchy", "XL");
let player = new Player("Brad")

//create new Tamagotchis
console.log(monster1);
console.log(monster2);

//Invoke methods on the constructed objects:
monster1.cry();
monster2.puke();

//test out your Tamagotchies below via console.logs
player.feed(monster2);
monster2.cry();
monster2.puke();
player.heal(monster2);
player.tuck(monster2);
