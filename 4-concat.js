function arrConcat(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i]);
  }
  for (let j = 0; j < arr2.length; j++) {
    result.push(arr2[j]);
  }
  return result;
}
const array = arrConcat(['a', 'b'], [1,2])
console.log(array)