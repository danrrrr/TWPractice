function getPrime(num){
    let i = 2;
    let result = `${num}=`;
    while(i <= num){
        if(num % i === 0){
            result += i;
            num /= i;
        }else{
            i++;
        }
    }
    return result;
}
console.log(getPrime(90));