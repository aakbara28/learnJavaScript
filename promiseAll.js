const boilWater = () => {
  return new Promise((resolve, reject) => {
    console.log("Memanaskan air...");
    setTimeout(() => {
      resolve("Air panas sudah siap!");
    }, 2000);
  });
};

const grindCoffeeBeans = () => {
  return new Promise((resolve, reject) => {
    console.log("Menggiling biji kopi...");
    setTimeout(() => {
      resolve("Bubuk kopi sudah siap!");
    }, 1000);
  });
};

function makeEspresso() {
  checkAvailability()
    .then((value) => {
      console.log(value);
      return checkStock();
    })
    .then((value) => {
      console.log(value);
      const promises = [boilWater(), grindCoffeeBeans()];

      return Promise.all(promises);
    })
    .then((value) => {
      console.log(value);
      return brewCoffee();
    })
    .then((value) => {
      console.log(value);
      state.isCoffeeMachineBusy = false;
    })
    .catch((rejectedReason) => {
      console.log(rejectedReason);
      state.isCoffeeMachineBusy = false;
    });
}

makeEspresso();

/* output
  Mesin kopi siap digunakan.
  Stok cukup. Bisa membuat kopi.
  Memanaskan air...
  Menggiling biji kopi...
  [ 'Air panas sudah siap!', 'Bubuk kopi sudah siap!' ]
  Membuatkan kopi Anda...
  Kopi sudah siap!
  */
