/*
Array forEach merupakan fungsi bawaan dari array yang berfungsi untuk memanggil fungsi callback pada setiap iterasi index array. 
Berbeda dari fungsi array lain yang sudah kita bahas, fungsi ini tidak mengembalikan nilai apa pun. Jadi fungsi ini secara harfiah hanya berfungsi untuk memanggil fungsi callback-nya saja, tak lebih dari itu.
*/

// Cara Imperatif
const names = ["Harry", "Ron", "Jeff", "Thomas"];

for (let i = 0; i < names.length; i++) {
  console.log(`Hello, ${names[i]}!`);
}

/**
 * output:
 * Hello, Harry!
 * Hello, Ron!
 * Hello, Jeff!
 * Hello, Thomas!
 *
 */

/*
Cara Deklaratif
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
 
names.forEach((name) => {
  console.log(`Hello, ${name}!`);
});
 
/**
 * output:
 * Hello, Harry!
 * Hello, Ron!
 * Hello, Jeff!
 * Hello, Thomas!
 * 
 */
