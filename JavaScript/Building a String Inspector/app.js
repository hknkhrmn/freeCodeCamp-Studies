const fccSentence = "freeCodeCamp is a great place to learn web development.";

console.log("Here are some examples of the includes() method:");

const hasFreeCodeCamp = fccSentence.includes("freeCodeCamp");
console.log(`fccSentence.includes("freeCodeCamp") returns ${hasFreeCodeCamp} because the word "freeCodeCamp" is in the sentence.`);

const hasJavaScript = fccSentence.includes("JavaScript");
console.log(`fccSentence.includes("JavaScript") returns ${hasJavaScript} because the word "JavaScript" is not in the sentence.`);

const hasLowercaseFCC = fccSentence.includes("freecodecamp");
console.log(`fccSentence.includes("freecodecamp") returns ${hasLowercaseFCC} because includes is case-sensitive.`);

// STEP-7
// Now you will explore the slice() method, which extracts a portion of a string.
// Create a variable named message and assign it the string "Welcome to freeCodeCamp!".
// Then use console.log() to log "Here are some examples of the slice() method:" to the console.

const message = "Welcome to freeCodeCamp!";

console.log("Here are some examples of the slice() method:");

// STEP-8
// The slice() method extracts a section of a string. 
// It takes two arguments: the start index (included) and the end index (not included).
// Create a variable named platform. Then assign it the result of using message.slice(11, 23) to extract "freeCodeCamp".

const platform = message.slice(11, 23);

// STEP-9
//Now it is time to log the result of using the slice() method.
//Use either a template literal or string concatenation to log the message The word "<platform>" was sliced from the message. to the console. 
// Replace <platform> with the actual value of the variable.




