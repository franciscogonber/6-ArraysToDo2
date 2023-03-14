function invertirMatrizEnLugar(arr) {
  var temp;
  for (var i = 0; i < arr.length / 2; i++) { // iteramos hasta la mitad del arreglo
    temp = arr[i]; // guardamos temporalmente el valor actual
    arr[i] = arr[arr.length - 1 - i]; // intercambiamos el valor actual con el valor "opuesto" en el arreglo
    arr[arr.length - 1 - i] = temp; // asignamos el valor temporal al elemento contrario
  }
}
var matriz = [1, 2, 3, 4, 5];
const nm = invertirMatrizEnLugar(matriz);
console.log(nm)