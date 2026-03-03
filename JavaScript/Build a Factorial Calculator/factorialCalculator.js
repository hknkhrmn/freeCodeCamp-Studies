// Faktöriyel Hesaplayıcı Oluşturun
// Faktöriyel, bir tam sayının kendisinden küçük tüm tam sayılarla çarpımıdır. 
// Örneğin, sayısının faktöriyeli ' 5dir 5 * 4 * 3 * 2 * 1 = 120. 
// Bu laboratuvar çalışmasında, kullanıcıdan bir sayı alan ve o sayının 
// faktöriyelini hesaplayan bir faktöriyel hesaplayıcı oluşturacaksınız.

// Num adında bir değişken oluşturduk değer olarak 9 atadık
let num = 9;

// Faktöriyel hesaplama fonksiyonu
function factorialCalculator(number) {
    //result = 1 ile başlangıç değeri belirledik.
  let result = 1;
  // for döngüsü ile 1'den girilen sayıya kadar çalış
  for (let i = 1; i<=number; i++){
    result *= i;
  }
  return result;
}

// Fonksiyonu çağırma ve sonucu kaydetme
let factorial = factorialCalculator(num);
// Sonuç mesajı oluşturma
let resultMsg = `Factorial of ${num} is ${factorial}`;

// Konsola yazdır
console.log(resultMsg); //Factorial of 9 is 362880