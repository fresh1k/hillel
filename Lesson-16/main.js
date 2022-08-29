// 1

// let upperCase = (str) => {
//     let regexp = /^[A-Z]/
//     if (str.match(regexp)) {
//         console.log("String's first character is uppercase")
//     }
//     else {
//         console.log("String's first character is not uppercase")
//     }
// }

// upperCase('abcd')
// upperCase('BOOBA')
// upperCase('aBoba')


// 2

// let isDateString = (str) => {
//     let regexp = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/
//     if (str.match(regexp)) {
//         return true
//     } else {
//         return false;
//     }
// }
// console.log(isDateString("31/08/2022"));




// 3
// let trim = (str) => {
//     return str.replace(/\s/g, "");
// }



// console.log(trim("                         pizza  "));


// 4

// let vowelCount = (str) => {
//     return str.match(/[aeiouy]/g).length
// }

// console.log(vowelCount('The quick brown fox jumps over the lazy dog'))

// 5

// 12201-12288

// let isUSZipCode = (str) => {
//     let regexp = /\d{5}[-]\d{5}/
//     if (str.match(regexp)) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(isUSZipCode("12201-12288"))
// console.log(isUSZipCode("7892"))