function findSingle(arr){
    return arr.reduce((res, value) =>res ^= value);
}
console.log(findSingle([2,2,5,5,3]));