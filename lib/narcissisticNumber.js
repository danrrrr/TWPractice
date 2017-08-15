function narcissisticNumber(){
    let result = `水仙花数有：`;
    for(let i = 100; i < 1000; i++){
        if(i == Math.pow(i % 10, 3) + Math.pow(Math.floor(i / 10) % 10, 3) + Math.pow(Math.floor(i / 100), 3)) result += `${i} `; 
    }
    return  result;
}

module.exports = narcissisticNumber;