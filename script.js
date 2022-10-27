// MyShip hull: 20 firePower: 5 accuracy: 0.7
 const myShip = {
    hull: 20,
    fp: 5,
    accuracy: 0.7,
    isAlive: function(){
         if(this.hull <= 0){
            console.log("Earth's savior has died. Who will save us now");
            return false;
         }else{
            return true;
         }
    },
    attack: function(enemy, battling){
      if(Math.random() < myShip.accuracy){
         enemy.hull -= this.fp;
         console.log('You have hit Alien Spaceship their health is now', enemy.hull);
      } else{
         console.log('You have missed the enemy space ship');
      }
    },
    retreat: function(i){
         console.log("Would you like to retreat? Your current hull is", myShip.hull);
         if(myShip.hull < 5){
            myShip.hull = 0;
            console.log("You have retreated Aliens have taken over");
            return true;
         } else{
            return false;
         }
    },
 }

// Class to make Alien Ships random Hull firepower and accuracy
 class AlienShip{
    constructor(){
        this.hull = Math.round(Math.random() * (6-3)) + 3;
        this.fp = Math.round(Math.random() * (4-2)) + 2;
        this.accuracy = Number((Math.random() * (0.8-0.6) + 0.6).toFixed(1));
    }
    isAlive(){
         if (this.hull <= 0) {
           return false;
         } else {
            console.log('Enemies health is now', this.hull)
           return true;
         }
    }
    attack(){
      if (Math.random() < this.accuracy) {
         myShip.hull -= this.fp;
         console.log("Alien's have hit your spaceship your health is", myShip.hull);
      } else {
        console.log("Aliens missed your spaceship");
      }
    }
 }

 const game = {
   battling: true,
   makeEnemies: function(numberOfEnemies){
      const enemies = [];
      for (let i = 0; i < numberOfEnemies; i++) {
         enemies.push(new AlienShip());
      }
      return enemies;
   },
   battle: function(){
      //Make Random number of Enemies and determine the one you are currently fighting
      const enemies = this.makeEnemies(Math.round(Math.random() * (6 - 3)) + 3);
      let i = 0;
      let currentEnemy = enemies[i];
      console.log('Enemy Ships have arrived', enemies);
      console.log('Your Ship can handle them', myShip);
      while(myShip.isAlive() && i < enemies.length -1){
         myShip.attack(currentEnemy);
         if(currentEnemy.isAlive() === false){
            currentEnemy = enemies[i+1];
            console.log('You have defeated an enemy ship')
            myShip.retreat();
            i++;
         } else {
            currentEnemy.attack();
         }
      }
      console.log('All Enemy Ships have been defeated')
   }
}
game.battle();