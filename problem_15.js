function missingNumber(arr,n){
    const sum_ftTwoNum = (n * (n + 1)) / 2;
    const Sum = arr.reduce((total_sum,num) => total_sum + num,0);

    return sum_ftTwoNum - Sum;
}

const arr = [1,2,4,6,3,7,8];
console.log(missingNumber(arr,8));