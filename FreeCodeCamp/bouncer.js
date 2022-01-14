function bouncer(arr) {
  let trueArr = [];
  for(let i=0; i<arr.length; i++){
    if(arr[i]) trueArr.push(arr[i]);
  }
  return trueArr;
}

bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
