// I. Variables & Datatypes
//Part A: Q + A
// How do we assign a value to a variable? Assignment operator.

// How do we change the value of a variable? Assign it to another value.

// How do we assign an existing variable to a new variable? Assign the new variable to the existing variable.

// Remind me, what are declare, assign, and define? Declare by initializing using, var, let, or const. Assign means to set a variable to a value. Define using functions on to execute an order.


// What is pseudocoding and why should you do it? Writing in a structure or language which is easier to understand so that when you code you can break down what you need to do quickly. 


// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it? 60% should be allocated to thinking and 40% to solving the problem. 


//Part B: Strings
// Create a variable called firstVariable
// let firstVariable

// Assign it the value of the string "Hello World"
// firstVariable = "Hello World"

// Change the value of this variable to some number
// firstVariable = 8

// Store the value of firstVariablein a new variable called secondVariable
// secondVariable = firstVariable

// Change the value of secondVariable to any string.
// secondVariable = "I'm just trying to solve some problems and get paid."

// What is the value of firstVariable? 8
// console.log(firstVariable)

// Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjean
// let yourName = "Mir Ali"
// console.log(`Hello, my name is ${yourName}.`)

// Part C: Booleans

// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Name' === 'Name');
// // FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false);
// console.log(false || false || false || false || false || true);
// console.log(false === false)
// console.log(e === 'Kevin');
// console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
// console.log(48 == '48');

// Part D: The farm

// Declare a variable animal. Set it to be either "cow" or something else
// let animal = "dragon"


// Write code that will print out "mooooo" if it is equal to cow
// const creature = (animal) => {
// if (animal === "dragon") {
//   return "ROOOOOAAAAARRRRR!!!"
//   }
//   return "Hey! You're not a cow."
// }
// console.log(creature("ghost"))

// Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
// Commit

// Part E: Drivers Ed

// Make a variable that holds a person's age; be semantic
// let age = 18
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
// let personAge = (age) => {
//   if (age > 16) {
//     return "Here are the keys!"
//   }
//   return "Sorry, you're too young."
// }
// console.log(personAge(21))
// II. Loops
// A. The basics

// Write a loop that will print out all the numbers from 0 to 10, inclusive

// for (let i = 0; i <= 10; i++) {
//   console.log(i)
// }
// Write a loop that will print out all the numbers from 10 up to and including 400
// for (let i = 10; i <= 400; i++) {
//   console.log(i)
// }

// Write a loop that will print out every third number starting with 12 and going no higher than 4000
// for (let i = 12; i <= 4000; i+=3) {
//   console.log(i)
// }

// B. Get even
// Print out the numbers that are within the range of 1 - 100
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i, "is an even number")
//   }
// }

// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"


// C. Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
// for (let i = 0; i <= 100; i++) {
//  if (i % 5 === 0 && i % 3 === 0 && i !== 0)   {
//     console.log("I found a " + i +". High five! " + "I found a " + i + ". Three is a crowd.")
//   } 
//   if (i % 5 === 0 && i !== 0) {
//     console.log("I found a " + i +". High five!")
//   } else if (i % 3 === 0 && i !== 0) {
//     console.log("I found a " + i + ". Three is a crowd.")
//   } 
// }

// Example Output:

// I found a 5. High five!
// I found a 10. High five!

// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
// Example Output:

// I found a 3. Three is a crowd
// I found a 5. High five!
// I found a 6. Three is a crowd
// I found a 9. Three is a crowd
// I found a 10. High five!

// For numbers divisible by both three and five, be sure your code prints both messages

// D. Savings account
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// let bankAccount = 0
// for (let i = 1; i <= 10; i++) {
//   bankAccount += i
// }
// console.log(bankAccount)
// Check your work! Your bank_account should have $55 in it.

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// let bankAccount = 0
// for (let i = 1; i <= 100; i++) {
//   double = bankAccount += i
//   bonus = double * 2
// }
// console.log(bonus)

// Check your work! Your bank_account should have $10,100 in it.

// III. Arrays & Control flow

// A. Talk about it:
// What are the things in an array called? Elements
// Do Arrays guarantee those things will be in order? Yes
// What real-life thing could you model with an array? Lists of elements/items


// B. Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes
// let quotes = ["alright, alright, alright", "who are you!?", "what you talkin about Willis!?"]

// C. Accessing elements
// Given the following array 
// const randomThings = [1, 10, "Hello", true]


// How do you access the 1st element in the array?
// console.log(randomThings[0])
// // Change the value of "Hello" to "World"
// randomThings[2] = "World"
// console.log(randomThings[2])
// // Check the value of the array to make sure it updated the array. How? Why, yes!
// console.log(randomThings);

// D. Change values
// Given the following array 
// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// // What would you write to access the 3rd element of the array?
// ourClass[2]
// // Change the value of "Github" to "Octocat"
// ourClass[4] = "Octocat"
// // Add a new element, "Cloud City" to the array
// ourClass.push("Cloud City")
// console.log(ourClass)

// E. Mix It Up
// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

// Given the following array: 
// const myArray = [5, 10, 500, 20]

// // Add the string "Aegon" to the end of the array. Add another string of your choice to the end of the array.
// myArray.push("Aegon", "WoahSon")
// // Remove the 5 from the beginning of the array.
// myArray.shift()
// // Add the string "Bob Marley" to the beginning of the array.
// myArray.unshift("Bob Marley")
// // Remove the string of your choice from the end of the array.
// myArray.pop()
// console.log(myArray)
// // Reverse this array using Array.prototype.reverse(). Did you mutate the array? Yes
// // What does mutate mean? Manipulating the array
// // Did the .reverse()method return anything? The reverse order of the array
// console.log(myArray.reverse())

