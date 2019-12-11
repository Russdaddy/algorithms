const memoize = (cb)=>{
    //define a cache
    let cache = {};
    //return a function with a param of n
    return (...args)=>{
        if(n in cache){
            //return cached results if run before
            console.log("returning from cache")
            return cache[n];
        } else {
            //evaluate cb and store result in cache
            console.log("evaluating")
            let result = cb(...args);
            cache[n] = result;
            return result;
        }
    }
}

//someF becomes a memoized version of the passed in f()
//because memoize accepts a function parameter
//it also returns a function that will run the passed in cb
//and store results in 
let someF = memoize((n)=>{ return n * 10; })

someF(10);
someF(10);
someF(1000);