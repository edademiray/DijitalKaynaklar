function mutation(arr) {
  let words = arr[1].toLowerCase()
  let firstElement = arr[0].toLowerCase()
  
  for(let i=0; i< words.length; i++ ){
    if(firstElement.indexOf(words[i])< 0) return false;
  }
  return true;
}

mutation(["hello", "hey"]);


/**
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
**/
