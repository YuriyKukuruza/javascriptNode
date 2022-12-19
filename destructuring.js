
//============================================================ Object Destructuring  
const note = {
    id: 1,
    title: 'My first note',
    date: '01/01/1970',
  }
  
// Create variables from the Object properties [old way]
//const id = note.id
//const title = note.title
//const date = note.date

// Destructure properties into variables
const { id, title, date } = note


// Assign a custom name to a destructured value
const { id: noteId, title: tit, date: da } = note

// console.log(`id:${noteId} title: ${tit}  date: ${da}`)


const note1 = {
    id: 1,
    title: 'My first note',
    date: '01/01/1970',
    author: {
      firstName: 'Sherlock',
      lastName: 'Holmes',
    },
  }
  
//Destructure nested properties
//const {
//    id: noteId1, title: tit1, date: da1,
//    author,
//    author: { firstName, lastName },
//  } = note1;
  
  // console.log(`author obj:${author.firstName} firstName: ${firstName}  lastName: ${lastName}`)
  
  
  const { length } = 'A string'
  //console.log(length);
  
//============================================================ Array Destructuring    
const d_date = ['1970', '12', '01']
  
// Create variables from the Array items
//const year = date[0]
//const month = date[1]
//const day = date[2]
  
// Destructure Array values into variables
//const [year, month, day] = d_date

//console.log(year) console.log(month) console.log(day)

// Skip the second item in the array
const [year, , day] = d_date
//console.log(year); console.log(day)

// Create a nested array
const nestedArray = [1, 2, [3, 4], 5]

// Destructure nested items
const [one, two, [three, four], five] = nestedArray
//console.log(one, two, three, four, five)

const note23 = {
    id: 1,
    title: 'My first note',
    date: '01/01/1970',
  }
  
// Using forEach
//Object.entries(note23).forEach(([key, value]) => {
//    console.log(`${key}: ${value}`)
//  })

// Using a for loop
//for (let [key, value] of Object.entries(note23)) {
//    console.log(`${key}: ${value}`)
//  }

const note33 = {
    title: 'My first note',
    author: {
      firstName: 'Sherlock',
      lastName: 'Holmes',
    },
    tags: ['personal', 'writing', 'investigations'],
}

const {
    title: tt, 
    author, 
    tags: [personalTag,writingTag,inve],
    nowDate = new Date() 
} = note33;

// console.log(tt,personalTag,writingTag,inve, nowDate)


//=================================================================SPREAD===================================================

// Create an Array
const tools = ['hammer', 'screwdriver']
const otherTools = ['wrench', 'saw']

// Concatenate tools and otherTools together -- old way
const allTools = tools.concat(otherTools)

const tyty = [...tools, ...otherTools];
//console.log(tyty);

// Array of users
const users = [
    { id: 1, name: 'Ben' },
    { id: 2, name: 'Leslie' },
  ]

// A new user to be added
const newUser = { id: 3, name: 'Ron' }
// users.push(newUser) // old way

// new way , without original array modification
const updatedUsers = [...users, newUser] // new way
//console.log(users) 
//console.log(updatedUsers) 


// Create an Array -- re-assign by reference! 
/*const originalArray = ['one', 'two', 'three']
// Assign Array to another variable
const secondArray = originalArray
secondArray.pop();
console.log(originalArray);
console.log(secondArray);
*/

// Create an Array - create - without original array Modification :) 
/*const originalArray = ['one', 'two', 'three']
// Use spread to make a shallow copy
const secondArray = [...originalArray]
// Remove the last item of the second Array
secondArray.pop()
console.log(originalArray)
console.log(secondArray);
*/

// Create a set
const set = new Set()
set.add('octopus')
set.add('starfish')
set.add('whale')
const seaCreatures = [...set];
// console.log(seaCreatures)

// spread from string 
const string = 'hello'
const stringArray = [...string]
//console.log(stringArray)

// Create an Object and a copied Object with Object.assign()
const originalObject = { enabled: true, darkMode: false }
// const secondObject = Object.assign({}, originalObject) -- another way to copy an object
const secondObject = {...originalObject};
secondObject.enabled = false; 
//console.log(originalObject)
//console.log(secondObject)

//
const user = {
    id: 3,
    name: 'Ron',
    organization: {
        name: 'Parks & Recreation',
        city: 'Pawnee',
      },
}
const updatedUser = {...user,organization: {...user.organization,position: 'Director',},}
// console.log(updatedUser)


//===============Spread with Function Calls===========================================================================

// Create a function to multiply three items
function multiply(a, b, c) {
    return a * b * c
}
const m_array = [2,4,6]; 
//console.log(multiply(...m_array))
//console.log(multiply.apply(null, [2,4,6])) // -- other way to run func  

//=============Rest Parameters ========================================================================================

function restTest(one, two, ...args) {
    //console.log(one)
    //console.log(two)
    console.log(args)
  }  
// restTest(1, 2, 3, 4, 5, 6)

const { isLoggedIn, ...rest } = { id: 1, name: 'Ben', isLoggedIn: true }

console.log(isLoggedIn)
console.log(rest)