function getChange(payedTotal, priceTotal) {
    var totalChange = "Your change is:";
    if (payedTotal < priceTotal) {
        return "Not enough money"
    }
    if (payedTotal == priceTotal) {
        return "Change is $0.00"
    }
    var dollarOptions = [50, 20, 10, 5, 1];
    var coinOptions = [25, 10, 5, 1];
    var change = (payedTotal - priceTotal).toFixed(2);
    var coins = ((change - Math.floor(change)).toFixed(2)) * 100;
    var dollars = Math.floor(change);
    while (dollars >= 50) {
        totalChange += ' $50';
        dollars -= 50
    }
    while (dollars >= 20) {
        totalChange += ' $20';
        dollars -= 20
    }
    while (dollars >= 10) {
        totalChange += ' $10';
        dollars -= 10
    }
    while (dollars >= 5) {
        totalChange += ' $5';
        dollars -= 5
    }
    while (dollars >= 1) {
        totalChange += ' $1';
        dollars -= 1
    }

    while (coins >= 25) {
        totalChange += ' ¢25';
        coins -= 25
    }
    while (coins >= 10) {
        totalChange += ' ¢10';
        coins -= 10
    }
    while (coins >= 5) {
        totalChange += ' ¢5';
        coins -= 5
    }
    while (coins >= 1) {
        totalChange += ' ¢1';
        coins -= 1
    }
    return totalChange
}

console.log(getChange(20, 89.34)); //Not enough money
console.log(getChange(20, 15.42)); //Your change is: $1 $1 $1 $1 ¢25 ¢25 ¢5 ¢1 ¢1
console.log(getChange(100, 15.56)); //Your change is: $50 $20 $10 $1 $1 $1 $1 ¢25 ¢10 ¢5 ¢1 ¢1 ¢1 ¢1

