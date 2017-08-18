 let arr = [1,3,7,1,4];
 let result =[];
 Object.keys(arr).forEach(x => {
    if(arr[x] === 1){
        result.push(x);
    }
 })
console.log(result.join(','));