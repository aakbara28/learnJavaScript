/*
Kembali ke kasus mesin kopi kita sebelumnya, mesin bisa gagal membuat kopi jika bahan-bahan tidak mencukupi. Sementara jika bahan cukup, mesin akan membuatkan satu gelas kopi. 
Di sinilah kita dapat memanfaatkan Promise sekaligus menangani dua kemungkinan promise yang terjadi
*/

const stock = {
  coffeeBeans: 250,
  water: 1000,
};

const checkStock = () => {
  return new Promise((resolve, reject) => {
    if (stock.coffeeBeans >= 16 && stock.water >= 250) {
      resolve("Stok cukup. Bisa membuat kopi");
    } else {
      reject("Stok tidak cukup");
    }
  });
};

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectionReason) => {
  console.log(rejectionReason);
};

checkStock().then(handleSuccess, handleFailure);

/*
Penjelasan kode :
- checkStock() merupakan fungsi yang mengembalikan promise dan akan menghasilkan resolve() dengan membawa nilai “Stok cukup. Bisa membuat kopi”.
- Lalu kita mendeklarasikan fungsi handleSuccess() dan handleFailure() yang mencetak nilai dari parameternya.
- Kemudian kita memanggil method .then() dari checkStock. Isi parameter then() dengan dua fungsi handler yang telah kita buat sebelumnya.
- Parameter pertama berisi fungsi handleSuccess untuk menangani kondisi ketika promise berstatus resolve. Parameter kedua berisi fungsi handleFailure yang menangani ketika promise berstatus reject.
*/
