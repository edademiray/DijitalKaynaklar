function frankenSplice(arr1, arr2, n) {
  let sliced = arr2.slice()
  for (let i=0; i<arr1.length; i++){
    sliced.splice(n,0,arr1[i])
    n++;
  }
  return sliced;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1); //should return [4, 1, 2, 3, 5].
