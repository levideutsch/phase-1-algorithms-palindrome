function isPalindrome(string) {
  console.log(string[string.length-1])
  console.log(string[6])
  for (const letter of string) {
    // console.log(string[0])
    // console.log(string[5])
    if (string[0] === string[string.length-1]) {
      return true 
    } else {
      return false
    }
  }
 
}

/* 
Input: "madam"
Output: true

Input: "robot"
Output: false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
