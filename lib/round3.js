function findSingle(arr){
    return arr.reduce((res, value) =>res ^= value);
}
module.exports = findSingle;