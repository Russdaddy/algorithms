const memoizedClosureTimes10 = ()=>{
    const cache = {};
    return (n)=>{
        if(n in cache){
            console.log('fetching: ',n);
            return cache[n]
        }
        else {
            console.log('Calculating result');
            let result = n * 10;
            cache[n] = result;
            return result;
        }
    }
}

let memoizedClosure = memoizedClosureTimes10(10);

console.log(memoizedClosure(10))
console.log(memoizedClosure(10))
console.log(memoizedClosure(10))
console.log(memoizedClosure(7))