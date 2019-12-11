const times10 = (num)=> num * 10;

const cache = {};

const memoTimes10 = (num) =>{
    if(cache[num]){
       return cache[num];
    } else {
        var result = num * 10;
        cache[num] = result;
        return result;
    }
}


console.log(
    times10(9),
    memoTimes10(100),
    memoTimes10(13),
    memoTimes10(100),
)

console.log(cache);
