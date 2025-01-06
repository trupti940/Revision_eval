function longestWord(sentence){
    let word = sentence.split(" ");
    let longest_word = "";

    for(let i of word){
        if(i.length > longest_word.length){
            longest_word = i;
        }
    }
    return longest_word;
}

console.log(longestWord("The quick brown fox jumped over the lazy dog"))