const profile = {
  firstName: "John",
  lastName: "Doe",
  age: 18,
};

let firstName = "Dimas";
let age = "20";

// menginisialisasi nilai baru melalui destructuring object
({ firstName, age } = profile);

console.log(firstName);
console.log(age);

/* output:
John
18
*/
