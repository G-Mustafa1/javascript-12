//Ek list of integers lein aur sirf even numbers ko filter karke ek nayi list generate karein.

let even_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = even_list.filter((val) => {
   return val % 2 == 0;
});
document.write(`<center><h2>${even}<h2/><center/><hr>`);

//Ek string input lein aur uska reverse print karein.

let input = "Hello world";

document.write(`Reverse: Hello World`);
document.write(`<center>${input.split("").reverse().join("")}<center/><hr>`);

//Ek integer input lein aur check karein ke woh prime hai ya nahi.

let userInput = prompt("Enter a number")
let prime_num = true;
if (userInput <= 1) {
   document.write(`<br> ${userInput} Not prime num <br> <hr>`)
}
else if (userInput % 2 == 0) {
   document.write(`<br> ${userInput} Not prime num <br> <hr>`)
}
for (let i = 3; i < Math.sqrt(); i += 2) {
   if (userInput % i === 0) {
      prime_num = false;
      break;
   }
}
if (prime_num) {
   document.write(`<br> ${userInput}  prime num <br> <hr>`)
}
else {
   document.write(`<br> ${userInput} Not prime num <br> <hr>`)
}
//Ek list of integers lein aur uss list ka maximum element find karein.

let arrIntegers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrMax = [0];
for (let i = 0; i < arrIntegers.length; i++) {
   if (arrIntegers[i] > arrMax) {
      arrMax = arrIntegers[i];
   }
}
document.write(`<br> Maximum Num ${arrMax} <br> <hr>`);

//Ek string input lein aur check karein ke woh palindrome hai ya nahi.

let input1 = prompt("Enter a palindrome Word", "wow");
if (input1 === input1.split("").reverse().join("")) {
   document.write(`<br> Palindrome Words: <br>${input1.toUpperCase()}: is palindrome words <hr> `)
}
else {
   document.write(`<br> Palindrome Words: <br>${input1}: is not palindrome words <hr> `)

}
//Ek integer input lein aur Fibonacci series ka output generate karein, starting from 0 up to the specified number of term

let numberTerms = 10;
let nahi1 = 0, nahi2 = 1, nextTerms;
for (let i = 3; i < numberTerms; i++) {
   nextTerms = nahi1 + nahi2;
   // console.log(nextTerms);
   nahi1 = nahi2;
   nahi2 = nextTerms
   console.log(nahi2)
}
let vowelCount = 0;
// Create a regular expression to match vowels
const vowelsRegex = /[aeiou]/gi;
const inputString = "This is an example string.";
const vowelMatches = inputString.match(vowelsRegex);

if (vowelMatches) {
   vowelCount = vowelMatches.length;
}

document.write(`The number of vowels in "${inputString}" is: ${vowelCount} <hr>`);

//Ek integer input lein aur uska factorial calculate karein.

let nums = 5;
let fact = 1;
for (let i = 0; i < nums; i++) {
   fact *= i
   console.log(nums);


}
document.write(` <br>Factorial Calculate${fact}<hr>`);

//Ek integer input lein aur uske digits ka sum calculate karein.
let sum = 12345;
let num0 = 0;
for (let i = sum; i > 0; i = Math.floor(i / 10)) {
   num0 += i % 10;
}
document.write(`<br> The sum of ${num0} <hr>`);

//Ek list of integers lein aur uski elements ko reverse karein.

let Arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
document.write(`<br> Aarry ${Arry}`)
Arry.reverse()
document.write(`<br> Reverse Aarry ${Arry} <hr>`)
