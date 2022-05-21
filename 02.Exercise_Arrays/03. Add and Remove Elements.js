function solve(input){
    let num = 1;
    let result= [];
    for (let i = 0; i < input.length; i++){
         let command = input[i];
         if (command == 'add'){
             result.push(num);
         } else {
             result.pop();
         }

         num++;
    }
    if (result.length === 0){
        console.log('Empty');
    } else {
        console.log(result.join('\n'))
    }
}
solve(['remove', 
'remove', 
'remove']
)