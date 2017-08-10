function findSingle(arr){
    let res = arr[0];
    return arr.reduce((res, value) =>res ^= value);
}
console.log(findSingle([2,2,5,5,3]));