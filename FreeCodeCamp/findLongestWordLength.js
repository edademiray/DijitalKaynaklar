function findLongestWordLength(str) {
  // Yazıyı kelimelerden oluşan bir diziye çevirelim.
  let words = str.split(' ');
  //Değeri 0 olan en uzun kelimeyi tutacağımız bir değişken tanımlayalım
  let maxLength = 0;

  // For döngüsü ile dizi boyutunda bir döngüde,her kelimenin uzunluğunu maxLength değişkeni üzeriden kontrol ediyoruz. 
  for(let i = 0; i<words.length; i++){
    if(words[i].length> maxLength){
      maxLength = words[i].length; 
    }
  }
  

  return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6.
