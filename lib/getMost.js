module.exports = str => {
    let result = {};
let max = 0;
let obj = {};
const arr = str.split('');
    arr.forEach(x => {
        if(x in result){
            result[x] ++;
        }else{
            result[x] = 1;
        }
    });
    for(let x in result){
        if(result[x] > max){
            max = result[x];
        }
    }
    for(let x in result){
        if(max === result[x]){
            obj[x] = max;
        }
    }
    return Object.entries(obj).join(',');
}