module.exports = (arr, target) => {
    let temp = [];
    arr.forEach((x, index) => {
        if(x === target){
            temp.push(x);
            arr.splice(index, 1);
        }
    });
    return arr.concat(temp);
}