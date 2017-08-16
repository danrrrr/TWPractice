module.exports = arr => {
    let result = [];
    arr.forEach(x => {
        if(arr.indexOf(x) !== arr.lastIndexOf(x) && result.indexOf(x) === -1){
            result.push(x);
        }
    });
    console.log(result);
    return result.toString();
}
