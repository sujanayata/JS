// 1.Create an object named student with properties:
//  name, age, course, and marks.

/*var student={name:"sujana",age:21,cource:"python",marks:89}
console.log(student)

// 2.Add a new property grade and modify the marks value.
student.marks=99;
student.grade="A"
console.log(student)
// 3.Use Object.keys() and Object.values() to display all property names and their values separately.

console.log(Object.keys(student))
console.log(Object.values(student))
// 4.Use Object.entries() to print key–value pairs together in array format.
console.log(Object.entries(student))

// 5.Create another object extraDetails with properties like city and rollNo,
//  and merge it into the student object using Object.assign().

var ed={city:"sdpt",rollno:6}
Object.assign(student,ed)
console.log(student)

//6. Use Object.hasOwnProperty() to check if the student object has the property course and address.

console.log(student.hasOwnProperty("marks"));
console.log(student.hasOwnProperty("name"));
*/

//7. Make a copy of the student object and apply Object.freeze() on it.
//  Try adding or modifying properties and observe that no changes happen.

// var student={name:"sujana",age:21,cource:"python",marks:89}
// console.log(Object.freeze(student))
// student.place="sdpt"
// student.id=123
// student.fav_subject="english"
// console.log(student)

//8. Apply Object.seal() on another copy of the object and verify that:
// You cannot add or delete properties,
// But you can modify existing values.

var student={name:"sujana",age:21,cource:"python",marks:89}
console.log(Object.seal(student))
student.name="suppu"
student.country="india"
console.log(student)


