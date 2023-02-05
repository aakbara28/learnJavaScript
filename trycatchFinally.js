// Blok finally akan tetap dijalankan tanpa peduli apa pun hasil yang terjadi pada blok try-catch.

try {
  console.log("Awal blok try");
  console.log("Akhir blok try");
} catch (error) {
  console.log("Baris ini diabaikan");
} finally {
  console.log("Akan tetap dieksekusi");
}

/* output
Awal blok try
Akhir blok try
Akan tetap dieksekusi
*/
