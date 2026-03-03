// En Uzun Kelime Bulma Uygulaması Oluşturun
// Bu laboratuvar çalışmasında, verilen cümledeki en uzun kelimenin uzunluğunu döndüren bir fonksiyon oluşturacaksınız.

// Örneğin, cümlede "The quick brown fox jumped over the lazy dog"en uzun kelime "jumped"6 uzunluğunda olan kelimedir.

// Amaç: Aşağıdaki kullanıcı senaryolarını yerine getirmek ve laboratuvar çalışmasını tamamlamak için tüm testlerden geçmek.

// Kullanıcı Hikayeleri:

// findLongestWordLengthDize türünde bir argüman alan, adında bir fonksiyon oluşturmalısınız .
// Bu fonksiyon, dizedeki en uzun kelimenin uzunluğunu döndürmelidir.

function findLongestWordLength(str){
  const words = str.split(' ');
  let maxLength = 0;

  for (let i = 0; i < words.length; i++ ){
    if (words[i].length > maxLength){
      maxLength = words[i].length;
    }
  }
return maxLength;
}


console.log (findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")); // 19

// En uzun kelime olan otorhinolaryngology = 19 harften oluştuğunu doğru bir şekilde yaptık.