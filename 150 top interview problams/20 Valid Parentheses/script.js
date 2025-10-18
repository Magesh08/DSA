let value ="{}";

function parantheses(value) {
    let map = {
        "}":"{",
        ")":"(",
        "]":"["
    }
    let stack = [];

    for(let char of value){
        if(map[char]){
            const top =  stack.pop();
           

        }
    }

}
console.log(parantheses(value));