// function PalindromeCreator(str) { 
//     if(IsPalindrome(str)){
//       return 'palindrome';
//     }
  
//     for(let i = 0; i < str.length; i++){
//       let newStr = str.split('')
  
//       newStr.splice(i, 1)
//       newStr = newStr.join('')
  
//       if (newStr.length < 3){
//         return 'not possible';
//       }
  
//       if(IsPalindrome(newStr)){
//         return str[i];
//       }
  
//       for(let j = i+1; j < str.length; j++){
//         let newnewStr = newStr.split('')
  
//         newnewStr.splice(j, 1)
//         newnewStr = newnewStr.join('')
  
//         if (newnewStr.length < 3){
//           return 'not possible';
//         }
  
//         if(IsPalindrome(newnewStr)){
//           return str[i] + str[j];
//         }
//       }
//     }
//     // code goes here  
//     return 'not possible'; 
//   }
  
//   function IsPalindrome(str){
//     for(let i = 0; i < str.length; i++){
//       if(str[i] != str[str.length-1-i]){
//         return false;
//       }
//     }
//     return true;
//   }

//   console.log(IsPalindrome('mam'));

// function isPalindrome(str) {
//   str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//   return str.split('').reduce((acc, char, i) => {
//     return acc && char === str[str.length - 1 - i];
//   }, true);
// }

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  for (var i = 0; i < str.length/2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
// example usage
console.log(isPalindrome('maam')); // true
console.log(isPalindrome('hello')); 