
const yuu: string = 'kukuruku';
const yu12: number = 56;

class Person {
    constructor(readonly inptype:string){
    }
}
const max = new Person('Maxim');
const map = new Map() 

const btn = document.querySelector('#btn')!;

btn.addEventListener('click', ()=>{
    console.log('btn clicked')
})


//========================
function logInfo(data: string) {
    console.log(data)
}

logInfo('sdfsdfsd')
