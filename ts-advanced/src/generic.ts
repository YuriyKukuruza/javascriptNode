//const cars: string[] = ['Ford','Audi'];
//const cars2: Array<string> = ['Ford','Audi']

//const promise  = new Promise<string>(resolve => {
//    setTimeout(()=> { 
//        resolve('Promise resolved');
//    }, 2000)
//})

//promise.then(data => {
//    console.log(data.toUpperCase())
//})


function mergeObjects<T extends object, R extends object>(a:T, b: R) {
    return Object.assign({},a,b);
}

const merged = mergeObjects({name:'Yurka'}, {age:26});
const merged2 = mergeObjects({model:'Ford'}, {year:2010});

console.log(merged.name)
console.log(merged2.year)

// to check : if input parms as Object: asd extends object into function! 
//const merged3 = mergeObjects('dfsdfsd','sdfsdfdsf');
//console.log(merged3)
