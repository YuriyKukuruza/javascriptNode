//=============================================GENERIC TYPES============================

const arrayofNumbers: Array<number> = [1,2,3,4,5,6,7,8]
const arrayofStrings: Array<string> = ['hello','of','strings']


function reverse<T>(array:T[]): T[] {
    return array.reverse();
}

function reverse1(array:Array<number> ) {
    return array.reverse();
}

function reverse2(array:Array<string> ) {
    return array.reverse();
}


const ty = reverse(arrayofNumbers)
const ty1 = reverse(arrayofStrings)

console.log(ty)
console.log(ty1)


