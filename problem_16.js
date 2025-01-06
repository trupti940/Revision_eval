function stringCompression(str){
    let s = "";
    let count = 1;

    for(let i = 0; i < str.length; i++){
        if(str[i] === str[i+1]){
            count++;
        }else{
            s += str[i] + count;
            count = 1
        }
    }
    return s;
}

console.log(stringCompression("aaabbcddd"));