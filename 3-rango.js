function decrypt(arr, min, max) {
  let writeIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= min && arr[i] <= max) {
      if (writeIndex !== i) {
        arr[writeIndex] = arr[i];
      }
      writeIndex++;
    }
  }
  arr.length = writeIndex; // Truncar la matriz a su nuevo tamaño
  return arr;
}
arr = [1, 2, 3, 4, 5]
min = 2
max = 3
console.log(arr);
const salida = decrypt(arr, min, max);

console.log(salida);


