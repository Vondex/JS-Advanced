function solve(arr) {
    let result = [];
    let biggest = Number.MIN_SAFE_INTEGER;

    arr.reduce((accumulated, current) => {
        if (current >= biggest) {
            biggest = current;
            accumulated.push(current);
        }

        return accumulated;
    }, result)

    return result;
}
console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
))