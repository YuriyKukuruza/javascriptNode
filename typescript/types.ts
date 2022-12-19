
console.log('======================================TYPES===========================================================');
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
let variable: any = 42;
variable =[];

//===============
function sayMyName(name:string):void {
    console.log(name);
}
// sayMyName('Hiii')

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


// Object Type
// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number; last?: string }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
    if (pt.last) {
        console.log(pt.last.toUpperCase());
      }
  }
  //printCoord({ x: 3, y: 7 });
  //printCoord({ x: 3, y: 7, last:'the last parm'});
  
  //================================================= Union Types
  function printId(id: number | string) {
    if (typeof id === "string") {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
      } else {
        // Here, id is of type 'number'
        console.log(id);
      }
  }
  //printId(101);
  //printId('some text');

  function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
      console.log("Hello, " + x.join(" and "));
    } else {
      console.log("Welcome lone traveler " + x);
    }
  }
  // welcomePeople("sdfsdfds");
  //welcomePeople(["one", "two", "three"]);
  
 // Return type is inferred as number[] | string
 function getFirstThree(x: number[] | string) {
    return x.slice(0, 3);
 }
 console.log(getFirstThree('012345678910'));
 
 
// Type Aliases
type Point = {
    x: number;
    y: number;
  };
   
// Exactly the same as the earlier example
function printCoord1(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
 printCoord1({ x: 100, y: 100 }); 
 
//Differences Between Type Aliases and Interfaces
//Type aliases and interfaces are very similar, 
//and in many cases you can choose between them freely. 
//Almost all features of an interface are available in type,
//the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.
interface Point1 {
    x: number;
    y: number;
  }
   
function printCoord2(pt: Point1) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
   
// printCoord2({ x: 100, y: 100 });

// Adding new fields to an existing interface
// A Type cannot be changed after being created
interface Window {
    title: string
}
interface Window {
    ts: string
}
// Type Assertions, for example:
//const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
//const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");

// const x = "hello" as number; 
// const a = (expr as any) as T;

function printText(s: string, alignment: "left" | "right" | "center") {
    // ...
}
  //printText("Hello, world", "left");
  //printText("G'day, mate", "centre");
  
function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1;
}

interface Options {
    width: number;
  }
  function configure(x: Options | "auto") {
    // ...
  }
  configure({ width: 100 });
  configure("auto");
  // configure("automatic");
  
  
  interface PaintOptions {
    shape: Options;
    xPos?: number;
    yPos?: number;
  }
  
  function paintShape(opts: PaintOptions) {
    let xPos = opts.xPos === undefined ? 0 : opts.xPos;
    let yPos = opts.yPos === undefined ? 0 : opts.yPos;

    console.log(xPos);
    console.log(yPos);
    
      }
   
  const shape: Options = 
        { width: 123 
  } 
  paintShape({ shape });
  paintShape({ shape, xPos: 100 });
  paintShape({ shape, yPos: 100 });
  paintShape({ shape, xPos: 100, yPos: 100 });
  
  //=================================================readonly Properties ================================================================
  interface SomeType1 {
    readonly prop: string;
  }
  function doSomething(obj: SomeType1) {
    // We can read from 'obj.prop'.
    console.log(`prop has the value '${obj.prop}'.`);
    // But we can't re-assign it.
    // obj.prop = "hello";
  }
  interface Home {
    readonly resident: { name: string; age: number };
  }
  function visitForBirthday(home: Home) {
    // We can read and update properties from 'home.resident'.
    console.log(`Happy birthday ${home.resident.name}!`);
    home.resident.age++;
    console.log(`Adn age now is ${home.resident.age}!`);
  }
  function evict(home: Home) {
    // But we can't write to the 'resident' property itself on a 'Home'.
    //home.resident = {
    //  name: "Victor the Evictor",
    //  age: 42,
    //};
  }
  const tyyy: Home = 
  {  
    resident: {name:'Yurka', age:44}  
  }
  visitForBirthday(tyyy);
  //=========================================================================================================================
  //It’s important to manage expectations of what readonly implies. 
  //It’s useful to signal intent during development time for TypeScript on how an object should be used. 
  //TypeScript doesn’t factor in whether properties on two types are readonly when checking whether those types are compatible, so readonly properties can also change via aliasing.
  interface Person {
    name: string;
    age: number;
  }
  interface ReadonlyPerson {
    readonly name: string;
    readonly age: number;
  }
   
  let writablePerson: Person = {
    name: "Person McPersonface",
    age: 42,
  };
   
  // works
  let readonlyPerson: ReadonlyPerson = writablePerson;
   
  console.log(readonlyPerson.age); // prints '42'
  writablePerson.age++;
  console.log(readonlyPerson.age); // prints '43'
  //=========================================================================================================================
  
  
  interface StringArray {
    [index: number]: string;
  }
   
  const myArray: StringArray = {10:'dsfds', 20:'sfsdf', 30:'werew'};
  const secondItem = myArray[1];
  //console.log(secondItem)
  
  //=========================================Extending Types==================================================================
  interface Colorful {
    color: string;
  }
   
  interface Circle {
    radius: number;
  }
   
  interface ColorfulCircle extends Colorful, Circle {}
   
  const cc: ColorfulCircle = {
    color: "red",
    radius: 42,
  };
  
  
  interface Colorful {
    color: string;
  }
  interface Circle {
    radius: number;
  }
   
  type ColorfulCircle2 = Colorful & Circle;
  // pass Colorful & Circle to the function:
  function draw(circle: Colorful & Circle) {
    console.log(`Color was ${circle.color}`);
    console.log(`Radius was ${circle.radius}`);
  }
  // okay
  draw({ color: "blue", radius: 42 })
  
  
  interface NumberBox {
    contents: number;
  }
  interface StringBox {
    contents: string;
  }
  interface BooleanBox {
    contents: boolean;
  }
  function setContents(box: StringBox, newContents: string): void;
  function setContents(box: NumberBox, newContents: number): void;
  function setContents(box: BooleanBox, newContents: boolean): void;
  function setContents(box: { contents: any }, newContents: any) {
    box.contents = newContents;
  }