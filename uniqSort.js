const uniqSort = function(arr){
    const breadcrumbs = [];
    const result = [];
    
    for (let i = 0;i<arr.length;i++){
        if (!breadcrumbs[arr[i]]){            
            breadcrumbs[arr[i]] = true;
            result.push(arr[i])
        }
        
    }
    return result.sort((a,b)=> a - b);
}

var result = uniqSort([4,2,2,3,2,2,2]);