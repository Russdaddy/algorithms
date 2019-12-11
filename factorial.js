const factorial = (n)=>{
    // console.log(n)
    if(n === 1){
        return n;   
    }
    console.log(`returning ${n} * factorial(${n - 1})`)
    return n * factorial((n-1));
}

let result = factorial(8);
console.log(result);