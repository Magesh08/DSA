let word = "bcac";

function removeduplicate(word){
    let count = {};

    for(let char of word){
        // count[char] = (count[char] || 0) + 1;
        // count[char] = (count[char] ?? 0) + 1;
        count[char]= count[char] + 1 || 1;
        console.log(count)
         console.log(count[char]);
    }
    let stack = [];
    let seen = new Set();
    
    for(let char of word){
        count[char]--; // use this occurrence
        if(seen.has(char)) continue;
        while(stack.length > 0 && stack[stack.length - 1] > char && count[stack[stack.length - 1]] > 0){
            seen.delete(stack.pop());
        }
        stack.push(char);
        seen.add(char);

    }
    console.log(stack.join(''));

    return stack.join('');
}

removeduplicate(word);