function solve(obj){

function getEngine(power){
    if (power <= 90){
        return { power: 90, volume: 1800 }
    } else if (power <= 120){
        return { power: 120, volume: 2400 }
    } else {
        return { power: 200, volume: 3500 }
    }
}

let wheels = new Array(4);

obj.wheelsize % 2 == 0 ?
wheels.fill(obj.wheelsize-1, 0, 4) :
wheels.fill(obj.wheelsize, 0, 4);
return {
    model: obj.model,
    engine: getEngine(obj.power),
    carriage: {type: obj.carriage, color: obj.color},
    wheels
};

}
console.log(solve({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
))