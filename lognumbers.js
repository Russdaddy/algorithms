const logNumbers =(start,end)=>{  
    console
    function log(n){
        console.log(n)
        if (n < end){
            return log(n+1);
        }
    }
    log(start);
}

logNumbers(5,10);

// console.log(result);