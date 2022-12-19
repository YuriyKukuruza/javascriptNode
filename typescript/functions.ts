//"start": "ts-node typescript/types.ts",  - put into package.json if we need to run specific ts file !!


console.log('====================================== TS FUNCTIONS ===========================================================');

(async () => {

    function add(a:number, b: number):number {
        return a + b;
    }
    
    function toUpperCase(s:string):string {
        return s.toUpperCase();
    }
      
    // console.log(add(33,44));
    
    
    interface MyPostion {
        x: number | undefined
        y: number  | undefined 
    }
    interface MyPostionByDefault extends MyPostion {
        default: string
    }
    
    //function position(a:number): MyPostionByDefault
    function position(a:number,b:number): MyPostion
    function position(): MyPostion 
       
    function position(a?:number,b?:number){
        if(!a && !b){
            return {x:undefined, y:undefined}
        }
        if(a && !b) {
            return {x:a, y:undefined,default:a.toString()}
        }
        
        return {x: a, y: b}
    }
    
    console.log('Empty:', position());
    //console.log('One param:', position(43));
    console.log('Two param:', position(43,23));
    
    
    //================================================
    type User = {
        firstName: string;
        lastName:string;
    }
    
    function getUserFullName(user:User): string {
        return `${user.firstName} ${user.lastName}`;
    }
    
    const user: User = {
        firstName: 'Jon',
        lastName: 'Doe'
    }
    
    const userFullName = getUserFullName(user);
    
    function getUserFullNamewithPrefix(user:User, prefix?:string): string {
        return `${prefix ?? ''}${user.firstName} ${user.lastName}`;
    }
    
    const getUserFullName1 = getUserFullNamewithPrefix(user);  //  
    const getUserFullName2 = getUserFullNamewithPrefix(user, 'Mr. ');  // 
    
    //==================================================================
    
    //=======================Typed Arrow Function Expressions=================================================================
    type User1 = {
        firstName: string;
        lastName: string;
      };
      
      const getUserFullNameFu = (user: User, prefix?: string) => `${prefix ?? ''}${user.firstName} ${user.lastName}`;
      
      const userF: User1 = {
        firstName: "Jon",
        lastName: "Doe"
      };
      const userFullName1 = getUserFullNameFu(userF,'Mr. ');
      // console.log(userFullName1);
      
    //===============================Async Func===============================================================================
    type User2 = {
        id: number;
        firstName: string;
      };
      
      const users: User2[] = [
        { id: 1, firstName: "Jane" },
        { id: 2, firstName: "Jon" }
      ];
      
      async function getUserById(userId: number) {
        const foundUser = users.find(user => user.id === userId);
      
        if (!foundUser) {
          return null;
        }
      
        return foundUser;
      }
      
      async function runProgram() {
        const user = await getUserById(1);
      }
      
    // rest parms in function   
    function sum(...args: number[]) {
        return args.reduce((accumulator, currentValue) => {
          return accumulator + currentValue;
        }, 0);
      }
      
    const sumResult = sum(2, 4, 6, 8);  
    // console.log(sumResult);
    
    
    // ================================Using Function Overloads=====================================
    type UserStructure = {
        id: number;
        email: string;
        fullName: string;
        age: number;
      };
      
      const usersOverload: UserStructure[] = [
        { id: 1, email: "jane_doe@example.com", fullName: "Jane Doe" , age: 35 },
        { id: 2, email: "jon_do@example.com", fullName: "Jon Doe", age: 35 }
      ];
      
      function getUser(id: number): UserStructure | undefined;
      function getUser(email: string): UserStructure | undefined;
      function getUser(age: number, fullName: string): UserStructure | undefined;
      
      function getUser(idOrEmailOrAge: number | string, fullName?: string): UserStructure | undefined {
        if (typeof idOrEmailOrAge === "string") {
          return usersOverload.find(user => user.email === idOrEmailOrAge);
        }
      
        if (typeof fullName === "string") {
          return usersOverload.find(user => user.age === idOrEmailOrAge && user.fullName === fullName);
        } else {
          return usersOverload.find(user => user.id === idOrEmailOrAge);
        }
      }
      
      //console.log('getting user by Id = 1:' + JSON.stringify(getUser(1)));
      //console.log('getting user by Id = 3! not exist:' + JSON.stringify(getUser(3)));
      //console.log('getting user by Email:' + JSON.stringify(getUser("jane_doe@example.com")));
      //console.log('getting user by Age & Fullname:' + JSON.stringify(getUser(35, "Jon Doe")));
    
    // ===========================User-Defined Type Guards ================================================
    //These are especially useful when using the Array.prototype.filter function to return a filtered array of data
    
    // For example, imagine you have an array of strings, and you only want to include the string production to that array if some other flag is true:
    const isProduction = false
    const valuesArray = ['some-string', isProduction && 'production']
    // parameterName is Type
    function isString(value: any): value is string {
        return typeof value === "string"
      }
    function processArray(array: string[]) {
        // do something with array
    }
    processArray(valuesArray.filter(isString))
    
    // ================================================== Narrowing ================================================
    // "string","number","bigint","boolean","symbol","undefined","object","function" -- all typescript types
    // 0 NaN
    // "" (the empty string)
    // 0n (the bigint version of zero)
    // null
    // undefined 
    function padLeft(padding: number | string, input: string) {
        if (typeof padding === "number") {
            return " ".repeat(padding) + input;
          }
          return padding + input;
    }
    
    function printAll(strs: string | string[] | null) {
        //if (typeof strs === "object") {   - checking only for string[] but not null 
        if (strs && typeof strs === "object") {   // checking for null as well 
          for (const s of strs) {
              console.log(s);
          }
        } else if (typeof strs === "string") {
          console.log(strs);
        } else {
            console.log('Null value');
        }
      }
    
    //printAll(null);
    //printAll('some string');
    //printAll(['23','56']);
    
    // ================================================Equality Narrowing================================================
    interface Container {
        value: number | null | undefined;
      }
       
      function multiplyValue(container: Container, factor: number) {
        // Remove both 'null' and 'undefined' from the type.
        if (container.value != null) {
          console.log(container.value);
          // (property) Container.value: number
          // Now we can safely multiply 'container.value'.
          container.value *= factor;
          
        }
      }
      const cont:Container = {
        value:23
      };
      // multiplyValue(cont, 45);
      
    //============================================The 'in' operator narrowing=============================================
    type Fish = { swim: () => void };
    type Bird = { fly: () => void };
    type Human = { swim?: () => void; fly?: () => void };
 
    function move(animal: Fish | Bird | Human) {
        if ("swim" in animal) {
            animal;  //(parameter) animal: Fish | Human
        } else {
            animal;  // (parameter) animal: Bird | Human
        }
    }
    
    //============================================Instanceof narrowing====================================================
    function logValue(x: Date | string) {
        if (x instanceof Date) {
          console.log(x.toUTCString());
             //(parameter) x: Date
        } else {
          console.log(x.toUpperCase());        
            //(parameter) x: string
        }
      }
    
    logValue(new Date("2022-03-25"))
    logValue('sdfsdfdsfdsf')
    //==========================================Assignments===============================================================
    let x = Math.random() < 0.5 ? 10 : "hello world!";
        x = 1;            //let x: number
        x = "goodbye!";  // let x: string
        //x =true;  //Type 'boolean' is not assignable to type 'string | number'.
    
    // Control flow analysis
    function example() {
            let x: string | number | boolean;       
            x = Math.random() < 0.5;      
            console.log(x);  //let x: boolean
            
            if (Math.random() < 0.5) {
                x = "hello";
                console.log(x); // let x: string
            } else {
                x = 100;
                console.log(x); //let x: number
            }
            return x;  //let x: string | number
    }
    //example();
    
    })();
