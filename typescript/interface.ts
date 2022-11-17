

export interface Rect {
   readonly id: string
   color:string
   size: {
    width:number
    height:number
   } 
} 


const rect1: Rect = {
    id: '12244',
    size: {
        width: 12,
        height: 123
    },
    color: 'green'
}

const rect2: Rect = {
    id: '1234567',
    color: 'red',
    size: {
        width:123,
        height:412
    }
}
rect2.color = 'black';

const rect3 = {} as Rect
const rect4 = <Rect>{}
//==================================================

interface ReactWithArea extends Rect {
    getArea: ()=> number
}

const rect5: ReactWithArea = {
    id:'123455',
    size: {
        width: 20,
        height: 20
    },
    color: 'black',
    getArea(): number {
        return this.size.width * this.size.height
    } 
}

//=====================================

interface IClock {
    time: Date
    setTime(date:Date): void
}

class Clock implements IClock {
    time: Date =new Date()
    setTime(date: Date): void {
        this.time = date
    }
}

//==========================================

interface Styles {
    border:string
    [key:string]: string
}

const ty01:Styles = {
    border: '1px solid black',
    otherpropertyStr: 'sdfsdf'
}

