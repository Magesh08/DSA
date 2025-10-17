let strs = ["flower","flow","flight"];

function longestCommonPrefix (strs){
    // if (strs.length === 0) return "";
    // let prefix = strs[0];
    // for (let i = 1; i < strs.length; i++) {
    //     console.log(strs[i].indexOf(prefix))
    //     while (strs[i].indexOf(prefix) !== 0) {
    //         prefix= prefix.slice(0 , prefix.length-1)
    //         if(prefix === "") return "";
    //     }
        
    // }
    // return prefix;
    if (strs.length === 0) return "";
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        console.log(strs[i]);
        // while(strs[i].indexOf(prefix) !== 0){

        // }
        
    }
}

console.log(longestCommonPrefix(strs));