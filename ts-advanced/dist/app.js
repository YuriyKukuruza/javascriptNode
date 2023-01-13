"use strict";
const yuu = 'kukuruku';
const yu12 = 56;
class Person {
    constructor(inptype) {
        this.inptype = inptype;
    }
}
const max = new Person('Maxim');
const map = new Map();
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    console.log('btn clicked');
});
//========================
function logInfo(data) {
    console.log(data);
}
logInfo('sdfsdfsd');
