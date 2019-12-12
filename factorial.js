//not memoed
// const factorial = (n)=>{
//     // console.log(n)
//     if(n === 1){
//         return n;   
//     }
//     console.log(`returning ${n} * factorial(${n - 1})`)
//     return n * factorial((n-1));
// }

// let result = factorial(8);
// console.log(result);

//memoized
const memoize = (cb)=>{
    let cache = {}
    return (n)=>{
        if(n in cache){
            console.log("return from cache")
            return cache[n];
        }

        console.log("evaluate")
        cache[n] = cb(n);
        return cb(n);
    }
}

let memoizedFactorial = memoize((x)=>{
    if(x === 0){
        return 1;
    }
    return x * memoizedFactorial(x-1);
})

console.log(memoizedFactorial(3))
// console.log(memoizedFactorial(10))
// console.log(memoizedFactorial(10))
// console.log(memoizedFactorial(3))