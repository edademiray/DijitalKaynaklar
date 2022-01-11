function largestOfFour(arr) {
  
  //En büyük sayıları tutan bir boş dizi oluşturuyoruz.
  let maxNumsArr = []; 
  
   //Verilen dizi deki her elemana ulaşmak için ana döngümüzü oluşturuyoruz.
  for (let i = 0; i<arr.length; i++){
    
    //Dizimizdeki ilk elemanının(dizinin) ilk elemanını en buyuk sayı olarak alıyoruz (Karşılaştırma yapmak için.)
    let largestNum = arr[i][0];
    
    //Ana dizimizin her bir elemanı dizi olacağından o dizileride karşılaştırmak için döngü olulutuyoruz. 
    for (let j = 1;j<arr[i].length; j++){ 
      
      // Dizi elamanı olan dizideki sayıların en büyüğünü arıyoruz be largestnum olarak atıyoruz.
      if (arr[i][j] > largestNum){ 
        largestNum = arr[i][j];
      }
    }
    // ilk döngümüzde her elemandaki(dizide ki) en büyük sayıyı, sonuç dizimiz olan maxNumsArr'a ekliyoruz.
    maxNumsArr[i] = largestNum; 
  }

  return maxNumsArr;
}
// should return [27, 5, 39, 1001].
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) 
