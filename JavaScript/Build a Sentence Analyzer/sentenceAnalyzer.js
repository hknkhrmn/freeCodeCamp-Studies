// Sesli harfleri bulması için bir fonksiyon oluşturduk
function getVowelCount(sentence) {
  const vowels = "aeiou";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

// Cümlede ki sesli harfi buluyor mu diye consol.log ile çıktısını aldık
const vowelCount = getVowelCount("Apples are tasty fruits");
console.log(`Vowel Count: ${vowelCount}`); // Vowel Count: 7

//Sessiz harfleri bulması için bir fonksiyon oluşturduk
function getConsonantCount(sentence) {
  const consonants = "bcdfghjklmnpqrstvwxyz";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (consonants.includes(char)) {
      count++;
    }
  }
  return count;
}

// Aynı şekilde buluyormu diye çıktı aldık
const consonantCount = getConsonantCount("Coding is fun");
console.log(`Consonant Count: ${consonantCount}`); // Consonant Count: 7

// Noktalama işaretleri için yaptık
function getPunctuationCount(sentence) {
  const punctuations = ".,!?;:-()[]{}\"'–";
  let count = 0;

  for (const char of sentence) {
    if (punctuations.includes(char)) {
      count++;
    }
  }
  return count;
}

// Oluyormu diye çıktı aldık.
const punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
console.log(`Punctuation Count: ${punctuationCount}`); // Punctuation Count: 9

function getWordCount(sentence) {
  if (sentence.trim() === '') {
    return 0;
  }
  
  // Komple proje için yaptık 
  const words = sentence.trim().split(' ');
  let count = 0;

  for (const word of words) {
    if (word !== '') {
      count++;
    }
  }

  return count;
}

const wordCount = getWordCount("I love freeCodeCamp");
console.log(`Word Count: ${wordCount}`); // Word Count: 3




