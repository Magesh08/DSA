let s = "dog cat cat dog";
let pattern = "abba";
function wordpattern(pattern,s) {
     const words = s.split(' ');
     console.log(words);
    if (pattern.length !== words.length) return false;

    const charToWord = new Map();
    const wordToChar = new Map();



    for (let i = 0; i < pattern.length; i++) {
        const c = pattern[i];
        const w = words[i];
        // console.log(charToWord);
        // console.log(wordToChar);
        // Check if c is already mapped
        if (charToWord.has(c) && charToWord.get(c) !== w) return false;

        // Check if w is already mapped
        if (wordToChar.has(w) && wordToChar.get(w) !== c) return false;

        charToWord.set(c, w);
        wordToChar.set(w, c);
    }

    return true;
}
console.log(wordpattern(pattern,s));