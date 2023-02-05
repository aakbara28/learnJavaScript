/*
function init() {
  var name = "Obi Wan";

  function greet() {
    console.log(`Halo, ${name}`);
  }

  return greet;
}

let myFunction = init();
myFunction();

output:
Halo, Obi Wan
*/

//Contoh program counter dibuat dengan closure
let add = () => {
  let counter = 0;
  return () => {
    return ++counter;
  };
};

let addCounter = add();

console.log(addCounter());
console.log(addCounter());
console.log(addCounter());

/* output
1
2
3
 */
