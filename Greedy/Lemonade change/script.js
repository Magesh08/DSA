function lemonadeChange(bills) {
    let five = 0;
    let ten = 0;

    for (let bill of bills) { // use for...of
        if (bill === 5) {
            five++;
        } else if (bill === 10) {
            if (five > 0) {
                five--;
                ten++;
            } else {
                return false;
            }
        } else if (bill === 20) {
            if (ten > 0 && five > 0) {
                ten--;
                five--;
            } else if (five >= 3) {
                five -= 3;
            } else {
                return false;
            }
        }
    }
    return true;
}

let billsArr = [5, 5, 5, 10, 20];
console.log(lemonadeChange(billsArr)); // true