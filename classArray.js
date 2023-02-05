/*
dengan class Array, kita bisa menerapkan konsep pewarisan untuk membuat subclass baru yang dapat kita modifikasi sesuai kebutuhan. 
Contohnya, kita ingin membuat sebuah struktur data mirip array, tetapi nilai tiap elemennya unik, maka kita bisa membuat subclass UniqueArray yang mewarisi class Array. 
Di dalam subclass UniqueArray, implementasinya tampak seperti ini.
*/

class UniqueArray extends Array {
  constructor(...args) {
    // make sure args is unique before passing it to super
    const uniqueValue = args.filter(
      (item, index) => args.indexOf(item) === index
    );

    super(...uniqueValue);
  }

  add(item) {
    // make sure only unique item is added
    if (!this.includes(item)) {
      super.push(item);
    }
  }
}

const someArray = new UniqueArray("a", "b", "c", "a", "b", "c");
console.log(someArray); // ['a', 'b', 'c']
someArray.add("d");
console.log(someArray); // ['a', 'b', 'c', 'd']
someArray.add("a");
console.log(someArray); // ['a', 'b', 'c', 'd']
