function FibonacciSequence(n){
    if(n == 1){
        return 0;
    }else if(n == 2){
        return 1;
    }else{
        return FibonacciSequence(n - 1) + FibonacciSequence(n - 2);
    }
}
console.log(FibonacciSequence(10));