/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/
// This function is used in Node.js only.
function sort(str){
  var array = str.toLowerCase().split("");
  array= array.sort();
  var sortedString = array.join("");
  return sortedString;
}
function isAnagram(str1,str2){
  if (sort(str1)== sort(str2)){
    return true;
  } else{
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
*/ For web browsers you should Right this code in console.
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

var input1 = prompt("Enter the first string:");
var input2 = prompt("Enter the second string:");

var ans = isAnagram(input1, input2);

if(ans){
  console.log(`${input1} and ${input2} are anagrams.`);
} else {
  console.log(`${input1} and ${input2} are not anagrams.`);
}


