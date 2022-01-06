function ConsonantCount(str) { 

  let count = 0;
  let sesli = /^[aeiouAEIOU]$/;
  for( let i=0; i<str.length; i++){
    if (!str[i].match(sesli)&& str[i].toLowerCase() >= 'a' && str[i].toLowerCase() <= 'z'){
      count++;
    }
  }  
  return count; 

}
   
// keep this function call here 
console.log(ConsonantCount(readline()));
