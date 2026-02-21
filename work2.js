// JavaScript Practice Sheet # 2

// (LOOP, IF-ELSE, ARRAY )

// ..............................//
// Task 1: Filter Even Numbers

// let arr = [1,2,3,4,5,6,7,8,9,10]

// for(let i = 0; i < arr.length ; i++ ){
    
//      if (arr[i] % 2 == 0) {
//         console.log(arr[i]);
//      }
// }

// Task 2: Sum Of Odd Numbers
// ..............................//

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 !== 0) { 
//         sum += numbers[i];
//     }
// }

// console.log("Sum of Odd Numbers:", sum);


// Task 3: FizzBuzz
// ..............................//

// for (let i = 1; i <= 100; i++) {

//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } 
//   else if (i % 3 === 0) {
//     console.log("Fizz");
//   } 
//   else if (i % 5 === 0) {
//     console.log("Buzz");
//   } 
//   else {
//     console.log(i);
//   }

// }

// Task 4: Count Characters
// ..............................//

// let words = ["apple", "banana", "mango", "grape"];

// let totalCharacters = 0;

// for (let i = 0; i < words.length; i++) {
//   totalCharacters += words[i].length;
// }

// console.log("Total number of characters:", totalCharacters);

// Task 5: Find Maximum Length Word
// ..............................//

// let words = ["apple", "banana", "watermelon", "grape", "mango"];

// let longestWord = words[0];  

// for (let i = 1; i < words.length; i++) {
  
//   if (words[i].length > longestWord.length) {
//     longestWord = words[i];  
//   }

// }

// console.log("The word with maximum length is:", longestWord);

// Task 6: Remove Short Words (less than 3 characters)
// ..............................//

// let words = ["hi", "apple", "to", "banana", "go", "cat"];

// let filteredWords = [];

// for (let i = 0; i < words.length; i++) {

//   if (words[i].length >= 3) {
//     filteredWords.push(words[i]);
//   }

// }

// console.log("Updated Array:", filteredWords);

// Task 7: Multiplication Table
// ..............................//

// let num = Number(prompt("Enter a number:"));

// for (let i = 1; i <= 10; i++) {

//   console.log(num + " x " + i + " = " + (num * i));

// }

// Task 8: Array Sorting (Ascending Order)
// ..............................//

// let numbers = [5, 2, 9, 1, 7];

// for (let i = 0; i < numbers.length; i++) {

//   for (let j = i + 1; j < numbers.length; j++) {

//     if (numbers[i] > numbers[j]) {
//       let temp = numbers[i];
//       numbers[i] = numbers[j];
//       numbers[j] = temp;
//     } else {
//       // do nothing
//     }
//   }
// }

// console.log("Sorted Array:", numbers);

// Task 9: Search and Replace
// ..............................//

// let wordsArray = ["apple", "banana", "mango", "grape"];

// let searchWord = prompt("Enter word to search:");
// let newWord = prompt("Enter new word to replace:");

// for (let i = 0; i < wordsArray.length; i++) {

//   if (wordsArray[i] === searchWord) {
//     wordsArray[i] = newWord;
//   } 

// }

// console.log("Updated Array:", wordsArray);

// Task 12: Unique Values (Appear Only Once)
// ..............................//

// let nums = [1, 2, 2, 3, 4, 4, 5];

// for (let i = 0; i < nums.length; i++) {

//   let count = 0;

//   for (let j = 0; j < nums.length; j++) {

//     if (nums[i] === nums[j]) {
//       count++;

//   }

//   if (count === 1) {
//     console.log("Unique value:", nums[i]);
//   } 

// }

// ..............................// x // ..............................//



