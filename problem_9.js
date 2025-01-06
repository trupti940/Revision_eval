function primeNumbers(start,end){
    function findPrimeNumber(n){
        if(n < 2){
            return false;
        }
        for(let i = 2; i * i <= n; i++ ){
            if(n % i === 0){
                return false;
            }
        }
        return true
    }

    const prime_number = [];
    for(let i = start; i <= end; i++){
        if(findPrimeNumber(i)){
            prime_number.push(i);
        }
    }
    return prime_number;
}

console.log(primeNumbers(10,20));