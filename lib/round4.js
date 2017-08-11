function getChain(str, val){
    let arr = str.split('->');
    val = val.toString();
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === val){
            arr.splice(i, 1);
            i--;
        } 
    }
    let result = arr.join('->');
    return result;
}
module.exports = getChain;