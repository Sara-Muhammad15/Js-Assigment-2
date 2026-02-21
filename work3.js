// JavaScript Practice Sheet # 3
// (Numbers & string Methods)
//...........................//
// task 1

// let sentence = prompt("Enter a sentence:");

// let words = sentence.split(" ");
// let capitalizedSentence = "";

// for (let i = 0; i < words.length; i++) {
//     let word = words[i];
//     if (word.length > 0) {
//         capitalizedSentence += word.charAt(0).toUpperCase() + word.slice(1) + " ";
//     }
// }

// console.log("Modified Sentence:", capitalizedSentence.trim());

//.......................................//
// Task 2: String Truncation

// let longString = prompt("Enter a long string:");

// let truncated = longString.slice(0, 100) + "...";

// console.log("Original String:", longString);
// console.log("Truncated String:", truncated);

//.......................................//

// Task 3: String Search

// let paragraph = "JavaScript is a powerful programming language used for web development.";

// let searchWord = prompt("Enter a word to search:");

// let index = paragraph.indexOf(searchWord);

// if (index !== -1) {
//     console.log("Word found at index:", index);
// } else {
//     console.log("Word not found");
// }

//.......................................//

// Task 4: Character Count

// let userSentence = prompt("Enter a sentence:");
// let character = prompt("Enter a character to count:");

// let count = 0;

// for (let i = 0; i < userSentence.length; i++) {
//     if (userSentence.charAt(i) === character) {
//         count++;
//     }
// }

// console.log("Character count:", count);

//.......................................//
// Task 5: Word Replacement

// let template = "The [noun] is [adjective].";

// let noun = prompt("Enter a noun:");
// let adjective = prompt("Enter an adjective:");

// let sentenceCompleted = template.replace("[noun]", noun).replace("[adjective]", adjective);

// console.log("Complete Sentence:", sentenceCompleted);

//.......................................//

//Task 6: Calculate the Area of a Circle

// let radius = parseFloat(prompt("Enter radius of circle:"));

// let area = 3.14159 * radius * radius;

// console.log("Area of Circle:", area);


//.......................................//
// Task 7: Temperature Conversion

// let celsius = parseFloat(prompt("Enter temperature in Celsius:"));

// console.log("Rounded:", Math.round(celsius));
// console.log("Ceil:", Math.ceil(celsius));
// console.log("Floor:", Math.floor(celsius));

//.......................................//
// Task 8: Discount Calculator

// let originalPrice = parseFloat(prompt("Enter original price:"));

// let discount = Math.floor(Math.random() * 41) + 10; 
// // random between 10 and 50

// let finalPrice = originalPrice - (originalPrice * discount / 100);

// console.log("Original Price:", originalPrice);
// console.log("Discount %:", discount + "%");
// console.log("Final Price:", finalPrice.toFixed(2));

//.......................................//
// Task 9: Number to Currency

// let amount = 12345.6711;

// let formatted = "$" + amount.toFixed(2);

// console.log("Formatted Currency:", formatted);

//.......................................//

// Task 10: Array Sorting

// let names = ["Ali", "Saif", "Ahmed", "Zara", "Bilal"];

// names.sort();

// console.log("Sorted Names:", names);



