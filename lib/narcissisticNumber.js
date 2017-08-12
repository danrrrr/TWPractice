function narcissisticNumber(){
    let result = `水仙花数有：`;
    for(let i = 100; i < 1000; i++){
        let a = i % 10;
        let b = parseInt(i / 10) % 10;
        let c = parseInt(i / 100) % 10;
        if(i == a*a*a + b*b*b + c*c*c){
            result += `${i} `;
        }
    }

    return  result;
}

module.exports = narcissisticNumber;