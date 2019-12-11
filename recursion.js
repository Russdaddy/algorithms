const loopNTimes = (n) =>{
    console.log(n);
    if(n === 0){
        
        return `done looping times`;
    }
    return loopNTimes(n-1);
}

let result = loopNTimes(3);
console.log(result)