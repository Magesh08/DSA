let list = [1, 8, 6, 2, 5, 4, 8, 3, 7];

function waterbucket(list) {
    let left = 0;
    let right = list.length - 1;
    let maxArea = 0;
    while (left < right) {
        let width = right - left; //1)8-0=8,
        console.log(`width ${width}`);
        let minHeight = Math.min(list[left], list[right]);
        console.log(`area calculation = minHeight(${minHeight}) * width(${width}) = ${minHeight * width}`);

        let area = minHeight * width;
        console.log(`area ${area}`);
        maxArea = Math.max(maxArea, area);

        if (list[left] < list[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
}
console.log(waterbucket(list));