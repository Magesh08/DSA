let array =[3,4,1,6,5];

for (let i = 0; i < array.length -1; i++) {
    let min =i;
    for (let j = i +1; j < array.length; j++) {
        if (array[j]<array[min]) {
            min = j;
        }
    }
    let temp =array[min];
    console.log(`temp log: ${temp}`);
    array[min]=array[i];
    console.log(` array of min: ${array[min]}`);
    array[i]=temp;
    console.log(`console of array of i : ${array[i]}`)
    console.log(array);
}