// F. Biggie Smalls
// Create a variable that contains an integer.
// let num = 4
// // Write an if ... elsestatement that:
// if (num >= 100) {
//   console.log("big number")
// } else {
//   console.log("little number")
// }
// console.log()s "little number" if the number is entered is less than 100
// console.log()s big number if the number is greater than or equal to 100.

// G. Monkey in the Middle
// Write an if ... else if ... elsestatement:
// let number = 5
// if (number < 5) {
//   console.log("little number")
// } else if (number > 10) {
//   console.log("big number")
// } else {
//   console.log("monkey")
// }

// console.log()little number if the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".

// H. What's in Your Closet?
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.


// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "Per Scholas hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];

// // // Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],
//   [
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs"
//   ],
//   [
//     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];

// // What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
// console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!")
// // Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
// kristynsCloset.splice(6, 0, "Raybans")
// console.log(kristynsCloset)
// // Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
// kristynsCloset[5] = "stained knit hat"
// // Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
// console.log(thomsCloset[0][0])
// // In the same way, access one item from Thom's pants array.
// thomsCloset[1][0]
// // Access one item from Thom's accessories array.
// thomsCloset[2][0]
// // Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
// console.log("Thom is wearing a " + thomsCloset[0][0] + ", " + thomsCloset[1][0] + ", and " + thomsCloset[2][0] + ".")
// // Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
// thomsCloset[1][2] = "Footie Pajamas"
// console.log(thomsCloset)
// IV. Functions
// A. printGreeting
// Do you think you could write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting?
// const printGreeting = (name) => {
//   return `What's goodie, ${name}!!!`
// }
// console.log(printGreeting("boiiii"))
// Like so?
// console.log(printGreeting("Yoooooo"));

// You think you could? I think so too. Feel free to skip this problem, because you've already done it. If you've done the problem twice, read entire problems carefully before doing them from now on.

// B. printCool
// Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.
// const printCool = (name) => {
//   return `Yo, ${name} you mad cool!`
// }
// console.log(printCool("dude"))

// console.log(printCool("Captain Reynolds"));
// => "Captain Reynolds is cool";


// C. calculateCube
// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.

// const calculateCube = (num) => {
//   volume = num ** 3
//   return volume
// }
// console.log(calculateCube(10))

// console.log(calculateCube(5));
// => 125

// D. isVowel
// Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.

// let vowels = ["a", "e", "i", "o", "u"]
// const isVowel = (char) => {
//   if (vowels.includes(char)) {
//     console.log("is a vowel")
//   } else {
//     console.log(false)
//   }
// }

// isVowel("z")

// console.log(isVowel("a"));
// => true


// E. getTwoLengths
// Write a function getTwoLengthsthat accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

// const getTwoLengths = (x, y) => {
//   console.log([x.length, y.length])
// }
// getTwoLengths("woah", "there")
// getTwoLengths("Hank", "Hippopopalous");
// => [4, 13]


// F. getMultipleLengths
// Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

// const getMultipleLengths = (arr) => {
//   let lengthArr = []
//   arr.forEach(str => {
//     lengthArr.push(str.length)
//   })
//   console.log(lengthArr)
// }
// getMultipleLengths(["hello", "what", "is", "up", "my", "dude"])
// getMultipleLengths(["hello", "what", "is", "up", "dude"])
// => [5, 4, 2, 2, 4]


// G. maxOfThree
// Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.

// const maxOfThree = (a, b, c) => {
//   if (a > b & a > c) {
//     console.log(a)
//   } else if (b > c) {
//     console.log(b)
//   } else {
//     console.log(c)
//   }
// }
// maxOfThree(6, 9, 1)

// console.log(maxOfThree(6, 9, 1));
// => 9

// Did you use Google and find Math.max()? If so, great job! Very resourceful—keep looking stuff up! However, for this particular question, we need you to submit a solution that does not use Math.max().


// H. printLongestWord
// Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

// const printLongestWord = (arr) => {
//   longestStr = ''
//   arr.forEach(elem => {
//     if (longestStr.length < elem.length) {
//       longestStr = elem
//     }
//   })
//       console.log(longestStr)
// }
// printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"])

// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// => "Peanutbutter"


// Objects
// Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. The object data structure is a good way to organize the data from our user.


// A. Make a user object
// Create an object called user.
// Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchased to an empty array []. Set the other values to whatever you would like.


// B. Update the user
// Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.
// Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++

const user = {
  name: "Joe",
  email: "JoeMean@gmail.com",
  age: 35,
  purchase: []
}


user.email = "Who?@gmail.com"


// C. Adding keys and values
// You have decided to add your user's location to the data that you want to collect.

// Without changing the original userobject, add a new key location to the object, and give it a value or some-or-other location (a string).



// D. Shopaholic!
// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.

// Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.

// Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.

// Console.log just the "Merino jodhpurs" from the purchasedarray.



// E. Object-within-object
// Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.

// If we want to give our user a friendwith a nameand age, we could write:

// user.friend = {
//     name: "Grace Hopper",
//     age: 85
// }
// When we console.log user, we would see the friendobject added to our user object.

// Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)

// Console.log just the friend's name

// Console.log just the friend's location

// CHANGE the friend's age to 55

// The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.

// The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.

// Console.log just "A latte" from the friend's purchasedarray.



// F. Loops
// Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), and prints each element to the console.

// Write a for loop that iterates over the Friend's purchased array, and prints each element to the console.



// G. Functions can operate on objects
// Write a single function updateUserthat takes no parameters. When the function is run, it should:
// it should increment the user's age by 1
// make the user's name uppercase
// The function does not need a return statement, it will merely modify the user object.

// Write a function oldAndLoud that performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoudfunction with useras the argument.