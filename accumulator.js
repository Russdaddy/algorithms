function accumulate(arr,joinString){
    
    function add(index,resultSoFar){
        //on each iteration, add to the result
        resultSoFar += arr[index];
        if(index === arr.length - 1){
            //base case when index is at the end of the array
            return resultSoFar;
        }

        //recursive case adds to index and continues to pass result so far
        return add(index+1,resultSoFar + joinString)
    }

    //starts at empty
    return add(0,'');
    // 'ahi33hi:,g'
}

const memoize = (cb)=>{
    let cache = {};
    return (...args)=>{
        if(args[0] in cache){
            console.log("returning from cache")
            return cache[args[0]];
        } else {
            console.log("evaluating")
            let result = cb(...args);
            cache[args[0]] = result;
            return result;
        }
    }
}

let memoizedAccumulate = memoize((arr,joinString)=>{
    return accumulate(arr,joinString);
})

let result = memoizedAccumulate(['a','b','c'],' hi ')
let secondResult = memoizedAccumulate(['a','b','c'],' hi ')
let thirdResult = memoizedAccumulate(['a','b','c'],' hi ')

console.log(result,secondResult,thirdResult)