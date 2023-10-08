// for Web Browsers you can use this code in console of web browser

// This sort function is defined for sorting the array which is entered by User of web Browser.
function sort(str){

// str.Lowercase() function is used for change input string in Lowercase.
// ==> like as KAUSHLESH ==> kaushlesh
// .split()  function is used to split the strings like as 
// ==> kaushlesh ==> ["k","a","u","s","h","l","e","s","h"]


  var array = str.toLowerCase().split("")

// now in this stage array will sort. 

  array = array.sort();

// sorted string will be stored in variable sortedString by joinning it.


  var sortedString = array.join("");
  return sortedString;
}

function isAnagram(str1, str2){
// here both string are compared whether both string are equal.
  if (sort(str1) === sort(str2)){
    return true;
  } else {
    return false;
  }
}
// Here both strings are said to input the strings.

var input1 = prompt("Enter the first string:");
var input2 = prompt("Enter the second string:");

var ans = isAnagram(input1, input2);

if(ans){
  console.log(`${input1} and ${input2} are anagrams.`);
} else {
  console.log(`${input1} and ${input2} are not anagrams.`);
}

// For Node.js in youu can these code
// what is Anagram 
// Anagram function are Eg. Race ==> acer, kaushlesh ==> Aushleshk 
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function sort(str){
  var array = str.toLowerCase().split("");
  array = array.sort();
  var sortedString = array.join("");
  return sortedString;
}

function isAnagram(str1, str2){
  if (sort(str1) === sort(str2)){
    return true;
  } else {
    return false;
  }
}

rl.question("Enter the first string: ", (input1) => {
  rl.question("Enter the second string: ", (input2) => {
    var ans = isAnagram(input1, input2);

    if(ans){
      console.log(`${input1} and ${input2} are anagrams.`);
    } else {
      console.log(`${input1} and ${input2} are not anagrams.`);
    }

    rl.close();
  });
});
