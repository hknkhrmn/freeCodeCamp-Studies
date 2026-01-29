// Kontrol etmek istediğimiz yıl
let year = 2000;

function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return year + " is a leap year.";
      } else {
        return year + " is not a leap year.";
      }
    } else {
      return year + " is a leap year.";
    }
  } else {
    return year + " is not a leap year.";
  }
}

// Fonksiyonu çağırma
let result = isLeapYear(year);

// Konsola yazdırma
console.log(result);