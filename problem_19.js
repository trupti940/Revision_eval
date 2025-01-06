function intersection(arr1,arr2){
    let dic = {};
    let res = [];

    for(let i of arr1){
        dic[i] = (dic[i] || 0) + 1;
    }

    for (let i of arr2){
        if(dic[i]){
            res.push(i);
            dic[i]--;
        }
    }
    return res;
}

console.log(intersection([1,2,2,1],[2,2]));