function solve(fruit, weight, num){
    let kgs = weight / 1000
    let money = kgs * num;
    console.log(`I need $${money.toFixed(2)} to buy ${kgs.toFixed(2)} kilograms ${fruit}.`)
}
solve('orange', 2500, 1.80)