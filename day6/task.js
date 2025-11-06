// Task 1: Character Finder
var name="javasript"
console.log(name.charAt(4))
console.log(name.charCodeAt(2))
console.log(name.at(8))
// Task 2: Combine & Search
var a="Hello"
var b="World"
console.log(a.concat(b))
console.log(a.includes('lo'))
console.log(a.indexOf('l'))
console.log(a.lastIndexOf('l'))
// Task 3: Text Formatting

var name1='  Javascript Methods  '
console.log(name1.trim())
console.log(name1.toUpperCase())
console.log(name1.toLowerCase())
console.log(name1.trimStart())
console.log(name1.trimEnd())

// Task 4: Extract Substrings
var str='Learning JavaScript is fun!'
console.log(str.slice(9,19))
console.log(str.substring(0,8))

// Task 5: Padding Magic
var num="50"
console.log(num.padStart(5,'0'))
console.log(num.padEnd(10,'*'))

//Task 6: Replace & Compare
var str1='I love JavaScript, JavaScript is powerful!'
console.log(str1.replace("JavaScript","JS"))
console.log(str1.replaceAll("JavaScript","JS"))

var a="apple"
var b="banana"
console.log(a.localeCompare(b))




function analyzeString(str) {
  return {
    length: str.length,                     // Length of string
    firstChar: str.charAt(0),               // First character
    lastChar: str.charAt(-1),               // Last character
    upperCase: str.toUpperCase(),           // Uppercase version
    lowerCase: str.toLowerCase(),           // Lowercase version
    includesJS: str.includes("JS"),         // Check if it includes 'JS'
    sliced: str.slice(0, 5),                // First 5 characters
    trimmed: str.trim()                     // Trimmed string
  };
}

console.log(analyzeString("   JS is awesome!   "));



