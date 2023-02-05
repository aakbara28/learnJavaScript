let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);
console.log(myArray[5]);
console.log("Panjang nilai myArray adalah " + myArray.length + ".");

/* output:
Cokelat
42.5
22
true
Programming
undefined
Panjang nilai myArray adalah 5.
*/

/*Fungsi push ini akan menambahkan data di akhir array.
const myArray = ["Cokelat", 42.5, 22, true, "Programming"];
myArray.push('JavaScript');
console.log(myArray);

Output:
[ 'Cokelat', 42.5, 22, true, 'Programming', 'JavaScript' ] 
*/

/*untuk mengeluarkan data atau elemen terakhir dari array, kita bisa gunakan metode pop().
const myArray = ["Cokelat", 42.5, 22, true, "Programming"];
myArray.pop();
console.log(myArray);

Output :
[ Cokelat, 42.5, 22, true ]
*/

/*
Metode lain yang bisa kita gunakan untuk memanipulasi data pada array adalah shift() dan unshift(). 
Metode shift() digunakan untuk mengeluarkan elemen pertama dari array, sementara unshift() digunakan untuk menambahkan elemen di awal array.
const myArray = ["Cokelat", 42.5, 22, true, "Programming"];
myArray.shift();
myArray.unshift("Apple");

console.log(myArray);

Output :
[ 'Apple', 42.5, 22, true, 'Programming' ]
*/

/*Untuk menghapus elemen, gunakan metode splice() seperti ini:
const myArray = ["Cokelat", 42.5, 22, true, "Programming"];
myArray.splice(2, 1);   // Menghapus dari index 2 sebanyak 1 elemen
console.log(myArray);

output
[ 'Cokelat', 42.5, true, 'Programming' ]
*/
