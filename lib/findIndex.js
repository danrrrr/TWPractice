module.exports = (arr, item) => {
    let result = [];
    Object.keys(arr).forEach(x => {
        if(arr[x] === item){
            result.push(x);
        }
     });
    return result.join(',');
}