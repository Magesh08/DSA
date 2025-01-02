let arr1=[1,2,2,2,3,4,5,6];
let arr2=[7,8,2,9];

function union(arr1, arr2) {
    let set = new Set();
    let union=[];
    for (let num of arr1) {
        set.add(num);
        console.log(num);
    }
    
    for(let num of arr2){
        set.add(num)
    }
    for(let num of set){
        union.push(num)
    }
    return union;
}
console.log(union(arr1, arr2));