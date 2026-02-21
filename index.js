// JavaScript Practice Sheet # 1

// Task 1: Identify which of the following variable names are legal and
// which are illegal:

// LEGAL                   ILLEGAL

// myVariable              first name
// _special                7eleven
// $price                  123variable   
//                         your-variable   

//...........................................//

// Task 2: Assignment Operators

// let total = 10;
// total += 5
// total -= 3
// total *= 2

// console.log(total);

//...........................................//

// Task 3: Prompt and Variables (Math):

// let num1 = prompt("Enter NUM 1:")
// let num2 = prompt("Enter NUM 2:")
// num1 = Number(num1)
// num2 = Number(num2)
// let total = num1 + num2;
// console.log(total);

//...........................................//
// Task 4: String Concatenation:

// let Book = "Harry potter" 
// let title = "Sorcerer`s Stone";
// let author = "Chairs Columbus";
// let year = "2001";

// console.log("The Book " + Book + " title is " + title + " and its author is " + author + " Was Pubblished in " + year);

//...........................................//
// Task 5: Checking Even or Odd

// let number = + prompt("Enter a number")

// if(number % 2 == 0){
//     console.log("Even");
// }
// else{
//     console.log("odd"); 
// }

//...........................................//
// Task 6: Grade Calculation

// let score = + prompt("enter your exam score(out of 100)");

// let letterGrade = score;

// if(letterGrade >= 90){
//     console.log("A");
// }
// else if(letterGrade >= 80 ){
//     console.log("B");
// }
// else if(letterGrade >= 70 ){
//     console.log("C");
// }
// else if(letterGrade >= 60 ){
//     console.log("D");
// }
// else if(letterGrade >= 50 ){
//     console.log("F");
// }
// else{
//     console.log("You are Failed  ");
// }

//...........................................//
// Task 7: Maximum of Three Numbers

// let  num1 = + prompt("Enter NUM1")
// let  num2 = + prompt("Enter NUM2")
// let  num3 = + prompt("Enter NUM3")

// if(num1 > num2 && num1 > num3){
//     console.log(`${num1} is the greatest number`); 
// }
// else if(num2 > num1 && num2 > num3){
//     console.log(`${num2} is the greatest number`); 
// }

// else if(num3 > num1 && num3 > num2){
//     console.log(`${num3} is the greatest number`); 
// }
// else{
//     console.log("Try again");
// }



// ------------------------------------------------------------
// Task 8: Odd or Even Sum

// let sum = 0;
// for (let i = 1; i < 101; i++) {
//     if (i % 2 == 0) {
//         sum += i
//     }
// }

// console.log("Sum of even numbers from 1 to 100 is: " + sum);


// ----------------------------------------------------------------
// Task 9: Output ?




// var a=5; b=3; c=7;
// result = a++ - ++c + b + ++c - b++;

//  a = 6
//  b = 4
//  c = 9
//  result = 8



// var a=1; b=2; c=0;
// result = ++a - --a + ++c + c - a++ + --b;

//  a = 2
//  b = 1
//  c = 1
//  result = 1



// var a=2; b=4; c=6;
// result = a++ - --b + c-- + b++ - ++c;

//  a = 3
//  b = 4
//  c = 6
//  result = 5



// var a=10; b=5; c=8;
// result = ++a + --b - c++ - ++c + b--;

//  a = 11
//  b = 3
//  c = 10
//  result = -3


// var a=3; b=2; c=1;
// result = b-- - --a + ++c - a++ + ++b - a;

//  a = 3
//  b = 2
//  c = 2
//  result = 1



// var a=1; b=5; c=3;
// result = ++c + a-- - b++ + c-- - --a;

//  a = -1
//  b = 6
//  c = 3
//  result = 0



// var a=7; b=0; c=1;
// result = ++c - a-- + --b + b++ - --c + c;

//  a = 6
//  b = 0
//  c = 1
//  result = -6



// var a=3; b=4; c=9;
// result = --a + ++b + c-- - b++ + ++c - --c - --b;

//  a = 2
//  b = 5
//  c = 9
//  result = 12



// var a=6; b=1; c=3;
// result = c++ - b + a-- - --c + b;

//  a = 5
//  b = 1
//  c = 3
//  result = 5



// var a=10; b=5; c=8;
// result = a + --b - c - ++c + b-- + a++;

//  a = 11
//  b = 3
//  c = 9
//  result = 8


 //-------------------------------------------------------------------
// Task 10: Output ?


    // 1. undefined && false --> undefined
    // 2. true && false --> false
    // 3. true && undefined --> undefined
    /*
    4. undefined && undefined
 undefined

5. 'undefined' || 'true'
  'undefined' (string is truthy)

6. null || 'true'
  'true'

7. null || undefined
  undefined

8. null && true || false
  false

9. null && true || false && true
  false

10. null && true || true && true
  true

11. (null && true) || (true && 1)
  1
    */
































































// let r = prompt("Enter radius: ")
// let area = Math.PI * r * r;
// console.log(area);

// let total = 10;
// total += 5
// total -= 3
// total *= 2

//--------------------------------------------------

// let arr = [1, 2, 3, 4, 5]

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
// }
// console.log(sum);



