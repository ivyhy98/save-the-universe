// MyShip hull: 20 firePower: 5 accuracy: 0.7
 const myShip = {
    hull: 20,
    fp: 5,
    accuracy: 0.7,
    isAlive: function(){
         if(this.hull <= 0){
            return false;
         }else{
            console.log(this.hull)
            return true;
         }
    },
    attack: function(enemy){
      if(Math.random() < myShip.accuracy){
         enemy.hull -= this.fp;
         console.log('You have hit Alien Spaceship their health is now', enemy.hull);
      } else{
         console.log('You have missed the enemy space ship');
      }
    },
    retreat: function(){
         
    },
 }

// Class to make Alien Ships random Hull firepower and accuracy
 class AlienShip{
    constructor(){
        this.hull = Math.round(Math.random() * (6-3)) + 3;
        this.fp = Math.round(Math.random() * (4-2)) + 2;
        this.accuracy = Math.random() * (0.8-0.6) + 0.6;
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
   makeEnemies: function(numberOfEnemies){
      const enemies = [];
      for (let i = 0; i < numberOfEnemies; i++) {
         enemies.push(new AlienShip());
      }
      return enemies;
   },
   battle: function(){
      //Make Enemies and determine the one you are currently fighting
      const enemies = this.makeEnemies(3);
      let i = 0;
      let currentEnemy = enemies[i];
      console.log('Enemy Ships have arrived', enemies);
      console.log('Your Ship can handle them', myShip);
      while(i < enemies.length){
         if(myShip.isAlive() === false){
            console.log("Earth's savior has died. Who will save us now");
            i += enemies.length;
         } else if(currentEnemy.isAlive() === false){
            console.log("You have destroyed an Enemy Ship", currentEnemy);
            currentEnemy = enemies[i+1];
            i++;
         } else {
            myShip.attack(currentEnemy);
            currentEnemy.attack();
         }
         console.log('Earth has been saved Congrats Fighter', myShip) 
      }
   }
}

game.battle();