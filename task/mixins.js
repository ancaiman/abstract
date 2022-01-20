let swim = {
  setSwimProperties(speed, direction) {
    this.speed = speed;
    this.direction = direction;
  },

  getSwimProperties(){
    console.log(`плавает ${this.speed} ${this.direction}`);
  }
}
 
class Reptile {
  constructor(name) {
    this.name = name;
  }
}
 
Object.assign(Reptile.prototype, swim);
let alligator = new Reptile("аллигатор");
alligator.setSwimProperties("5 м/с", "вверх по течению");
alligator.getSwimProperties();