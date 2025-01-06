function removeDuplicates(s){
    let distinct_str = "";
    let dic = {};

    for(let i of s){
        if(!dic[i]){
            dic[i] = true;
            distinct_str += i;

        }
    }
return distinct_str;
}
console.log(removeDuplicates("programming"));