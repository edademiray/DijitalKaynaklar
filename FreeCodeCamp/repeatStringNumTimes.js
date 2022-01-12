function repeatStringNumTimes(str, num) {
  let list = "";
  for(let i=0; i<num; i++){
    list += str;
  }
  return list;
}

repeatStringNumTimes("eda", 3);
