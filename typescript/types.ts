const str1:boolean = true;
const str2:boolean = false;
const int:number = 42;
const float:number = 4.2;
const message:string = '';

const arr:number[] =[1,2,3,5,8];
const arr2:Array<number> = [1,2,3,5,8];
const words: string[] = ['dfsd','sdfsd']

//Tuple
const contact:[string,number] = ['Yurka',123123];

//Any
let variable: any =42;
variable =[];

//===============
function sayMyName(name:string):void {
    console.log(name);
}
sayMyName('Hiii')

// Never 
function throwError(message:string): never {
    throw new Error(message); 
}

// Type 
type Login = string; 
const login:Login = 'admin';
//const login1:Login = 42;

type ID = string | number; 
const id: ID = 'sdfsd';
const id1: ID = 2112; 
//const id3:ID = true;

// Null && Undefined
type SomeType = string | null | undefined;
 


