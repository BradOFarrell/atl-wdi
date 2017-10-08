class Atm {
    constructor(type){
      this.type = type;
      this.money = 0;
      this.transactionHistory = [];
    }
    withdraw(amount){
      this.transactionHistory.push(amount * -1);
      this.money -= amount;
    }
    deposit(amount){
      this.transactionHistory.push(amount);
      this.money += amount;
    }
    showBalance(){
      return "You have $" + this.money;
    }
  }
  
  const savings = new Atm("checking");
  savings.deposit(200);
  savings.withdraw(50);
  savings.deposit(100);
  
  console.log(savings.showBalance());
  console.log(savings.transactionHistory);