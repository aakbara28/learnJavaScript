// Dalam praktik aslinya, Promise digunakan untuk menjalankan proses asynchronous seperti mengambil data dari internet/API. Hasil permintaan data dapat terpenuhi atau mengalami kegagalan.

const executorFunction = (resolve, reject) => {
  const isCoffeeMakerReady = true;
  if (isCoffeeMakerReady) {
    resolve("Kopi berhasil dibuat");
  } else {
    reject("Mesin kopi tidak bisa digunakan");
  }
};

const makeCoffee = () => {
  return new Promise(executorFunction);
};
const coffeePromise = makeCoffee();
console.log(coffeePromise);

/* output
Promise { 'Kopi berhasil dibuat' }
*/
