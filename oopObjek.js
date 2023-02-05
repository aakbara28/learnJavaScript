// Objek mobil dalam bentuk javaScript

const car = {
  //properties
  brand: "Ford",
  color: "Red",
  maxspeed: 200,
  chassisNumber: "f-1",

  //methods
  drive: () => {
    console.log("driving");
  },
  reverse: () => {
    console.log("reversing");
  },
  turn: () => {
    console.log("turning");
  },
};

console.log(car.brand); //Ford
console.log(car.color); //Red
console.log(car.maxspeed); //200
console.log(car.chassisNumber); //f-1
car.drive(); //driving
car.reverse(); //reversing
car.turn(); //turning
