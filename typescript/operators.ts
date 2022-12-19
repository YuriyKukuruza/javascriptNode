//==============================================Operators========================================================

interface Person {
    name: string 
    age:number 
}

type PersonKeys = keyof Person // 'name' , 'age' 

const myName: PersonKeys = 'name'
let kyu: PersonKeys = 'name'
kyu = 'age'
//kyu = 'created' -- cannot assign 

type User = {
    _id: number
    name: string 
    email: string 
    createdAt: Date
}

// return type ! Pick<Type, Keys> 
type UserKeysNoMeta1 = Pick<User, 'name' | 'email'> // 'name' || 'email'
const tyrrr: UserKeysNoMeta1 = {
    name:'sdfd',
    email:'sdfsdf'
}

//exclude , and returns 'value1' | value
type UserKeysNoMeta = Exclude<keyof User, '_id' | 'createdAt'> // 'name' || 'email'
const tyui:UserKeysNoMeta = 'email'


//exclude through  Omit<Type, Keys>
type UserKeysNoMeta2 = Omit<User, '_id' | 'createdAt'> // // 'name' || 'email'


interface Employee {
    id: number;
    name?: string; // 👈️ optional (might be undefined)
    salary: number;
  }
  
  const emp: Employee = {
    id: 1,
    name: 'James',
    salary: 100,
  };

