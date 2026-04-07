function chunkArrayInGroups(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}


// result = [] → Sonuçları tutacak boş bir dizi oluşturuyoruz.
// for döngüsü → i değişkeni 0'dan başlar, her adımda size kadar ilerler.

// Örneğin size = 2 ise → i sırayla 0, 2, 4, 6... değerlerini alır.


// arr.slice(i, i + size) → Dizinin i'den başlayıp i + size'a kadar olan parçasını keser alır.
// result.push(...) → Kesilen parçayı sonuç dizisine ekler.
// return result → Tüm parçaları içeren 2 boyutlu diziyi döndürür.

console.log(chunkArrayInGroups([1, 2, 3, 4, 5, 6], 2));
console.log(chunkArrayInGroups([1, 2, 3, 4, 5], 3));
console.log(chunkArrayInGroups([1, 2, 3, 4], 10));