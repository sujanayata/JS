
/*// string-->collection of characters enclosed with in a
// single quotes(''),double quotes("") and backticks(``)

// string methods
// var name="sujanababudas"
// var place="SIDDIPET"
//1. charAt()--> to display the char at a particular index
// console.log(name.charAt(2))
// console.log(name.charAt(-2)) --->negative indexing is not allowed in charAt() 

//2. charCodeAt()--> it provides ASCII values of character,by passing index value
// (American standard code for information interchange)
/*console.log(name.charCodeAt(6))
console.log(name.charCodeAt(7))
console.log(name.charCodeAt(3))

// 3.at()---> it gives the value at specified index
console.log(name.at(4))
// console.log(name.at(-2))--> by obtaining negative index value also we can obtain the char

// 4.Concat() --> combines two strings
var name1="sricharanyata"
console.log(name.concat(" ",name1))

// 5.includes---> to check weather character is present in string or not
console.log(name.includes("s"))
console.log(name.includes("m"))*/

// 6.indexOf()-->to check the index of character
// console.log(name.indexOf("s"))

// 7.lastindexOf()--> to check the last index of the character
// console.log(name.lastIndexOf("a"))

// 8.toUpperCase()-->convert into uppercase
// console.log(name.toUpperCase())

// 9.toLowerCase()--> convert into lowercase
// console.log(place.toLowerCase())

// 10.trim()--> it is used to remove the space(leading(starting),trailing(ending))
// var hero="   prabhas   "
// console.log(hero)
// console.log(hero.trim())

// 11.trimstart()--> to remove only leading space  (starting space)
// console.log(hero.trimStart())

// 12.trimend()---> to remove only trailing space (ending space)
// console.log(hero.trimEnd())

// 13.slice()--> is used to extract a portion of string
// console.log(name.slice(6,13))
// console.log(name.slice(2,5))

// 14.substring()---> similar to slice but now its depriocated(not in use)
// console.log(name.substring(2,7))

//15.toString()--> to convert anything into string
// var num=123
// var a=(num.toString())
// console.log(a)
// console.log(type(a))

// 16.padstart()--> to add the characters at the start until it reaches the target value
// var name3="123"
// console.log(name3.padStart(5,"puppy"))

// 17.padEnd()--> to add the character at end until it reaches the target value
// console.log(name3.padEnd(5,"puppy"))

// 18.replace()-->
// var place="SIDDIPET"
// // console.log(place.replace("D","d"))
// 19.replaceAll()-->
// console.log(place.replaceAll("D","d"))
// localeCompare()-->
// var a="apple"
// var b="banana"
// console.log(a.localeCompare(b))
// console.log(b.localeCompare(a))
// console.log(a.localeCompare(a))

// 22 startswith
var movie="kantara"
console.log(movie.startsWith("k"))
// 23.endswith
console.log(movie.endsWith("a"))
// 24.repeat
console.log(movie.repeat(3))
// 25.split
var num="1,2,3,4,5,6"
console.log(num.split(","))