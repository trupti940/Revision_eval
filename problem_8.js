function findDuplicates(arr){
    const duplicate_ele = [];
    const dic = {};

    for(let n of arr){
        dic[n] = (dic[n] || 0) + 1;
    }
    for(let key in dic){
        if(dic[key] > 1){
            duplicate_ele.push(Number(key));
        }
    }
    return duplicate_ele;
}

const arr = [1,2,3,4,5,3,6,1];
console.log(findDuplicates(arr))