export let age : number = 20;
export class Employee {
    empCode: number;
    empName: string;
    constructor(name: string, code: number) {
        this.empName = name;
        this.empCode = code;
    }
    displayEmployee() {
        console.log ("Employee Code: " + this.empCode + ", Employee Name: " + this.empName );
    }
}
let companyName:string = "XYZ";

class TypeScript {
    version: string
    
    constructor(version: string) {
        this.version = version
    }
    
    info(name:string){
        return `[${name}]: TypeScript Version is ${this.version}`;
    }
}

const c1 = new TypeScript('v32');
//console.log(c1.info('Yurka'));
      
// new version of set up class fields through contructor
class Car {
   special :number = 4
   constructor(readonly inptype:string) {
   } 
   info(name:string){
    return `[${name}]: TypeScript Version is ${this.inptype} with ${this.special.toString()}`;
    }
}

class Animal {
    protected voice: string =''
    public color:string ='black'
    constructor (){
        this.go();
    }
    private go() { 
        console.log('Goooo')
    }
}

class Cat extends Animal {
    public setVoice (voice: string ):void {
        this.voice = voice;
    } 
}

const cat = new Cat(); 
cat.setVoice('color');
cat.color = 'sdfsd';
//cat.voice = can't access because of protected method 

//===================================================== Abstract classes=====================

abstract class Component {
    abstract render():void
    abstract info(): string
}

class AppComponent extends Component{
    render():void {
        console.log('fdsd');
    }
    info():string{
        return 'dsfsdf';
    } 
}
//classes commit-one
// classed -master




