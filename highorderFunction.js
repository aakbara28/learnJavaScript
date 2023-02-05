/*
Higher-Order Function merupakan fungsi yang dapat menerima fungsi lainnya pada argumen; mengembalikan sebuah fungsi; atau bahkan keduanya.
Array map() merupakan salah satu contoh Higher-Order Function yang ada di JavaScript. Karena dalam penggunaanya, ia menerima satu buah argumen yang merupakan sebuah function.
*/

const names = ["Harry", "Ron", "Jeff", "Thomas"];

const arrayMap = (arr, action) => {
  const loopTrough = (arr, action, newArray = [], index = 0) => {
    const item = arr[index];
    if (!item) return newArray;
    return loopTrough(
      arr,
      action,
      [...newArray, action(arr[index])],
      index + 1
    );
  };

  return loopTrough(arr, action);
};

const newNames = arrayMap(names, (name) => `${name}!`);

console.log({
  names,
  newNames,
});

/**
 * output:
 * {
 *   names: [ 'Harry', 'Ron', 'Jeff', 'Thomas' ],
 *   newNames: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
 * }
 */
